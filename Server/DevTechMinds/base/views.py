from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core.mail import send_mail
import json

@csrf_exempt
def send_email(request):
    if request.method == 'POST':
        data = json.loads(request.body)  # Parse JSON data
        message = data.get('message') # Get 'message' from JSON data
        emaill = data.get('email')
        from_email = emaill
        recipient_list = ['ahsanj3691@gmail.com']
        send_mail('Email Subject', message, from_email, recipient_list)
        return JsonResponse({'message': 'Email sent successfully'})
    elif request.method == 'GET':
        # Handle GET requests if necessary
        return JsonResponse({'message': 'This is a GET request. Use POST to send emails.'})
    return JsonResponse({'error': 'Invalid request method'}, status=400)
