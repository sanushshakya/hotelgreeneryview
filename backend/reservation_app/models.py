from django.db import models
from django.utils import timezone

# Create your models here.
class Reservation(models.Model):
    reservation_id = models.AutoField(primary_key=True)
    check_in = models.DateField(default=timezone.now)  # Set default to the current date
    check_out = models.DateField(default=timezone.now)
    room_type =  models.CharField(max_length=20)
    phone = models.CharField(max_length=20, default=None )
