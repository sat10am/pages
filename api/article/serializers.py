from rest_framework import serializers

from api.article.models import URLs, Author, Article


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"


class URLsSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.RelatedField(queryset=Author.objects.all())
    article = serializers.PrimaryKeyRelatedField(
        queryset=Article.objects.all()
    )

    class Meta:
        model = URLs
        fields = "__all__"


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = "__all__"
