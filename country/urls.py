from django.conf.urls import url
from . import views

urlpatterns = [
    # /country
    url(r'^$', views.index, name='country_index'),

    # /country/1/
    url(r'^(?P<country_id>[0-9]+)/$', views.detail, name='country_detail'),

    # /country/1/topscore
    url(r'^(?P<country_id>[0-9]+)/streaks/$', views.streaks, name='country_topscore'),
]
