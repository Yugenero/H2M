from flask import render_template, request
from app import app

@app.route('/')

def home():
    return render_template('home.html')


@app.route('/results', methods=['POST'])
def results():
    query = request.form.get('query')
    # here you would add code to query your dateset
    # for now, we'll just return the query as a result
    results = f"Results for query: {query}"
    return render_template('results.html', results=results)