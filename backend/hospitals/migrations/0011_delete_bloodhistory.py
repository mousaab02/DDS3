# Generated by Django 5.0.4 on 2024-06-21 03:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hospitals', '0010_alter_blood_hospital'),
    ]

    operations = [
        migrations.DeleteModel(
            name='BloodHistory',
        ),
    ]
