#!/usr/bin/env python

from django.shortcuts import (render, render_to_response)
from django.template.context import RequestContext

# Create your views here.


def index(request):
    
    return render_to_response(
        "index.html", locals(), context_instance=RequestContext(request))


def home(request):
    
    return render_to_response(
        "home.html", locals(), context_instance=RequestContext(request))


def courses(request):
    
    return render_to_response(
        "courses.html", locals(), context_instance=RequestContext(request))


def students(request):
    
    return render_to_response(
        "students.html", locals(), context_instance=RequestContext(request))