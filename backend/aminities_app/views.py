# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from aminities_app.models import Aminities
from aminities_app.serializers import AminitiesSerializer

# Create your views here.
class AminitiesViewset(viewsets.ModelViewSet):
    queryset = Aminities.objects.all()
    serializer_class = AminitiesSerializer