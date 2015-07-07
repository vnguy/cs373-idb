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
        Country.objects.create(name=" ")
        Country.objects.create(name=" ")

        Match.objects.create(name=" ", match_winner=" ", country_one=" ", country_two=" ", country_one_score=0, country_two_score=0, country_one_shots=0, country_two_shots=0, country_one_possession=0.0, country_two_possession=0.0)
        
        match_get = Match.objects.get(name="-")
        self.assertEqual(match_get.name, " ")
        self.assertEqual(match_get.match_winner, " ")
        self.assertEqual(match_get.country_one, " ")
        self.assertEqual(match_get.country_two, " ")
        self.assertEqual(match_get.country_one_score, " ")
        self.assertEqual(match_get.country_two_score, " ")
        self.assertEqual(match_get.country_one_shots, " ")
        self.assertEqual(match_get.country_two_shots, " ")
        self.assertEqual(match_get.country_one_possession, " ")
        self.assertEqual(match_get.country_two_possession, " ")
        
    def test_match2(self) :
        Country.objects.create(name=" ")
        Country.objects.create(name=" ")

        Match.objects.create(name=" ", match_winner=" ", country_one=" ", country_two=" ", country_one_score=0, country_two_score=0, country_one_shots=0, country_two_shots=0, country_one_possession=0.0, country_two_possession=0.0)
        
        match_get = Match.objects.get(name="-")
        self.assertEqual(match_get.name, " ")
        self.assertEqual(match_get.match_winner, " ")
        self.assertEqual(match_get.country_one, " ")
        self.assertEqual(match_get.country_two, " ")
        self.assertEqual(match_get.country_one_score, " ")
        self.assertEqual(match_get.country_two_score, " ")
        self.assertEqual(match_get.country_one_shots, " ")
        self.assertEqual(match_get.country_two_shots, " ")
        self.assertEqual(match_get.country_one_possession, " ")
        self.assertEqual(match_get.country_two_possession, " ")
        
    def test_match3(self) :
        Country.objects.create(name=" ")
        Country.objects.create(name=" ")

        Match.objects.create(name=" ", match_winner=" ", country_one=" ", country_two=" ", country_one_score=0, country_two_score=0, country_one_shots=0, country_two_shots=0, country_one_possession=0.0, country_two_possession=0.0)
        
        match_get = Match.objects.get(name="-")
        self.assertEqual(match_get.name, " ")
        self.assertEqual(match_get.match_winner, " ")
        self.assertEqual(match_get.country_one, " ")
        self.assertEqual(match_get.country_two, " ")
        self.assertEqual(match_get.country_one_score, " ")
        self.assertEqual(match_get.country_two_score, " ")
        self.assertEqual(match_get.country_one_shots, " ")
        self.assertEqual(match_get.country_two_shots, " ")
        self.assertEqual(match_get.country_one_possession, " ")
        self.assertEqual(match_get.country_two_possession, " ")
        

    # Country Model Testing
    def test_country1(self) :
        Country.objects.create(name=" ", matches_played=0, winning_streak=0, losing_streak=0, top_score=0)

        country_get = Country.objects.get(name=" ")
        self.assertEqual(country_get.name, " ")
        self.assertEqual(country_get.matches_played, 0)
        self.assertEqual(country_get.winning_streak, 0)
        self.assertEqual(country_get.losing_streak, 0)
        self.assertEqual(country_get.top_score, 0)

    def test_country2(self) :
        Country.objects.create(name=" ", matches_played=0, winning_streak=0, losing_streak=0, top_score=0)

        country_get = Country.objects.get(name=" ")
        self.assertEqual(country_get.name, " ")
        self.assertEqual(country_get.matches_played, 0)
        self.assertEqual(country_get.winning_streak, 0)
        self.assertEqual(country_get.losing_streak, 0)
        self.assertEqual(country_get.top_score, 0)

    def test_country3(self) :
        Country.objects.create(name=" ", matches_played=0, winning_streak=0, losing_streak=0, top_score=0)

        country_get = Country.objects.get(name=" ")
        self.assertEqual(country_get.name, " ")
        self.assertEqual(country_get.matches_played, 0)
        self.assertEqual(country_get.winning_streak, 0)
        self.assertEqual(country_get.losing_streak, 0)
        self.assertEqual(country_get.top_score, 0)


    # Player Model Testing
    def test_player1(self) :
        Country.objects.create(name=" ")

        Player.objects.create(name=" ", country=" ", position=" ", number=0, club=" ", height=0.0, weight=0)

        player_get = Player.objects.get(name=" ")
        self.assertEqual(player_get.name, " ")
        self.assertEqual(player_get.country, " ")
        self.assertEqual(player_get.position, " ")
        self.assertEqual(player_get.club, " ")
        self.assertEqual(player_get.height, 0.0)
        self.assertEqual(player_get.weight, 0)

    def test_player2(self) :
        Country.objects.create(name=" ")

        Player.objects.create(name=" ", country=" ", position=" ", number=0, club=" ", height=0.0, weight=0)

        player_get = Player.objects.get(name=" ")
        self.assertEqual(player_get.name, " ")
        self.assertEqual(player_get.country, " ")
        self.assertEqual(player_get.position, " ")
        self.assertEqual(player_get.club, " ")
        self.assertEqual(player_get.height, 0.0)
        self.assertEqual(player_get.weight, 0)

    def test_player3(self) :
        Country.objects.create(name=" ")

        Player.objects.create(name=" ", country=" ", position=" ", number=0, club=" ", height=0.0, weight=0)

        player_get = Player.objects.get(name=" ")
        self.assertEqual(player_get.name, " ")
        self.assertEqual(player_get.country, " ")
        self.assertEqual(player_get.position, " ")
        self.assertEqual(player_get.club, " ")
        self.assertEqual(player_get.height, 0.0)
        self.assertEqual(player_get.weight, 0)
