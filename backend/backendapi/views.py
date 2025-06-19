import logging
from rest_framework import generics
from rest_framework import status
from django.conf import settings
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from django.core.mail import EmailMultiAlternatives
from rest_framework.permissions import AllowAny
from django.template.loader import render_to_string



from .models import Submission
from .serializers import SubmissionSerializer

logger = logging.getLogger(__name__)

@method_decorator(csrf_exempt, name='dispatch')
class SubmissionCreateView(generics.CreateAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        self.perform_create(serializer)
        submission_instance = serializer.instance
        try:
            subject = 'Welcome and Thank you'

            html_message= render_to_string(
                'emails/welcome_email.html',
                {'user_name':submission_instance.name, 'class_link':''}

            )
            plain_message = f'Hi {submission_instance.name}, \n\n Our next class is secheduled for insert date here'
            email = EmailMultiAlternatives(
                subject,
                plain_message,
                settings.DEFAULT_FROM_EMAIL,
                [submission_instance.email]
            )
            email.attach_alternative(html_message, 'text/html')
            email.send(fail_silently=False)
        except Exception as e:
            logger.error(f"Error sending welcome email to{submission_instance.email}:{e}")
            return Response(
                {'message':'Form submitted, but failed to send email. Please contact site directly at kotekarate@gmail.com', 'submission_id':submission_instance.id},
                status=status.HTTP_201_CREATED
            )
        return Response(
            {'message': 'Form submitted successfully and welcome email sent!', 'submission_id': submission_instance.id},
            status=status.HTTP_201_CREATED)