# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, auto_created=True, verbose_name='ID')),
                ('country', models.CharField(unique=True, max_length=30, default='')),
                ('goals', models.CharField(max_length=2, default='')),
                ('coach', models.CharField(max_length=40, default='')),
            ],
        ),
        migrations.CreateModel(
            name='Match',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, auto_created=True, verbose_name='ID')),
                ('match', models.CharField(unique=True, max_length=40, default='')),
                ('scores', models.CharField(max_length=5, default='')),
                ('match_location', models.CharField(max_length=40, default='')),
                ('match_date', models.CharField(max_length=40, default='')),
                ('country_one', models.ForeignKey(default='none', to_field='country', related_name='country_one', to='www.Country')),
                ('country_two', models.ForeignKey(default='none', to_field='country', related_name='country_two', to='www.Country')),
            ],
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, auto_created=True, verbose_name='ID')),
                ('player', models.CharField(unique=True, max_length=40, default='')),
                ('position', models.CharField(max_length=2, default='')),
                ('dob', models.CharField(max_length=40, default='')),
                ('goals', models.IntegerField(default=0)),
                ('club', models.CharField(max_length=40, default='')),
                ('team', models.ForeignKey(default='none', to_field='country', related_name='team', to='www.Country')),
            ],
        ),
        migrations.AddField(
            model_name='match',
            name='man_of_the_match',
            field=models.ForeignKey(default='none', to_field='player', related_name='man_of_the_match', to='www.Player'),
        ),
        migrations.AddField(
            model_name='country',
            name='captain',
            field=models.ForeignKey(default='none', to_field='player', related_name='captain', to='www.Player'),
        ),
        migrations.AddField(
            model_name='country',
            name='top_scorer',
            field=models.ForeignKey(default='none', to_field='player', related_name='top_scorer', to='www.Player'),
        ),
    ]
