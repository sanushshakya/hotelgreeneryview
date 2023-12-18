from django.db import models
from PIL import Image

# Create your models here.
class Room(models.Model):
    room_id= models.BigAutoField(primary_key=True)
    room_name= models.CharField(max_length=50)
    short_description= models.TextField()
    present_price= models.IntegerField()
    old_price= models.IntegerField()
    image = models.ImageField(upload_to='room/') 
    
    def __str__(self):
        return self.room_name

    def save(self, *args, **kwargs):
        # Open the image file
        image = Image.open(self.image)

        # Resize the image to a maximum size of 400x400 pixels
        max_size = (400, 400)
        image.thumbnail(max_size)

        # Save the resized image
        image.save(self.image.path)

        super().save(*args, **kwargs)