from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def login():
    return render_template("login.html")

@app.route("/cadastro")
def cadastro():
    return render_template("cadastro.html")

@app.route("/denuncia")
def denuncia():
    return render_template("denuncia.html")

@app.route("/pokemons")
def pokemons():
    return render_template("pokemons.html")

@app.route("/projeto")
def projeto():
    return render_template("projeto.html")

if __name__ == "__main__":
    app.run(debug=True)