import json
from copadb.models import Match, Country, Player


#-----------------
# Populate Players
#-----------------
data_file = open('/data/players.json')
players_json = json.load(data_file)

# Have to add team foreign key after the countries are populated
results = players_json[8]
for _player in results[0] :
    player_object = Player(player=_player[0], position=_player[2], dob=_player[3], goals=_player[4], club=_player[5])
    player_object.save()


#-----------------
# Populate Countries
#-----------------
data_file = open('/data/countries.json')
countries_json = json.load(data_file)

#for country in countries_json[0] : # countries_json[0] is the results dictionary
    
results = countries_json[8] # countries_json[8] is the results dictionary
for _country in results[0] : # for each country in countries list
    country_object = Country(country=_country[0], goals=_country[1], coach=_counrty[2], captain=Player.objects.get(player=_country[3]), top_scorer=Player.objects.get(player=_country[4]))
    for _scorer in _country[5] :
        country_object.scorers.add(Player.objects.get(player=_scorer[0]))
    for _player in _country[6] :
        country_object.players.add(Player.objects.get(player=_player[0]))
    country_object.save()


#--------------------------
# Finish Players Population
#--------------------------
# Add foreign key for team now that countries have been populared
results = players_json[8]
for _player in results[0] :
    player_object = Player.objects.filter(player=_player[0])
    player_object.team = Country.objects.get(_player[1])
    player_object.save()


#-----------------
# Populate Matches
#-----------------
data_file = open('/data/matches.json')
matches_json = json.load(data_file)

#for match in matche_json.collection1
results = matches_json[8] # countries_json[8] is the results dictionary
for _match in results[0] : # for each country in countries list
    match_object = Match(match=_match[0], country_one=Country.objects.get(country=_match[1], country_two =Country.objects.get(country=_match[2], scores=_match[3], penalties=_match[4], man_of_the_match=Player.objects.get(player=_match[5]), match_date=_match[6], match_location=_match[7])
    match_object.save()


