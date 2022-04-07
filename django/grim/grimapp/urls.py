from django.conf.urls import url

from . import views

urlpatterns = [
    url('getblockselected/', views.getBlockSelected, name='getBlockSelected'),
]