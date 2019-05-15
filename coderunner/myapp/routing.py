from django.urls import path

from . import consumers

websocket_urlpatterns = [
    path('faq/<slug:room_name>/', consumers.ChatConsumer),
    path('ws/faq/<slug:room_name>/', consumers.ChatConsumer),
]
