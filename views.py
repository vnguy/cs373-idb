from django.shortcuts import render
from django.shortcuts import render_to_response
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder
from django.http import HttpResponse, JsonResponse
from .models import Player, Country, Match
from django.db.models.query import QuerySet
from rest_framework import viewsets
from .serializers import MatchSerializer, CountrySerializer, PlayerSerializer
import json
import logging

logger = logging.getLogger(__name__)

def get_page(request, page_name = "index"):
    context = {} 
    return render(request, page_name+".html", context)

# Getting single objects
def get_country (request, country_name):
    country = Country.objects.get(country=country_name)
    #return HttpResponse(serializers.serialize('json', countries), content_type="json")
    return render(request, 'country-template.html', {'con':country})

def get_player (request, player_name):
    player = Player.objects.get(player=player_name)
    return render(request, 'players-template.html', {'player':player})

def get_match (request, match_name):
    match = Match.objects.get(match=match_name)
    return render(request, 'match-template.html', {'match':match})

# Gettins ALL objects
def get_countries (request):
    countries = Country.objects.all()
    #return JsonResponse(countries, safe=False)
    #return JsonResponse(countries, safe=False, encoder=serializers.get_serializer('json'))
    return HttpResponse(serializers.serialize('json', countries), content_type="json")

    return render(request, 'teams.html', {'countries':countries})

def get_players (request):
    players = Player.objects.all()
    return render(request, 'players.html', {'players':players})

def get_matches (request):
    matches = Match.objects.all()
    return render(request, 'matches.html', {'matches':matches})
    

class MatchViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows players to be viewed or edited
    """
    queryset = Match.objects.all()
    serializer_class = MatchSerializer

class CountryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows players to be viewed or edited
    """
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class PlayerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows players to be viewed or edited
    """
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


"""
# Get Model by Name
def country(request, country_name):
    country = Country.objects.get(country=country_name)
    if(request.is_ajax()):
        return JsonResponse(country,safe=False)
    return render(request, 'country-template.html', {'country': country})

def match(request, match_name):
    match = Match.objects.get(match=match_name)
    if(request.is_ajax()):
        return JsonResponse(match,safe=False)
    return render(request, 'match-template.html', {'match': match})

def player(request, player_name):
    player = Player.objects.get(player=player_name)
    if(request.is_ajax()):
        return JsonResponse(player,safe=False)
    return render(request, 'players-template.html', {'player': player})

# Get All for Each Model
def countries(request):
    if(request.is_ajax()):
        return JsonResponse(Country.objects.all(),safe=False)
    return render(request, 'teams.html', {'countries': Country.objects.all()})

def matches(request):
    if(request.is_ajax()):
        return JsonResponse(Match.objects.all(),safe=False)
    return render(request, 'matches.html', {'matches': Match.objects.all()})

def players(request):
    if(request.is_ajax()):
        return JsonResponse(Player.objects.all(),safe=False)
    return render(request, 'players.html', {'players': Player.objects.all()})
"""
