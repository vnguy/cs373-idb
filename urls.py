from django.conf.urls import include, url
from . import views

urlpatterns = [
    # /home/countries
    url(r'^country/$', include('www.country.urls')),

    # /home/countries
    url(r'^match/$', include('www.match.urls')),

    # /home/countries
    url(r'^player/$', include('www.player.urls')),
]
