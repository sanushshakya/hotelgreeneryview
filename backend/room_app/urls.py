from django.urls import path, include
from rest_framework import routers
from room_app.views import RoomViewset
from . import views


router = routers.DefaultRouter()
router.register(r'Room', RoomViewset)

urlpatterns = [
    path('', include(router.urls)),
    path('<str:room_name>/', views.RoomDetailView.as_view(), name='room-detail'),
]

