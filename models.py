from django.db import models


class Match(models.Model) :
    """
    The Match model contains the match name, each Country, the ending score, the man of the match,
    the match location, and the match date.
    Three foreign keys are maintained which represent each of the two Countries involved in the match 
    and the man of the match which is a Player
    The __str__ method is used to retrun the name of the match.
    """
    match = models.CharField(max_length=40, unique=True)
    country_one = models.ForeignKey('Country', related_name='country_one', to_field='country', default='none')
    country_two = models.ForeignKey('Country', related_name='country_two', to_field='country', default='none')
    scores = models.CharField(max_length=5)
    man_of_the_match = models.ForeignKey('Player', related_name='man_of_the_match', to_field='player', default='none')
    match_location = models.CharField(max_length=40)
    match_date = models.CharField(max_length=40)


    def __str__(self) :
        return self.match



class Country(models.Model) :
    """
    The Country model contains the country name, number of total goals made,
    team coach, and .
    A foreign key is maintained for the country's captain which is a Player.
    The __str__ method is used to return the name of the country.
    """
    country = models.CharField(max_length=30, unique=True)
    goals = models.CharField(max_length=2)
    coach = models.CharField(max_length=40)
    captain = models.ForeignKey('Player', related_name='captain', to_field='player', default='none')
    top_scorer = models.ForeignKey('Player', related_name='top_scorer', to_field='player', default='none')


    def __str__(self):
        return self.country



class Player(models.Model) :
    """
    The Player model contains the player name, country they played for, their position,
    their dob, the number of goals they made, and their original club.
    A foreign key named country is maintained for the relation of Player to Country.
    The __str__ method is used to return the name of the player.
    """
    player = models.CharField(max_length=40, unique=True)
    country = models.ForeignKey('Country', related_name ='country', to_field='country', default='none')
    position = models.CharField(max_length=2)
    dob = models.CharField(max_length=40)
    goals = models.IntegerField(default=0)
    club = models.CharField(max_length=40)


    def __str__(self):
        return self.player
