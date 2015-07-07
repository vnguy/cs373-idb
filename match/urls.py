from django.conf.urls import url
from . import views

urlpatterns = [
    # /match
    url(r'^$', views.index, name='match_index'),
]
