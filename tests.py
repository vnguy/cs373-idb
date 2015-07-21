#from django.test import setup_test_environment
#from django.core.urlresolvers import reverse
#from django.core.management import call_command

from django.test import TestCase
#from django.utils import unittest
#from django.http import HttpResponse
from www.models import Country, Match, Player

from json import dumps, loads


# Create your tests here.
class ModelTestCase(TestCase):

    # Match Model Testing
    def test_match1(self) :
        Country.objects.create(country="Chile")
        Country.objects.create(country="Uruguay")

        Player.objects.create(player="Alexis Sánchez")

        Match.objects.create(match="Chile-Uruguay", country_one="Chile", country_two="Uruguay", scores="1-0", man_of_the_match="Alexis Sánchez", match_date="24 June 2015 (2015-06-24)\n20:30", match_location="Estadio Nacional, Santiago")
        
        match_get = Match.objects.get(match="Chile-Uruguay")
        self.assertEqual(match_get.match, "Chile-Uruguay")
        self.assertEqual(match_get.country_one, "Chile")
        self.assertEqual(match_get.country_two, "Uruguay")
        self.assertEqual(match_get.scores, "1–0")
        self.assertEqual(match_get.man_of_the_match, "Alexis Sánchez")
        self.assertEqual(match_get.match_date, "24 June 2015 (2015-06-24)\n20:30")
        self.assertEqual(match_get.match_location, "Estadio Nacional, Santiago")
        
    def test_match2(self) :
        Country.objects.create(country="Bolivia")
        Country.objects.create(country="Peru")

        Player.objects.create(player="Paolo Guerrero")

        Match.objects.create(match="Bolivia-Peru", country_one="Bolivia", country_two="Peru", scores="1-3", man_of_the_match="Paolo Guerrero", match_date="25 June 2015 (2015-06-25)\n20:30", match_location="Estadio Municipal Germán Becker, Temuco")
        
        match_get = Match.objects.get(match="Bolivia-Peru")
        self.assertEqual(match_get.match, "Bolivia-Peru")
        self.assertEqual(match_get.country_one, "Bolivia")
        self.assertEqual(match_get.country_two, "Peru")
        self.assertEqual(match_get.scores, "1–3")
        self.assertEqual(match_get.man_of_the_match, "Paolo Guerrero")
        self.assertEqual(match_get.match_date, "25 June 2015 (2015-06-25)\n20:30")
        self.assertEqual(match_get.match_location, "Estadio Municipal Germán Becker, Temuco")
        
    def test_match3(self) :
        Country.objects.create(country="Argentina")
        Country.objects.create(country="Colombia")

        Player.objects.create(player="Lionel Messi")

        Match.objects.create(match="Argentina-Colombia", country_one="Argentina", country_two="Colombia", scores="0–0", man_of_the_match="Lionel Messi", match_date="26 June 2015 (2015-06-26)\n20:30", match_location="Estadio Sausalito, Viña del Mar")
        
        match_get = Match.objects.get(match="Argentina-Colombia")
        self.assertEqual(match_get.match, "Argentina-Colombia")
        self.assertEqual(match_get.country_one, "Argentinia")
        self.assertEqual(match_get.country_two, "Colombia")
        self.assertEqual(match_get.scores, "0-0")
        self.assertEqual(match_get.man_of_the_match, "Lionel Messi")
        self.assertEqual(match_get.match_date, "26 June 2015 (2015-06-26)\n20:30")        
        self.assertEqual(match_get.match_location, "Estadio Sausalito, Viña del Mar")
        

    # Country Model Testing
    def test_country1(self) :
        ed = Player.objects.create(player="Eduardo Vargas")

        Country.objects.create(country="Chile", goals=12, coach="Jorge Sampaoli", captain="Claudio Bravo", top_scorer="")

        country_get = Country.objects.get(country="Chile")
        self.assertEqual(country_get.country, "Chile")
        self.assertEqual(country_get.goals, 12)
        self.assertEqual(country_get.coach, "Jorge Sampaoli")
        self.assertEqual(country_get.captain, "Claudio Bravo")
        self.assertEqual(country_get.top_scorer, "Eduardo Vargas")

    def test_country2(self) :
        Player.objects.create(player="Matías Vuoso")

        Country.objects.create(country="Mexico", goals=4, coach="Miguel Herrera", captain="Rafael Márquez", top_scorer="Matías Vuoso")

        country_get = Country.objects.get(country="Mexico")
        self.assertEqual(country_get.country, "Mexico")
        self.assertEqual(country_get.goals, 4)
        self.assertEqual(country_get.coach, "Miguel Herrera")
        self.assertEqual(country_get.captain, "Rafael Márquez")
        self.assertEqual(country_get.top_scorer, "Matías Vuoso")

    def test_country3(self) :
        Player.objects.create(player="Enner Valencia")

        Country.objects.create(country="Ecuador", goals=4, coach="Gustavo Quinteros", captain="Walter Ayoví", top_scorer="Enner Valencia")

        country_get = Country.objects.get(country="Ecuador")
        self.assertEqual(country_get.country, "Ecuador")
        self.assertEqual(country_get.goals, 4)
        self.assertEqual(country_get.coach, "Gustavo Quinteros")
        self.assertEqual(country_get.captain, "Walter Ayoví")
        self.assertEqual(country_get.top_scorer, "Enner Valencia")


    # Player Model Testing
    def test_player1(self) :
        my_team = Country.objects.create(country="Chile")

        Player.objects.create(player="Claudio Bravo", team=my_team, position="GK", dob="(1983-04-13) April 13, 1983 (age 32)",goals="0", club="Barcelona")

        player_get = Player.objects.get(player="Claudio Bravo")
        self.assertEqual(player_get.player, "Claudio Bravo")
        self.assertEqual(player_get.team, "Chile")
        self.assertEqual(player_get.position, "GK")
        self.assertEqual(player_get.dob, "(1983-04-13) April 13, 1983 (age 32)")
        self.assertEqual(player_get.goals, "0")
        self.assertEqual(player_get.club, "Barcelona")

    def test_player2(self) :
        my_team = Country.objects.create(country="Chile")

        Player.objects.create(player="Eugenio Mena", team=my_team, position="DF", dob="(1983-04-13) April 13, 1983 (age 32)",goals="3", club="Cruzeiro")

        player_get = Player.objects.get(player="Eugenio Mena")
        self.assertEqual(player_get.player, "Eugenio Mena")
        self.assertEqual(player_get.team, "Chile")
        self.assertEqual(player_get.position, "DF")
        self.assertEqual(player_get.dob, "(1988-07-18) July 18, 1988 (age 26)")
        self.assertEqual(player_get.goals, "3")
        self.assertEqual(player_get.club, "Cruzeiro")

    def test_player3(self) :
        my_team = Country.objects.create(country="Chile")

        Player.objects.create(player="Miiko Albornoz", team=my_team, position="DF", dob="(1983-04-13) April 13, 1983 (age 32)",goals="1", club="Hannover 96")

        player_get = Player.objects.get(player="Miiko Albornoz")
        self.assertEqual(player_get.player, "Miiko Albornoz")
        self.assertEqual(player_get.team, "Chile")
        self.assertEqual(player_get.position, "DF")
        self.assertEqual(player_get.dob, "(1990-11-30) November 30, 1990 (age 24)")
        self.assertEqual(player_get.goals, "1")
        self.assertEqual(player_get.club, "Hannover 96")
