from flask import Flask, jsonify, render_template, request
from flask_cors import CORS, cross_origin
import random

import requests


app = Flask(__name__)
CORS(app)

@app.route("/")
def homepage():
    """Render static homepage"""

    return render_template("homepage.html")

@app.route("/random_word.json")
def get_wordlist():
    """Get word list - API call"""

    URL = "http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words"
    response = requests.get(URL)
    # print response.headers['content-type']
    words = response.text
    words = words.replace('\n', ' ')
    random_word = random.choice(words.split())
    print random_word
    # print words
    return jsonify(word=random_word)




app.run(debug=True)





