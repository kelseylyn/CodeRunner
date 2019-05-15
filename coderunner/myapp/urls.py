
from django.urls import path
from  . import views

urlpatterns = [
    path('',views.index),
    path('challenge', views.challenge),
    path('documentation', views.documentation),
    path('faq', views.faq),
    path(r'^(?P<room_name>[^/]+)/$', views.room, name='room'),
]
