from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def intern_data(request):
    return Response({
        "name": "Abhi Amber",
        "referralCode": "abhi2025",
        "totalDonations": 4300,
        "rewards": ["Sticker Pack", "T-Shirt", "Coffee Mug"]
    })

@api_view(['GET'])
def leaderboard_data(request):
    return Response([
        {"name": "Abhi Amber", "donations": 4300},
        {"name": "Sneha", "donations": 4130},
        {"name": "Rahul", "donations": 2920}
    ])
