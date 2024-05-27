import os
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/get_file_names')
def get_file_names():
    folder_path = "folder/"
    file_names = os.listdir(folder_path)
    return jsonify(file_names=file_names)

if __name__ == '__main__':
    app.run()