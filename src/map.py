from flask import Blueprint, render_template

map = Blueprint("map", __name__, url_prefix="/map")


@map.route("/", methods=["GET"])
def index():
    return render_template("map.html")