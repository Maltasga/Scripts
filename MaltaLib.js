(function () {
    "use strict";
    window.maltalib = window.maltalib | {};

    function _formataData(data) {
        var dia = "", mes = "", ano = 0;
        if (!_isTypeof("date", data)) throw new Error("A data informada deve ser um objeto do tipo Date");
        dia = (function (d) { if (d < 9) return "0" + d; return "" + d; })(data.getDate());
        mes = (function (m) { m += 1; if (m < 9) return "0" + m; return "" + m; })(data.getMonth());
        ano = data.getFullYear();
        return dia + "/" + mes + "/" + ano;
    }

    function _desabilitar(selector, acao) {
        var elements = _getElements(selector);
        acao = acao | false;
        function _action(e) {
            if (acao) {
                e.disabled = true;
                _addClass(e, "ui-button-disabled ui-state-disabled");
            } else {
                e.disabled = false;
                _removeClass(e, "ui-button-disabled ui-state-disabled");
            }
        }
        _iterateElements(elements, _action);
        return elements;
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

    function _getElements(selector) { return document.querySelectorAll(selector); }
    function _addClass(element, className) { element.className += className; }
    function _removeClass(element, classNames) {
        var i, arrClassNames = classNames.split(" "), l = arrClassNames.length;
        for (i = 0; i < l; i++) { element.className = element.className.replace(arrClassNames[i], ""); }
        element.className = element.className.trim();
    }
    function _iterateElements(elements, callback) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) { callback(element[i]); }
    }

    maltalib.formataData = _formataData;
    maltalib.desabilitar = _desabilitar;
    maltalib.toogle = _toogleElement;
    maltalib.isTypeof = _isTypeof;
})();