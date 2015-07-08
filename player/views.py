from django.shortcuts import render
from django.http import HttpResponse

def index (request):
    return HttpResponse("You've reached the player index!")
