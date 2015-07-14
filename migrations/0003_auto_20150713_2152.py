# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('www', '0002_auto_20150713_1855'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='player',
            name='id',
        ),
        migrations.AlterField(
            model_name='country',
            name='captain',
            field=models.ForeignKey(to='www.Player', default='none', related_name='captain'),
        ),
        migrations.AlterField(
            model_name='country',
            name='top_scorer',
            field=models.ForeignKey(to='www.Player', default='none', related_name='top_scorer'),
        ),
        migrations.AlterField(
            model_name='match',
            name='man_of_the_match',
            field=models.ForeignKey(to='www.Player', default='none', related_name='man_of_the_match'),
        ),
        migrations.AlterField(
            model_name='player',
            name='player',
            field=models.CharField(serialize=False, default='', primary_key=True, max_length=40),
        ),
    ]
