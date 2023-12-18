from rest_framework import serializers
from .models import Testimonial

class TestimonialSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['testimonial_id', 'testimonial_name', 'testimonial_address', 'testimonial_desc']
