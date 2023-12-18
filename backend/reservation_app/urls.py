from django.urls import path, include
from rest_framework import routers
from .views import ReservationViewset

router = routers.DefaultRouter()
router.register(r'Reservation', ReservationViewset)

urlpatterns = [
    path('',include(router.urls)),
]
