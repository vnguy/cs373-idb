from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.core import serializers
from django.http import HttpResponse, JsonResponse, Http404
from django.conf import settings
from rest_framework import viewsets
from .models import Player, Country, Match
from .serializers import MatchSerializer, CountrySerializer, PlayerSerializer
import logging; logger = logging.getLogger(__name__)

def get_page(request, page_name = "index"):
    from os.path import dirname, isfile, abspath
    context = {} 
    my_dir = dirname(abspath(__file__))
    template = my_dir+"/templates/"+page_name+".html"
    #logger.info("Searching for template at: "+template)

    if (not isfile(template)):
        raise Http404("Page Not Found!")
    return render(request, template, context)

# Getting single objects
def get_country (request, country_name):
    country = get_object_or_404(Country, country=country_name)
    return render(request, 'country-template.html', {'con':country})

def get_player (request, player_name):
    player = get_object_or_404(Player, player=player_name)
    return render(request, 'players-template.html', {'player':player})

def get_match (request, match_name):
    match = get_object_or_404(Match, match=match_name)
    return render(request, 'match-template.html', {'match':match})


# Gettins ALL objects
def get_countries (request):
    countries = get_list_or_404(Country)
    return render(request, 'teams.html', {'countries':countries})

def get_players (request):
    players = get_list_or_404(Player)
    return render(request, 'players.html', {'players':players})

def get_matches (request):
    matches = get_list_or_404(Match)
    return render(request, 'matches.html', {'matches':matches})
    

# API ENDPOINTS
class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer

class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
