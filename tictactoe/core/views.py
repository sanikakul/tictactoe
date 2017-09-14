# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import JsonResponse

from tictactoe.core.core_utils.tictactoe_class import TicTacToe


def index(request):
    tictactoe_object = TicTacToe()
    return render(request, 'core/index.html', {"data": "Index Page", "tictactoe_object": tictactoe_object})


def apps_turn(request):

    return JsonResponse({"data": "Index Page", "row": row, "column": column})