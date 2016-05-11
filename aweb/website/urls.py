#!/usr/bin/env python

from django.conf.urls import include, url, patterns

urlpatterns = patterns(
        "website.views",
        url(r'^$', "index", name="index"),
        url(r'^home/$', "index", name="index"),
        url(r'^courses/$', "index", name="index"),
        url(r'^students/$', "index", name="index"),
    )
