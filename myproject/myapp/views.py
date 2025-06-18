from django.shortcuts import render
import numpy as np
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model
import os

from .sustain import tokenizer  # assumes tokenizer.pkl is already loaded in sustain.py

def handler(request):
    response = "Input the word first"
    if request.method == 'POST':
        text = request.POST.get('Name', '')
        if text:
            response = predicting(text)
    return render(request, "index.html", {'response': response})


def predicting(data):
    def generate_seq(model, tokenizer, seq_length, seed_text, n_words):
        result = []
        in_text = seed_text
        for _ in range(n_words):
            encoded = tokenizer.texts_to_sequences([in_text])[0]
            encoded = pad_sequences([encoded], maxlen=seq_length, truncating='pre')
            predict_x = model.predict(encoded, verbose=0)
            yhat = np.argmax(predict_x, axis=1)[0]
            out_word = ''
            for word, index in tokenizer.word_index.items():
                if index == yhat:
                    out_word = word
                    break
            in_text += ' ' + out_word
            result.append(out_word)
        return ' '.join(result)

    # Settings
    seed_text = data
    seq_length = 50
    n_words = 12

    # Get full path to model.keras inside `myapp/`
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    model_path = os.path.join(BASE_DIR, 'model.keras')

    if not os.path.exists(model_path):
        return "Model file not found. Please add 'model.keras' to the 'myapp/' directory."

    # Load model
    model = load_model(model_path)

    # Generate text
    return generate_seq(model, tokenizer, seq_length, seed_text, n_words)
