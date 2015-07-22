from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.core import serializers
from django.http import HttpResponse, JsonResponse, Http404
from django.conf import settings
from rest_framework import viewsets
from .models import Player, Country, Match
from .serializers import MatchSerializer, CountrySerializer, PlayerSerializer
import logging; logger = logging.getLogger(__name__)
import re, subprocess, os
import watson

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

# Helper Method for search function
def splitParagraph(paragraph):
    sentenceEnders = re.compile('[.!?]')
    sentenceList = sentenceEnders.split(paragraph)
    return sentenceList

# Method to run tests.py
def tests(request):
    BASE_DIR = os.path.dirname(os.path.dirname(__file__))
    
    cmd_line = "python3 " + os.path.join(BASE_DIR, 'manage.py') + " test www"
    pipe = subprocess.Popen(comman.split(), stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    result = pipe.stdout.readlines() + pipe.stderr.readlines()
    
    return render_to_response('tests.html', {'result':result})

# Search functionality which GETs the query and performs watson searches
#   for and/or keyword searches
def search(request):
    context = RequestContext(request)

    query = ""
    query_words = []

    if ('q' in request.GET) and request.GET['q'].strip():
        query = request.GET['q']

    query_items = query.split()

    and_search = watson.search(query, ranking=True)

    for a in and_search:
        print(a.url)
        print(a)

    results = list(and_search)

    for item in query_items:
        or_search = list(watson.search(item, ranking=True))
        for o in or_search:
            if not o in results:
                results.append(o)


    snippets = []

    for i in range(0, len(results)):
        final_sentence = ""
        sentences = splitParagraph(results[i].content)

        for s in list(sentences):
            if(s.lower().find(query.lower()) != -1):
                sentences.remove(s)
                s = s.lower().replace(query.lower(), "<B class='search_term'>"+query.lower()+"</B>")
                final_sentence += " " + s
                break

        for q_item in query_items:
            for s in list(sentences):
                if(s.lower().find(query.lower()) != -1):
                    sentences.remove(s)
                    s = s.lower().replace(query.lower(), "<B class='search_term'>"+query.lower()+"</B>")
                    final_sentence += " " + s
                    break

        final_sentence += " "
        snippets.append(final_sentence)

    zipped = None
    if len(results) > 0:
        zipped = zip(results, snippets)
    length_results = len(results)

    return render_to_response('search.html', {"query": query, "length_results": length_results, "results": zipped}, context)
