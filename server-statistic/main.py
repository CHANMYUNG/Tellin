from flask import Flask
from flask_restful_swagger_2 import Api
from flask_cors import CORS
from flask_jwt import JWT


app = Flask(__name__)
api = Api(app)
CORS(app)


@app.before_first_request
def before_first_request():
    def initialize_logger():
        pass

    initialize_logger()

@app.before_request
def before_request():
    pass


@app.after_request
def after_request():
    pass


@app.teardown_request
def teardown_request():
    pass


@app.teardown_appcontext
def teardown_appcontext():
    pass


def route():
    def route_api():
        pass

    def route_templates():
        pass

    route_api()
    route_templates()

if __name__ == '__main__':
    app.run(debug=True)
