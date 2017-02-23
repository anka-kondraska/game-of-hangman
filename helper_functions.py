import requests
import random


def get_random_word_from_API(URL):
    """Make a LinkedIn Word Dictionary API
    call and choose a random word from the response
    """

    response = requests.get(URL)
    # print response.headers['content-type']
    words = response.text
    words = words.replace('\n', ' ')  # get rid of newlines
    random_word = random.choice(words.split())
    return random_word
