from flask import Flask, jsonify, json

data = json.load(open('happiness.json'))

app = Flask(__name__)
@app.route("/")
def home():
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)