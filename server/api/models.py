from django.db import models


class Blog(models.Model):
    name = models.CharField(max_length=128, null=True)
    background = models.TextField(max_length=256, null=True)
    description = models.TextField(max_length=512, null=True)
    text = models.TextField(max_length=9999, null=True)
    create_date = models.DateTimeField(null=True)
    update_date = models.DateTimeField(null=True)

    class Meta:
        db_table = "blog"
