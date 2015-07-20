from django.db import models


class Match(models.Model) :
    """
    The Match model contains the match name, each Country, the ending scores, the penalty scores,
    the man of the match, the match location, and the match date.
    Three foreign keys are maintained which represent each of the two Countries involved in the match 
    and the man of the match which is a Player
    The __str__ method is used to retrun the name of the match.
    """
    match = models.CharField(max_length=40, default="", unique=True)
    country_one = models.ForeignKey('Country', related_name='country_one', to_field='country', default='none')
    country_two = models.ForeignKey('Country', related_name='country_two', to_field='country', default='none')
    scores = models.CharField(max_length=5, default="")
    penalties = models.CharField(max_length=5, default="0-0")
    man_of_the_match = models.ForeignKey('Player', related_name='man_of_the_match', to_field='player', default='none')
    match_date = models.CharField(max_length=40, default="")
    match_location = models.CharField(max_length=40, default="")


    def get_absolute_url(self):
        return "/match/%s" % self.match

    def __str__(self) :
        return self.match



class Country(models.Model) :
    """
    The Country model contains the country name, number of total goals made,
    team coach, team's captain, and the team's top scorer, the scorers, and the players.
    Foreign keys are maintained for the country's captain and country's top scorer which are Players.
    Two ManyToMany keys are maintained for the country's scorers and players.
    The __str__ method is used to return the name of the country.
    """
    country = models.CharField(max_length=30, default="", unique=True)
    goals = models.IntegerField(default=0)
    coach = models.CharField(max_length=40, default="")
    captain = models.ForeignKey('Player', related_name='captain', to_field='player', default='none')
    top_scorer = models.ForeignKey('Player', related_name='top_scorer', to_field='player', default='none')
    scorers = models.ManyToManyField('Player', related_name='scorers')
    players = models.ManyToManyField('Player', related_name='players')

   
    def get_absolute_url(self):
        return "/country/%s" % self.country

    def __str__(self):
        return self.country



class Player(models.Model) :
    """
    The Player model contains the player name, country they played for, their position,
    their dob, the number of goals they made, and their original club.
    A foreign key named country is maintained for the relation of Player to Country.
    The __str__ method is used to return the name of the player.
    """
    player = models.CharField(max_length=40, default="", primary_key=True)
    team = models.ForeignKey('Country', related_name ='team', to_field='country', default='none')
    position = models.CharField(max_length=2, default="")
    dob = models.CharField(max_length=40, default="")
    goals = models.CharField(max_length=2, default="")
    club = models.CharField(max_length=40, default="")


    def get_absolute_url(self):
        return "/player/%s" % self.player

    def __str__(self):
        return self.player


import watson

watson.register(Match, fields=("match", "scores", "penalties", "match_date", "match_location"))
watson.register(Country, fields=("country", "coach"))
watson.register(Player, fields=("player", "position", "dob", "club"))
