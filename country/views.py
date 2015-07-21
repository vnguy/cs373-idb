from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from www.models import Country

def index (request):
    context = {
        'my_name' : "USA!",
        'con' : Country.objects.get(country='Chile')
    }
    return render(request, 'country/index.html', context)

def get_country (request, country_name):
    context = {
        'con' : Country.objects.get(country=country_name);
    }
    return render(request, 'country/country-template.html', context)

def detail (request, country_id):
    return HttpResponse("Deatils for country: %s" % country_id)

def streaks (request, country_id):
    return HttpResponse("Winnig/losing streaks for country: %s" % country_id)

