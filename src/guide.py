from flask import Blueprint, render_template

guide = Blueprint("guide", __name__, url_prefix="/guide")


@guide.route("/", methods=["GET"])
def index():
    return render_template("guide.html")