from django.shortcuts import render
from django.shortcuts import render_to_response
from django.http import HttpResponse
#from .models import Player
import sqlite3
import json

db = sqlite3.connect('/home/webdev/copaDB/copaDB.sqlite3')
cursor = db.cursor()
# https://docs.djangoproject.com/en/1.8/intro/tutorial03/#write-views-that-actually-do-something

cursor.execute('''SELECT id, player, position, dob, goals FROM www_player''')
user1 = cursor.fetchone()
print(user1)


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

