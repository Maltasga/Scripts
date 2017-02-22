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