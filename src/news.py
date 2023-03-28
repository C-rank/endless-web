from flask import Blueprint, render_template

news = Blueprint("news", __name__, url_prefix="/news")


@news.route("/", methods=["GET"])
def index():
    return render_template("news.html")