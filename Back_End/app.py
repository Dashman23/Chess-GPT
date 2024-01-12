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

@app.route('/gpt', methods=['GET', 'POST'])
def process():
    position = str((request.get_json()).get('message'))

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Given this FEN position what move do you think is the best to do,"
                              ", You are the black player, play give the response like this example a4-b2. Send the reponse only nothing else, Always do a move with the black peices."},
            {"role": "user", "content": position}
        ]
    )
    message = completion.choices[0].message.content;
    return "{\"message\": \""+ message + "\"}", 200
if __name__ == '__main__':
  app.run()

  '''
  
    # Perform any necessary backend processing with the received data
    

    # Return the response
    return completion
  '''