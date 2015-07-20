from django.shortcuts import render
from django.shortcuts import render_to_response
from django.http import HttpResponse
from .models import Player, Country, Match
import json
import logging

import re
from django.db.models import Q
import watson

logger = logging.getLogger(__name__)

def get_page(request, page_name = "index"):
    context = {} 
    return render(request, page_name+".html", context)

# Getting single objects
def get_country (request, country_name):
    context = { 'con' : Country.objects.get(country=country_name) }
    return render(request, 'country-template.html', context)

def get_player (request, player_name):
    #logger.debug("Grabbing player: "+player_name)
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
    
def get_matchesDev (request):
    context = { 'matches' : Match.objects.all() }
    return render(request, 'devSearch.html', context)

def autocomplete(request):
    post_text = request.GET.get('search')

    p_list = Player.objects.filter(player__icontains=post_text)

    paginator = Paginator(p_list, 10)

    players = serializers.serialize("json", p_list)

    return HttpResponse(contacts, content_type='application/json')

def normalize_query(query_string, findterms=re.compile(r'"([^"]+)"|(\S+)'_.findall, normspace=re.compile(r'\s{2,}').sub):
    return [normspace(' ', (t[0] or t[1]).strip()) for t in findterms(query_string)]

def get_query(query_string, search_fields):
    query = None
    terms = normalize_query(query_string)

    for term in terms:
        or_query = None

        for field in search_fields:
            q = Q(**{"%s_icontains" % field: term})
            if or_query is None:
                or_query = q
            else:
                or_query = or_query | q

        if query is None:
            query = or_query
        else:
            query = query & or_query

    return query


def splitParagraph(paragraph):
    sentenceEnders = re.compile('[.!?]')
    sentenceList = sentenceEnders.split(paragraph)
    return sentenceList

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
                final_sentence += "..." + s

        for q_item in query_items:
            for s in list(sentences);
                if(s.lower().find(query.lower()) != -1):
                    sentences.remove(s)
                    s = s.lower().replace(q_item.lower(), "<B class='search_term'>"+q_item.lower()+"</B>")
                    final_sentence += "..." + s
                    break
        final_sentence += "..."
        snippets.append(final_sentence)

    zipped = None
    if len(results) > 0:
        zipped = zip(results, snippets)
    length_results = len(results)

    return render_to_response('search.html', {"query": query, "length_results": length_results, "results": zipped}, context)




def searchTemp(request):
    query_string = ''
    found_entries = None
    if ('q' in request.GET) and request.GET['q'].strip():
        query_string = request.GET['q']

        entry_query = get_query(query_string, ['title', 'body',])

        found_entries = Entry.objects.filter(entry_query).order_by('-pub_date')

    return render_to_response('/templates/search/search_requests.html', { 'query_string': query_string, 'found_entries': found_entries }, context_instance=RequestContext(request))

        


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
