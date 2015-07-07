from django.db import models


class Match(models.Model) :
    """
    The Match model contains the match name, match winner, each country's score, each country's
    number of shots, and each country's percentage of possession.
    Two foreign keys are maintained which represent each of the two countries involved in the match.
    The __str__ method is used to retrun the name of the match.
    """
    name = models.CharField(max_length=40, unique=True)
    match_winner = models.CharField(max_length=20)
    country_one = models.ForeignKey('Country', related_name='country_one', to_field='name', default='none')
    country_two = models.ForeignKey('Country', related_name='country_two', to_field='name', default='none')
    country_one_score = models.IntegerField(default=0)
    country_two_score = models.IntegerField(default=0)
    country_one_shots = models.IntegerField(default=0)
    country_two_shots = models.IntegerField(default=0)
    country_one_possession = models.FloatField(default=0)
    country_two_possession = models.FloatField(default=0)


    def __str__(self) :
        return self.name



class Country(models.Model) :
    """
    The Country model contains the country name, number of matches played, winning streak,
    losing streak, and top score.
    The __str__ method is used to return the name of the country.
    """
    name = models.CharField(max_length=30, unique=True)
    matches_played = models.IntegerField(default=0)
    winning_streak = models.IntegerField(default=0)
    losing_streak = models.IntegerField(default=0)
    top_score = models.IntegerField(default=0)


    def __str__(self):
        return self.name



class Player(models.Model) :
    """
    The Player model contains the player name, position, number, original club, height, and weight.
    A foreign key named country is maintained for the relation of Player to Country.
    The __str__ method is used to return the name of the player.
    """
    name = models.CharField(max_length=30, unique=True)
    country = models.ForeignKey(Country, related_name ='country', to_field='name', default='none')
    position = models.CharField(max_length=1)
    number = models.IntegerField(default=0)
    club = models.CharField(max_length=30)
    height = models.FloatField(default=0)
    weight = models.IntegerField(default=0)


    def __str__(self):
        return self.name
