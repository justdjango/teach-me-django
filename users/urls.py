from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register(r'', UserViewSet, base_name='users')
urlpatterns = router.urls
