from django.shortcuts import render
from rest_framework import viewsets
from gallery_app.models import Gallery
from gallery_app.serializers import GallerySerializer

# Create your views here.

class GalleryViewset(viewsets.ModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer