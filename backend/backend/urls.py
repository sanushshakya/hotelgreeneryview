from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('room_app.urls')),
    path('desc/', include('aminities_app.urls')),
    path('testimonial/', include('testimonial_app.urls')),
    path('room/', include('room_app.urls')),
    path('gallery/', include('gallery_app.urls')),
    path('reservation/', include('reservation_app.urls'))
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)