from http.client import CREATED

from django.http import HttpResponse, JsonResponse
from django.views.generic import ListView, CreateView
from django.core.paginator import Paginator
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from api.article.models import URLs, Author, Article


class AuthorView(ListView, CreateView):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(AuthorView, self).dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        name = request.POST.get("name")
        Author.objects.create(name=name)
        return HttpResponse(status=CREATED)


class URLView(ListView, CreateView):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(URLView, self).dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        author = request.POST.get("author")
        address = request.POST.get("url")
        URLs.objects.create(author_id=author, address=address)
        return HttpResponse(status=CREATED)

    def get(self, request, *args, **kwargs):
        ret = [
            {
                "id": url.id,
                "author": url.author.name,
                "created_at": url.created_at.strftime("%Y-%m-%d %H:%M:%S"),
                "address": url.address,
            }
            for url in URLs.objects.all()
        ]

        return JsonResponse(ret, safe=False)


class ArticleView(ListView):
    def get(self, request, *args, **kwargs):
        article_list = Article.objects.all()
        paginator = Paginator(article_list, 10)
        page_number = request.GET.get("page")
        page_obj = paginator.get_page(page_number)
        ret = [
            {
                "id": article.id,
                "title": article.title,
                "description": article.description,
                "url": article.url.address,
                "created_at": article.created_at,
            }
            for article in page_obj
        ]
        return JsonResponse(ret, safe=False)
