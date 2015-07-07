from django.contrib import admin
from .models import Match, Country, Player

class CountryAdmin(admin.ModelAdmin):
    # Explicitly choose which fields to show, how to group them, and in what order
    fieldsets = [
        (None,          {'fields': ['name']}),
        ('Streaks',     {'fields': ['winning_streak', 'losing_streak']}),
        ('Other Stats', {'fields': ['matches_played', 'top_score']}),
    ]

    list_display = ('name', 'winning_streak', 'losing_streak', 'matches_played', 'top_score')
    list_filter = ['name', 'top_score']


admin.site.register(Match)
admin.site.register(Country, CountryAdmin)
admin.site.register(Player)
