from django.conf.urls import include, url
from rest_framework import routers
from django.views.generic.base import RedirectView
from . import views
import logging

logger = logging.getLogger(__name__)


router = routers.DefaultRouter()
router.register(r'match', views.MatchViewSet)
router.register(r'country', views.CountryViewSet)
router.register(r'player', views.PlayerViewSet)

urlpatterns = [
    # REST API
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

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

    # /(somepage).html
    url(r'^(?P<page_name>[-a-z\.A-Z]+).html$', views.get_page),
]
