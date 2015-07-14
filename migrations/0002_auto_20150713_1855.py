# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('www', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='country',
            name='players',
            field=models.ManyToManyField(to='www.Player', related_name='players'),
        ),
        migrations.AddField(
            model_name='country',
            name='scorers',
            field=models.ManyToManyField(to='www.Player', related_name='scorers'),
        ),
        migrations.AddField(
            model_name='match',
            name='penalties',
            field=models.CharField(max_length=5, default='0-0'),
        ),
        migrations.AlterField(
            model_name='country',
            name='goals',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='player',
            name='goals',
            field=models.CharField(max_length=2, default=''),
        ),
    ]
