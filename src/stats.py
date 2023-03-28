from flask import Blueprint, render_template

stats = Blueprint("stats", __name__, url_prefix="/stats")


@stats.route("/", methods=["GET"])
def index():
    return render_template("stats.html")