#!/usr/bin/env python

from django.conf.urls import include, url, patterns

urlpatterns = patterns(
        "website.views",
        url(r'^$', "index", name="index"),
        url(r'^home/$', "home", name="index"),
        url(r'^courses/$', "courses", name="index"),
        url(r'^students/$', "students", name="index"),
    )
