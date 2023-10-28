import subprocess

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# params = location: string, text: string
@app.route('/upvote', methods=['POST'])
def upvote():
    pass

# params = points: int, user: string
@app.route('/redeeem_points', methods=['POST'])
def redeem_points():
    pass

# params = location: string, text: string, user: string
@app.route('/leave_note', methods=['POST'])
def leave_note():
    pass


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)


