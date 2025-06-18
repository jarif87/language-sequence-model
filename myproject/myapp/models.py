from django.db import models

class GenomeSubmission(models.Model):
    genome = models.TextField()
    prediction = models.BooleanField(null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Genome: {self.genome[:20]}... ({self.prediction})"
