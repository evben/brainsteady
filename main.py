from bottle import route, install, template, run, static_file
from bottle_sqlite import SQLitePlugin


# Connexion à la base de données SQLite
install(SQLitePlugin(dbfile='brainsteady.db'))


# Routes de l'application
@route('/assets/<filename:path>')
def assets(filename):
    """ Ressources graphiques (CSS, JS, images, musiques...) """
    return static_file(filename, root='assets')


@route('/')
def index():
    """ Page d'accueil """
    return template('templates/index.tpl')


"""
On ouvre un serveur en local sur le port 7000
http://localhost:7000/ dans le navigateur pour accéder au site après
avoir exécuté ce programme Python.
"""
if __name__ == "__main__":
    run(reloader=True, debug=True, host="127.0.0.1", port=7000)
