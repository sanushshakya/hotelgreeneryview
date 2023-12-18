from django.shortcuts import render
from rest_framework import viewsets
from room_app.models import Room
from room_app.serializers import RoomSerializer
from rest_framework import generics

class RoomViewset(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
class RoomDetailView(generics.RetrieveAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    lookup_field = 'room_name'  # Use 'room_name' as the lookup field

    def get_object(self):
        room_name = self.kwargs['room_name']  # Get the 'room_name' from URL
        room = Room.objects.get(room_name=room_name)
        return room
    
    