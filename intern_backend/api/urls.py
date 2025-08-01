from django.urls import path
from .views import intern_data, leaderboard_data

urlpatterns = [
    path('intern/', intern_data),
    path('leaderboard/', leaderboard_data),
]
