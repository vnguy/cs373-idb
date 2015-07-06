from django.db import models


class Match(models.Model) :
    """

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


    def __unicode__(self) :
        return self.name



class Country(models.Model) :
    """

    """
    name = models.CharField(max_length=30, unique=True)
    squad = models.CharField(max_length=500)
    matches_played = models.CharField(max_length=500)
    winning_streak = IntegerField
    losing_streak = IntegerField


    def __unicode__(self):
        return self.name



class Player(models.Model) :
    """

    """
    name = models.CharField(max_length=30, unique=True)
    country = models.ForeignKey('Country', related_name ='country', to_field='name', default='none')
    position = models.CharField(max_length=1)
    number = models.IntegerField
    club = models.CharField(max_length=30)
    height = models.FloatField
    weight = models.IntegerField


    def __unicode__(self):
        return self.name