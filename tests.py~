import os
import sys
import json
from django.test import setup_test_environment
from django.core.urlresolvers import reverse
from django.core.management import call_command

from django.test import TestCase
from django.utils import unittest
from django.http import HttpResponse

fromm json import dumps, loads


# Create your tests here.
class ModelTestCase(TestCase):

    # Match Model Testing
    def test_match1(self) :
        Country.objects.create(country=" ")
        Country.objects.create(country=" ")

	Player.objects.create(player=" ")

        Match.objects.create(name=" ", match_winner=" ", country_one=" ", country_two=" ", country_one_score=0, country_two_score=0, country_one_shots=0, country_two_shots=0, country_one_possession=0.0, country_two_possession=0.0)
        
        match_get = Match.objects.get(match="-")
        self.assertEqual(match_get.match, " ")
        self.assertEqual(match_get.match_winner, " ")
        self.assertEqual(match_get.country_one, " ")
        self.assertEqual(match_get.country_two, " ")
        self.assertEqual(match_get.scores, " ")
        self.assertEqual(match_get.man_of_the_match, " ")
        self.assertEqual(match_get.match_location, " ")
        self.assertEqual(match_get.match_date, " ")
        
    def test_match2(self) :
        Country.objects.create(country=" ")
        Country.objects.create(country=" ")

	Player.objects.create(player=" ")

        Match.objects.create(name=" ", match_winner=" ", country_one=" ", country_two=" ", country_one_score=0, country_two_score=0, country_one_shots=0, country_two_shots=0, country_one_possession=0.0, country_two_possession=0.0)
        
        match_get = Match.objects.get(match="-")
        self.assertEqual(match_get.match, " ")
        self.assertEqual(match_get.match_winner, " ")
        self.assertEqual(match_get.country_one, " ")
        self.assertEqual(match_get.country_two, " ")
        self.assertEqual(match_get.scores, " ")
        self.assertEqual(match_get.man_of_the_match, " ")
        self.assertEqual(match_get.match_location, " ")
        self.assertEqual(match_get.match_date, " ")
        
    def test_match3(self) :
        Country.objects.create(country=" ")
        Country.objects.create(country=" ")

	Player.objects.create(player=" ")

        Match.objects.create(name=" ", match_winner=" ", country_one=" ", country_two=" ", country_one_score=0, country_two_score=0, country_one_shots=0, country_two_shots=0, country_one_possession=0.0, country_two_possession=0.0)
        
        match_get = Match.objects.get(match="-")
        self.assertEqual(match_get.match, " ")
        self.assertEqual(match_get.match_winner, " ")
        self.assertEqual(match_get.country_one, " ")
        self.assertEqual(match_get.country_two, " ")
        self.assertEqual(match_get.scores, " ")
        self.assertEqual(match_get.man_of_the_match, " ")
        self.assertEqual(match_get.match_location, " ")
        self.assertEqual(match_get.match_date, " ")
        

    # Country Model Testing
    def test_country1(self) :
        Country.objects.create(country=" ", matches_played=0, winning_streak=0, losing_streak=0, top_score=0)

        country_get = Country.objects.get(country=" ")
        self.assertEqual(country_get.country, " ")
        self.assertEqual(country_get.goals, 0)
        self.assertEqual(country_get.coach, " ")
        self.assertEqual(country_get.captain, " ")
        self.assertEqual(country_get.top_scorer, " ")

    def test_country2(self) :
        Country.objects.create(country=" ", matches_played=0, winning_streak=0, losing_streak=0, top_score=0)

        country_get = Country.objects.get(country=" ")
        self.assertEqual(country_get.country, " ")
        self.assertEqual(country_get.goals, 0)
        self.assertEqual(country_get.coach, " ")
        self.assertEqual(country_get.captain, " ")
        self.assertEqual(country_get.top_scorer, " ")

    def test_country3(self) :
        Country.objects.create(country=" ", matches_played=0, winning_streak=0, losing_streak=0, top_score=0)

        country_get = Country.objects.get(country=" ")
        self.assertEqual(country_get.country, " ")
        self.assertEqual(country_get.goals, 0)
        self.assertEqual(country_get.coach, " ")
        self.assertEqual(country_get.captain, " ")
        self.assertEqual(country_get.top_scorer, " ")


    # Player Model Testing
    def test_player1(self) :
        Country.objects.create(country=" ")

        Player.objects.create(player=" ", country=" ", position=" ", number=0, club=" ", height=0.0, weight=0)

        player_get = Player.objects.get(player=" ")
        self.assertEqual(player_get.player, " ")
        self.assertEqual(player_get.country, " ")
        self.assertEqual(player_get.position, " ")
        self.assertEqual(player_get.dob, " ")
        self.assertEqual(player_get.goals, 0)
        self.assertEqual(player_get.club, " ")

    def test_player2(self) :
        Country.objects.create(country=" ")

        Player.objects.create(player=" ", country=" ", position=" ", number=0, club=" ", height=0.0, weight=0)

        player_get = Player.objects.get(player=" ")
        self.assertEqual(player_get.player, " ")
        self.assertEqual(player_get.country, " ")
        self.assertEqual(player_get.position, " ")
        self.assertEqual(player_get.dob, " ")
        self.assertEqual(player_get.goals, 0)
        self.assertEqual(player_get.club, " ")

    def test_player3(self) :
        Country.objects.create(country=" ")

        Player.objects.create(player=" ", country=" ", position=" ", number=0, club=" ", height=0.0, weight=0)

        player_get = Player.objects.get(player=" ")
        self.assertEqual(player_get.player, " ")
        self.assertEqual(player_get.country, " ")
        self.assertEqual(player_get.position, " ")
        self.assertEqual(player_get.dob, " ")
        self.assertEqual(player_get.goals, 0)
        self.assertEqual(player_get.club, " ")
