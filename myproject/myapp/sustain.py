import os
import pickle
from django.core.cache import cache

model_cache_key = 'model_cache'

# Get the absolute path to tokenizer.pkl within the app directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
tokenizer_path = os.path.join(BASE_DIR, 'tokenizer.pkl')

tokenizer = cache.get(model_cache_key)

if tokenizer is None:
    with open(tokenizer_path, 'rb') as f:
        tokenizer = pickle.load(f)
    cache.set(model_cache_key, tokenizer, None)
