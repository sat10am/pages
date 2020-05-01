from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)


class URLs(models.Model):
    author = models.ForeignKey(
        Author, on_delete=models.CASCADE, related_name="urls"
    )
    address = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)


class Article(models.Model):
    url = models.OneToOneField(URLs, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    thumbnail = models.URLField(default="https://placehold.it/200x200")
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
