from django.conf.urls import include, url
from django.views.generic.base import RedirectView
from . import views
import logging

logger = logging.getLogger(__name__)

urlpatterns = [
    # /
    url(r'^$', views.get_page),

    # /country/
    url(r'^country$', RedirectView.as_view(url='country/', permanent=False)),
    url(r'^country/$', views.get_countries),
    url(r'^country/(?P<country_name>[-a-z\.A-Z]+)/{0,1}$', views.get_country),

    # /match/
    url(r'^match$', RedirectView.as_view(url='match/', permanent=False)),
    url(r'^match/$', views.get_matches),
    url(r'^match/(?P<match_name>[-a-z\.A-Z]+)$', views.get_match),

    # /player/
    url(r'^player$', RedirectView.as_view(url='player/', permanent=False)),
    url(r'^player/$', views.get_players),
    url(r'^player/(?P<player_name>[- \w]+)$', views.get_player),

    # /dev/
    url(r'^devSearch$', RedirectView.as_view(url='devSearch/', permanent=False)),
    url(r'^devSearch/$', views.get_matchesDev),
    url(r'^autocomplete', views.autocomplete, name='autocomplete'),

    
    

    # /(somepage).html
    url(r'^(?P<page_name>[-a-z\.A-Z]+).html$', views.get_page),
]
