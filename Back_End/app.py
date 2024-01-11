from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
   return "d1-d6"
if __name__ == '__main__':
   app.run()