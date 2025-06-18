Predict the Next Word
=====================

A Django-based web application that predicts the next word in a 50-word sentence
using a TensorFlow model. The interface follows a cyberpunk aesthetic with neon
animations and a dynamic particle background.

Table of Contents
-----------------
- Overview
- Features
- Technologies
- Setup and Installation
- Usage
- Project Structure
- Design Highlights
- Contributing
- License

Overview
--------
"Predict the Next Word" is a web app built with Django and TensorFlow. Users input
a 50-word sentence, and the app predicts the next word using a trained ML model.
The frontend includes a futuristic cyberpunk design with glitch effects and interactive
backgrounds.

Features
--------
- Predicts the next word(s) for a 50-word sentence
- Displays real-time word count with warning if over 50
- Cyberpunk-themed UI with neon/glitch styling
- Responsive design for both mobile and desktop
- Visual "Processing..." feedback during predictions

Technologies
------------
- Backend: Django 5.2.3, Python 3.8+
- ML: TensorFlow (for predictions)
- Frontend: HTML, CSS, JavaScript
- Libraries: Font Awesome, Roboto Mono font
- Database: SQLite (default)

Setup and Installation
----------------------
1. Clone the repository:
   git clone <repository-url>
   cd myproject

2. Set up virtual environment:
   python -m venv venv
   On Windows:    .\venv\Scripts\activate
   On Linux/macOS: source venv/bin/activate

3. Install dependencies:
   pip install django==5.2.3 tensorflow

4. Apply database migrations:
   python manage.py migrate

5. Ensure static files exist:
   style.css in myapp/static/css/
   script.js in myapp/static/js/

6. Check settings.py includes:
   STATIC_URL = '/static/'
   STATICFILES_DIRS = [BASE_DIR / 'myapp/static']

7. Set up templates:
   Place index.html in myapp/templates/
   Or update settings.py to:
   TEMPLATES = [
       {
           'DIRS': [BASE_DIR / 'templates'],
           ...
       }
   ]

8. Start development server:
   python manage.py runserver

9. Access app at:
   http://127.0.0.1:8000/

Usage
-----
- Open http://127.0.0.1:8000/ in your browser
- Enter a 50-word sentence in the input field
- Word counter turns red if you exceed 50 words
- Click "Predict" to see the TensorFlow model's suggestion
- Result appears with glitch animation

Note: Sentence must be exactly 50 words for accurate output.

Project Structure
-----------------
```
myproject/
├── manage.py
├── requirements.txt
├── README.md
├── .gitignore
├── myproject/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
├── myapp/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   ├── tests.py
│   ├── urls.py
│   ├── onehotencoder.pkl
│   ├── sustain.py
│   ├── migrations/
│   │   ├── __init__.py
│   │   ├── 0001_initial.py
│   ├── static/
│   │   ├── css/
│   │   │   ├── style.css
│   │   ├── js/
│   │   │   ├── script.js
│   │   ├── images/
│   └── templates/
│       ├── index.html

```

Design Highlights
-----------------
- Cyberpunk Colors: Neon pink (#ff6fd7), neon blue (#5bc0f8)
- Particle Background: Simulates neural network activity
- Holographic Container: Glassmorphism with neon glow
- Animations: Glitch text, pulsing titles, hover swipes
- Typography: Uses Roboto Mono for technical look
- Mobile Friendly: Fully responsive on all screen sizes

Contributing
------------
1. Fork the repo
2. Create a branch: git checkout -b feature-name
3. Make your changes
4. Commit: git commit -m "Add feature"
5. Push: git push origin feature-name
6. Open a pull request

Follow PEP 8 and include tests if applicable.

License
-------
This project is licensed under the MIT License.
See the LICENSE file for details.

Optional: Disable TensorFlow oneDNN Warning
-------------------------------------------
If you need to disable oneDNN optimizations for reproducibility:
On Windows:
   set TF_ENABLE_ONEDNN_OPTS=0
On Linux/macOS:
   export TF_ENABLE_ONEDNN_OPTS=0
Run this before launching the app.

