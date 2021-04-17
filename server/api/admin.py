from django.contrib import admin

# Register your models here.
from .models import Blog


class BlogAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'text', 'create_date', 'update_date')


admin.site.register(Blog, BlogAdmin)
