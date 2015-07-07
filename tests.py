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


from django.test import TestCase
from wc_app.models import *

try:
    from urllib.request import urlopen, Request
except:
    from urllib2 import *

from tastypie.test import ResourceTestCase

import json
import watson

# Create your tests here.
class ModelTestCase(TestCase):

    # Match Model Testing
    def test_match1(self) :
        Match.objects.create(name=" ", match_winner=" ", country_

