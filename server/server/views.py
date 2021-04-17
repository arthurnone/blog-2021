#!/usr/bin/env python3
# coding:utf-8
from django.http import HttpResponse
from .settings import STATIC_INDEX


def index(request, num=None):
    with open(STATIC_INDEX, 'r') as f:
        text = f.read()
        return HttpResponse(text)
