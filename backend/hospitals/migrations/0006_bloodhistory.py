# Generated by Django 5.0.4 on 2024-05-07 08:54

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospitals', '0005_alter_blood_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='BloodHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.CharField(choices=[('add', 'Ajout'), ('remove', 'Suppression'), ('update', 'Mise à jour')], max_length=10)),
                ('quantity_changed', models.IntegerField()),
                ('date_changed', models.DateTimeField(auto_now_add=True)),
                ('blood', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hospitals.blood')),
            ],
        ),
    ]
