# Generated by Django 5.0.6 on 2024-06-19 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Event', '0005_alter_event_association_or_hospital'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='ticket_generated',
        ),
        migrations.AddField(
            model_name='event',
            name='participants_emails',
            field=models.TextField(blank=True, default=''),
        ),
    ]
