# Generated by Django 5.0.4 on 2024-06-21 03:37

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospitals', '0011_delete_bloodhistory'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='BloodHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.CharField(choices=[('add', 'Add'), ('update', 'Update')], default='add', max_length=10)),
                ('quantity_change', models.IntegerField()),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('blood', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hospitals.blood')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
