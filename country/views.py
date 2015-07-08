from django.shortcuts import render
from django.http import HttpResponse
from www.models import Country

def index (request):
    context = {'names' : Country.objects.name}
    return render(request, 'country/index.html', context)

def detail (request, country_id):
    return HttpResponse("Deatils for country: %s" % country_id)

def streaks (request, country_id):
    return HttpResponse("Winnig/losing streaks for country: %s" % country_id)

