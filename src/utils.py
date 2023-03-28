from flask import Blueprint
import MySQLdb
from MySQLdb.cursors import DictCursor

utils = Blueprint("utils", __name__, url_prefix="/utils")

id_server = '990461466597539840'  # currently set to NLACAKANM
conn = MySQLdb.connect(host="localhost", user="rfck-bot", passwd="rfck", db="rfck-empty")


@utils.route('/time')
def time():
    """ Return the current NLACAKANM time in a nice format. """
    with conn.cursor() as cursor:
        cursor.execute("SELECT clock FROM markets WHERE id_server = %s", (id_server, ))
        result = cursor.fetchone()

    if result is not None:
        time_current = result[0]
        displaytime = str(time_current)
        ampm = ''

        if time_current <= 12:
            ampm = 'AM'
        if time_current > 12:
            displaytime = str(time_current - 12)
            ampm = 'PM'

        if time_current == 0:
            displaytime = 'midnight'
            ampm = ''
        if time_current == 12:
            displaytime = 'high noon'
            ampm = ''
        return {
            "time": "{} {}".format(displaytime, ampm)
        }


@utils.route('/district?<string:districtTarget>')
def districtInfo(districtTarget: str):
    """ Returns info on the provided district. """
    p_class = {
        "s": 13105,
        "a": 6553,
        "b": 3277,
        "c": 1638
    }

    return {

    }


    