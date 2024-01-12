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
moves = []

@app.route('/')
def home():
   return "d2-d6"

@app.route('/gpt', methods=['GET', 'POST'])
def process():
    global moves
    moves.append((request.get_json()).get('message'))

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Given these FEN positions what move do you think is the best to do,"
                              ", You are the black player, play give the response like this example a4-b2. Send the reponse only nothing else, "
                                          "Always do a move with the black peices, they are the lower case letter of the peices. DO NOT MOVE WHITE PEICES, the upper case. Do not return moest recent FEN position and no moving non existant peices."},
            {"role": "user", "content": str(moves)}
        ]
    )
    message = completion.choices[0].message.content;
    moves.append(message)
    print(moves)
    return "{\"message\": \""+ message + "\"}", 200
if __name__ == '__main__':
  app.run()

  '''
  
    # Perform any necessary backend processing with the received data
    

    # Return the response
    return completion
  '''