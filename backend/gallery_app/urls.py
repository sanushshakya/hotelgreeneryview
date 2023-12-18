from django.urls import path, include
from rest_framework import routers
from gallery_app.views import GalleryViewset

router = routers.DefaultRouter()
router.register(r'Gallery', GalleryViewset)

urlpatterns = [
    path('', include(router.urls)),
]

