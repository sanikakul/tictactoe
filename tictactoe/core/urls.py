from django.conf.urls import url
from tictactoe.core import views

urlpatterns = [
    url(r'^', views.index, name="index"),
    url(r'^apps_turn/$', views.apps_turn, name="apps_turn"),
]