from django.shortcuts import render
from django.http import HttpResponse

def index (request):
    return HttpResponse("Hello, world. You're at country index!")

def detail (request, country_id):
    return HttpResponse("Deatils for country: %s" % country_id)

def streaks (request, country_id):
    return HttpResponse("Winnig/losing streaks for country: %s" % country_id)

