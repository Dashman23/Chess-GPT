from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import os

#Calls OpenAIKey ChatGPT
client = OpenAI(
  api_key=os.environ.get("CUSTOM_ENV_NAME"),
)

app = Flask(__name__)
CORS(app)
value = ""

@app.route('/')
def home():
   return "d2-d6"

@app.route('/gpt', methods=['POST'])
def process():

    return jsonify({'message':"Test"}), 200
if __name__ == '__main__':
  app.run()

  '''
  
    # Perform any necessary backend processing with the received data
    completion = client.chat.completions.create(
     model="gpt-3.5-turbo",
     messages=[{"role": "system",
                "content": "Given this FEN position what move do you think is the best to do,"
                           " give the response like this example a4-b2. Send the reponse only nothing else"},
               {"role": "user", "content": data}])

    # Return the response
    return completion
  '''