from django.conf.urls import url
from . import views

urlpatterns = [
    # /country or /country/
    url(r'^$', views.index, name='country_index'),

    # /country/<country_name>/
    url(r'^(?P<country_name>[a-zA-Z]+)/$', views.get_country, title='country_detail')

    # /country/1/topscore
    #url(r'^(?P<country_id>[0-9]+)/streaks/$', views.streaks, name='country_topscore'),
]
