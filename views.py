from django.shortcuts import render
from django.http import HttpResponse
#from .models import Player
import sqlite3

db = sqlite3.connect('.../copaDB.sqlite3')
cursor = db.cursor()
# https://docs.djangoproject.com/en/1.8/intro/tutorial03/#write-views-that-actually-do-something

cursor.execute('''SELECT id, player, position, dob, goals FROM www_player''')
user1 = cursor.fetchone()
print(user1[0])


def index (request):
    context = {}
    return render(request, 'index.html', context)

def about (request):
    context = {}
    return render(request, 'about.html', context)

def get_page(request, page_name):
    context = {}
    return render(request, page_name, context)

def get_player_page(request, page_name):
    cursor.execute('''SELECT id, player, position, dob, goals FROM www_player''')
    u = cursor.fetchone
    context = {Player.objects.get(player="page_name")}
    return render(request, page_name, context)

def player_view(request):
    return 0
   # return to response('players.html', { 'players': Player.objects.all()})
