// Gabriel Malta

String.prototype.removeMascara = function () {
    if (this.valueOf())
        return this.valueOf().replace(/\.|\/|-|_/g, "");

    return "";
}

String.prototype.toBoolean = function () {
    if (this.valueOf())
        return new RegExp(/^(true)$|^(1)$|^(s){1}$/i).test(this.valueOf())

    return false;
}

String.prototype.capitalize = function () {
    if (this.valueOf()) {
        var novoTexto = "", palavra, palavras = this.valueOf().split(" ");
        for (var i = 0; i < palavras.length; i++) {
            palavra = palavras[i];
            novoTexto += palavra.substr(0, 1).toUpperCase() + palavra.substr(1) + " ";
        }
        return novoTexto.trim();
    }
    return "";
}