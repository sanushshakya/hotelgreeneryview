from rest_framework import serializers
from room_app.models import Room

class RoomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'
        
    def to_representation(self, instance):
        data = super().to_representation(instance)
        # Modify the 'image' field to return a relative path
        data['image'] = instance.image.url
        return data