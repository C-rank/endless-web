from flask import Blueprint, redirect

detention = Blueprint("detention", __name__, url_prefix='/detention')


@detention.route('/', methods=["GET"])
def index():
    return redirect('https://discord.gg/mtSRXek', code=302)