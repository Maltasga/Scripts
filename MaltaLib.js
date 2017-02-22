(function () {
    function _formataData(data) {
        if (!data.getDate) throw new Error("A data informada deve ser um objeto do tipo Date");
        var dia = (function (d) { if (d < 9) return "0" + d; return "" + d; })(data.getDate());
        var mes = (function (m) { m += 1; if (m < 9) return "0" + m; return "" + m; })(data.getMonth());
        var ano = data.getFullYear();
        return dia + "/" + mes + "/" + ano;
    }
    function _verificaRangeData(data) {
        // "data" deve estar no formato dd/MM/yyyy
        var arrayData = data.split("/").map(function (valor) { return parseInt(valor); });
        if (arrayData[0] < 1 || arrayData[0] > 31) throw new Error("Data inválida");
        if (arrayData[1] < 1 || arrayData[1] > 12) throw new Error("Data inválida");
        if (arrayData[2] < 1901 || arrayData[2] > 4000) throw new Error("Data inválida");
    }

    if (!window.MaltaLib)
        window.MaltaLib = {
            formataData = _formataData
        };
})();