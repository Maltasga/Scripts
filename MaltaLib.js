(function () {
    "use strict";
    window.maltalib = {};

    function _formataData(data) {
        var dia = "", mes = "", ano = 0;
        if (!_isTypeof("date", data)) throw new Error("A data informada deve ser um objeto do tipo Date");
        dia = (function (d) { if (d < 9) return "0" + d; return "" + d; })(data.getDate());
        mes = (function (m) { m += 1; if (m < 9) return "0" + m; return "" + m; })(data.getMonth());
        ano = data.getFullYear();
        return dia + "/" + mes + "/" + ano;
    }

    function _toogleElement(selector) {
        var elements = _getElements(selector);
        function _action(e) {
            if (e.style.display == "none") {
                e.style.display = "block";
            } else { e.style.display = "none"; }
        }
        _iterateElements(elements, _action);
        return elements;
    }

    function _isTypeof(type, obj) {
        type = type.toLowerCase();
        obj = obj.constructor.toString().toLowerCase();
        return obj.indexOf(type) > -1;
    }

    function _getElements(selector) {
        if (selector)
            return document.querySelectorAll(selector);

        return null;
    }
    
    function _iterateElements(elements, callback) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) { callback(element[i]); }
    }

    maltalib.formataData = _formataData;
    maltalib.toogle = _toogleElement;
    maltalib.isTypeof = _isTypeof;
})();