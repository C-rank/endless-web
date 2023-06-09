import os

from flask import Flask


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    from . import detention
    app.register_blueprint(detention.detention)

    from . import guide
    app.register_blueprint(guide.guide)

    from . import map
    app.register_blueprint(map.map)

    from . import market
    app.register_blueprint(market.market)

    from . import stats
    app.register_blueprint(stats.stats)

    from . import news
    app.register_blueprint(news.news)

    from . import utils
    app.register_blueprint(utils.utils)

    return app