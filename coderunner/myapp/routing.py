# chat/routing.py
from django.urls import path

from . import consumers

websocket_urlpatterns = [
    path(r'^ws/(?P<room_name>[^/]+)/$', consumers.ChatConsumer),
]
