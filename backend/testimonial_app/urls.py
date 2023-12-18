from django.urls import path, include
from rest_framework import routers
from testimonial_app.views import TestimonialViewset

router = routers.DefaultRouter()
router.register(r'Testimonial', TestimonialViewset)

urlpatterns = [
    path('', include(router.urls))
]
