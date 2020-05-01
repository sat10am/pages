from django.urls import path

from api.article.views import URLView, AuthorView, ArticleView

urlpatterns = [
    path("author/", AuthorView.as_view(), name="author-list"),
    path("urls/", URLView.as_view(), name="urls-list"),
    path("articles/", ArticleView.as_view(), name="articles-list"),
]
