from rest_framework import serializers
from aminities_app.models import Aminities

class AminitiesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Aminities
        fields = ['aminities_id', 'titles','short_description']