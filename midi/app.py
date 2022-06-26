from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from music21 import *
from flask import send_file

app = Flask(__name__)
app.config.from_object(__name__)

CORS(app, resources={r'/*': {'origins': '*'}})
@cross_origin(origins = "https://musicxml2midi.herokuapp.com")

@app.route('/', methods=['GET'])
def home():
    return 'hello'

@app.route('/convert', methods=['GET', 'POST'])
def midiConvert():
    musicXML = request.data

    midiFile = convert(musicXML)
    
    return midiFile
    # response = midiFile
    # #response.headers["Access-Control-Allow-Origin"] = "*"
    # return send_file(midiFile, download_name="midi.mid")
    
def convert(file):
    c = converter.parse(file)
    mf = midi.translate.streamToMidiFile(c)
    mf.open('midi.mid', 'wb')
    mf.write()
    mf.close()
    new_file = open('midi.mid', 'rb')
    return send_file(new_file, mimetype='audio/midi')

if __name__ == '__main__':
    app.run()
