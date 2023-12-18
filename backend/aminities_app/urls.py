from django.urls import path, include
from rest_framework import routers
from aminities_app.views import AminitiesViewset

router = routers.DefaultRouter()
router.register(r'Aminities', AminitiesViewset)

urlpatterns = [
    path('', include(router.urls)),
]

