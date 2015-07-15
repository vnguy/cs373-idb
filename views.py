from django.shortcuts import render
from django.shortcuts import render_to_response
from django.http import HttpResponse
from .models import Player, Country, Match
import json

def get_page(request, page_name = "index"):
    context = {} 
    return render(request, page_name+".html", context)

# Getting single objects
def get_country (request, country_name):
    context = { 'con' : Country.objects.get(country=country_name) }
    return render(request, 'country-template.html', context)

def get_player (request, player_name):
    context = { 'player' : Player.objects.get(player=player_name) }
    return render(request, 'players-template.html', context)

def get_match (request, match_name):
    context = { 'match' : Match.objects.get(match=match_name) }
    return render(request, 'match-template.html', context)

# Gettins ALL objects
def get_countries (request):
    context = { 'countries' : Country.objects.all() }
    return render(request, 'teams.html', context)

def get_players (request):
    context = { 'players' : Player.objects.all() }
    return render(request, 'players.html', context)

def get_matches (request):
    context = { 'matches' : Match.objects.all() }
    return render(request, 'matches.html', context)
    

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
