from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return '{"message": "Hello, World!"}'

@app.route("/about")
def about():
    return "<p>About</p>"
