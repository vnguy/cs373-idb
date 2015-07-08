from django.conf.urls import include, url
from . import views

urlpatterns = [
    # /
    url(r'^$', views.index, name='index'),

    # /about.html
    url(r'^about.html$', views.about, name='about'),

    # /country/
    url(r'^country/$', include('www.country.urls')),

    # /match/
    url(r'^match/$', include('www.match.urls')),

    # /player/
    url(r'^player/$', include('www.player.urls')),
]
