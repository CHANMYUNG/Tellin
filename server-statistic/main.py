from flask import Flask, g
from flask_restful_swagger_2 import Api
from flask_cors import CORS
from flask_jwt import JWT


app = Flask(__name__)
api = Api(app)
CORS(app)


@app.before_first_request
def before_first_request():
    def initialize_logger():
        from logging.handlers import RotatingFileHandler
        import logging

        handler = RotatingFileHandler('server_log.log', maxBytes=1048576, backupCount=5)
        handler.setFormatter(logging.Formatter('[%(asctime)s] %(levelname)s - %(message)s'))

        app.logger.addHandler(handler)
        app.logger.setLevel(logging.INFO)

    initialize_logger()
    g.logger = app.logger
    g.logger.info('------ Logger Initialized ------')


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
