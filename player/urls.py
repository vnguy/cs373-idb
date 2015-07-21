from django.conf.urls import url
from . import views

urlpatterns = [
    # /player
    url(r'^$', views.index, name='player_index'),
]
