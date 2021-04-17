#!/usr/bin/env python3
# coding:utf-8
from django.http import JsonResponse
from .models import Blog

blog_filters = [
    {"key": "id", "value": "id", "len": 9999},
    {"key": "name", "value": "name", "len": 9999},
    {"key": "des", "value": "description", "len": 9999},
    {"key": "date", "value": "update_date", "len": 10},
]


def index(request):
    _id = request.GET.get('id')
    if not _id:
        blogs = Blog.objects.all().order_by('-id')[:99]
        res = {
            "status": 1,
            "data": []
        }
        for blog in blogs:
            data = {}
            for filter_item in blog_filters:
                data[filter_item['key']] = f"{getattr(blog, filter_item['value'])}"[:filter_item['len']]
            res["data"].append(data)
        return JsonResponse(res)
    else:
        blog = Blog.objects.get(pk=_id)
        res = {
            "status": 1,
            "data": {}
        }
        data = {}
        for filter_item in blog_filters:
            data[filter_item['key']] = f"{getattr(blog, filter_item['value'])}"[:filter_item['len']]
        data["text"] = blog.text
        res["data"] = data
        return JsonResponse(res)
