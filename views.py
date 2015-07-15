from django.shortcuts import render
from django.shortcuts import render_to_response
from django.http import HttpResponse
from .models import Player, Country, Match
import sqlite3
import json

def index (request):
    context = {}
    return render(request, 'index.html', context)

def about (request):
    context = {}
    return render(request, 'about.html', context)

def get_page(request, page_name):
    context = {} 
    return render(request, page_name, context)

def get_player_page(request):
    cursor.execute('''SELECT id, player, position, dob, goals FROM www_player WHERE player = page_name''')
    context = cursor.fetchone
    return render(request, 'players.html', context)

def get_players(request):
    cursor.execute('''SELECT id, player, position, dob, goals FROM www_player''')
    context = cursor.fetchall()

    for i in context:
        print(i)
    return render_to_response('players.html', {'players' : context})

   # return to response('players.html', { 'players': Player.objects.all()})
def get_country_page(request):
    cursor.execute('''SELECT id, country, coach, captain_id,top_scorer_id, goals FROM www_country WHERE country = page_name''')
    context = cursor.fetchone()
    return render(request, 'context[1].html', context)
"""
def country_view(request):
    cursor.execute('''SELECT id, country, coach, captain_id,top_scorer_id, goals FROM www_country''')
    context = cursor.fetchall()
    data = {'html': render_to_string('players.html', {'players':context})}
    return HttpResponse(json.dumps(data), content_type='application/json')
"""
def get_countrys(request):
    cursor.execute('''SELECT id, country, coach, captain_id,top_scorer_id, goals FROM www_country''')
    context = cursor.fetchall()

    return render_to_response('players.html', {'players' : context})
    #return HttpResponse(json.dumps(data), content_type='application/json')

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

# Get Model by ID
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

#class CountryList(generics.ListCreateAPIView):
    #queryset = Country.objects.all()
    #serializer_class = RegionSerializer

#class MatchesList(generics.ListCreateAPIView):
    #queryset = Match.objects.all()
    #serializer_class = RegionSerializer

#class PlayerList(generics.ListCreateAPIView):
    #queryset = Player.objects.all()
def get_countries (request):
    context = {
        'countries' : Country.objects.all()
    }
    return render(request, 'teams.html', context)
def get_players (request, player_name):
    context = {
        'player' : Player.objects.all()
    }
    return render(request, 'players.html', context)
def get_matches (request, match_name):
    context = {
        'match' : Match.objects.all()
    }
    return render(request, 'matches.html', context)
    
def get_country (request, country_name):
    context = {
        'con' : Country.objects.get(country=country_name)
    }
    return render(request, 'country-template.html', context)
def get_player (request, player_name):
    context = {
        'player' : Player.objects.get(player=player_name)
    }
    return render(request, 'players-template.html', context)
def get_match (request, match_name):
    context = {
        'match' : Match.objects.get(match=match_name)
    }
    return render(request, 'match-template.html', context)
