
from django.urls import path
from  . import views
from . import consumers


urlpatterns = [
    path('',views.index),
    path('challenge', views.challenge),
    path('documentation', views.documentation),
    path('faq', views.faq),
    path('faq/<slug:room_name>/', views.room, name='room'),
]
