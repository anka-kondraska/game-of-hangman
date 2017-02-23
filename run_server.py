from flask import Flask, jsonify, render_template, request, session
from flask_cors import CORS, cross_origin
import helper_functions


app = Flask(__name__)
CORS(app)  # To allow Cross Origin Resource Sharing

# set the secret key.  keep this really secret:
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'


@app.route("/", methods=["POST", "GET"])
def homepage():
    """Render static homepage"""
    diff_level = request.form.get('level')
    session['level'] = diff_level
    if session['level']:
        session['level'] = diff_level
    else:
        session['level'] = 1

    return render_template("homepage.html")


@app.route("/random_word.json/<int:level>")
def get_random_word(level):
    """Singular random word any difficulty and length
       served as json from LinkedIn Word Dictionary API"""

    URL = "http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words?difficulty=" + str(level)
    random_word = helper_functions.get_random_word_from_API(URL)

    return jsonify(random_word=random_word)


@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r

app.run(debug=True, host='0.0.0.0')
