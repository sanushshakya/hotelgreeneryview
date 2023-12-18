from django.db import models

class Testimonial(models.Model):
    testimonial_id = models.BigAutoField(primary_key=True)
    testimonial_name = models.CharField(max_length=50)
    testimonial_address = models.CharField(max_length=100)
    testimonial_desc = models.TextField()

    def __str__(self):
        return self.testimonial_name