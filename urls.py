from django.conf.urls import include, url
from . import views

urlpatterns = [
    # /
    url(r'^$', views.index, name='index'),

    # /index.html
    url(r'^index.html$', views.index, name='index'),

    # /about.html
    url(r'^about.html$', views.about, name='about'),
    
    # /country/
    url(r'^country/$', include('www.country.urls')),

    # /match/
    url(r'^match/$', include('www.match.urls')),

    # /player/
   # url(r'^player/$', include('www.player.urls')),
    url(r'^player/$', 'views.get_players', name='players'),

    # /(somepage).html
    url(r'^(?P<page_name>[-a-z\.A-Z]+)$', views.get_page, name='get_page'),

   # /(individual player).html
    url(r'^(?P<page_name>[-a-z\.A-Z]+)$', views.get_player_page, name='get_player_page'),
]
