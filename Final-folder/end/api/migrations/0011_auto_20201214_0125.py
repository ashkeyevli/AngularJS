# Generated by Django 3.0.4 on 2020-12-13 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20201213_2244'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dish',
            name='count',
            field=models.IntegerField(default=1),
        ),
    ]
