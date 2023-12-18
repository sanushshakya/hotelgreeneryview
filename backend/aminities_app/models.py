from django.db import models

# Create your models here.
class Aminities(models.Model):
    aminities_id = models.BigAutoField(primary_key=True)
    titles = models.CharField(max_length=50)
    short_description = models.TextField()


    def __str__(self):
        return self.titles
    