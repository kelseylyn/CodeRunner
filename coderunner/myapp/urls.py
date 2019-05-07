
from django.urls import path
from  . import views

urlpatterns = [
    path('',views.index),
    path('challenge', views.challenge),
    path('documentation', views.documentation),
    path('faq', views.faq),
]
