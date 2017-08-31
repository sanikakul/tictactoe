# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import JsonResponse


def index(request):
    return render(request, 'core/index.html', {"data": "Index Page"})


def apps_turn(request):
    row = "0"
    column = "0"
    return JsonResponse({"data": "Index Page", "row": row, "column": column})