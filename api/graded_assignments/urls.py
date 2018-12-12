from django.urls import path
from api.views import GradedAssignmentListView, GradedAssignmentCreateView

urlpatterns = [
    path('', GradedAssignmentListView.as_view()),
    path('create/', GradedAssignmentCreateView.as_view()),
]
