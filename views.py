from django.shortcuts import render
from django.http import HttpResponse

# https://docs.djangoproject.com/en/1.8/intro/tutorial03/#write-views-that-actually-do-something

def index (request):
    context = {}
    return render(request, 'index.html', context)

def about (request):
    context = {}
    return render(request, 'about.html', context)

def get_page(request, page_name):
    context = {}
    return render(request, page_name+".html", context)
