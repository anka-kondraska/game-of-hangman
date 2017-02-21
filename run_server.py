from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
import helper_functions

app = Flask(__name__)
CORS(app)

@app.route("/")
def homepage():
    """Render static homepage"""

    return render_template("homepage.html")

@app.route("/random_word.json")
def get_wordlist():
    """Singular random word any difficulty and length
       served as json from LinkedIn Word Dictionary API"""

    URL = "http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words"
    random_word = helper_functions.get_random_word_from_API(URL)
    return jsonify(word=random_word)




app.run(debug=True, host='0.0.0.0')





