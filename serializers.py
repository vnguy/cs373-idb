from .models import Country, Match, Player
from rest_framework import serializers

class MatchSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Match
        #fields = ('match','country_one','country_two','scores','penalties','man_of_the_match','match_date','match_location')

class CountrySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Country
        #fields = ('country', 'goals', 'coach', 'captain', 'top_scorer', 'scorers', 'players')

class PlayerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Player
        #fields = ('player', 'team', 'position', 'dob', 'goals', 'club')
        #read_only_fields = ('player', 'position', 'goals', 'club')
