function todoApp() {
    "use strict";
    var tasklist = [];

    function taskModel(text) {
        this._id = ~~(Math.random() * 10);
        this._task = text;
        this._completed = false;
    }

    function saveTask(task) {
        tasklist.push(task);
    }

    function printTasks() {
        var list = document.querySelector("#tasklist");
        list.innerHTML = "";
        var ul = document.createElement("ul");
        for (var index = 0; index < tasklist.length; index++) {
            var t = tasklist[index];
            var li = document.createElement("li");
            li.setAttribute("id", t._id);
            li.textContent = t._task;
            li.addEventListener("click", strike);
            ul.appendChild(li);
        }
        list.appendChild(ul);
    }

    function validarCampo() {
        var campo = document.querySelector("#txtNewTask");
        if (campo.value.trim()) {
            campo.className = campo.className.replace("invalid", "");
            return true;
        } else {
            if (campo.className.indexOf("invalid") === -1)
                campo.className += "invalid";
            return false;
        }
    }
    function addNewTask(event) {
        if (validarCampo()) {
            var campo = document.querySelector("#txtNewTask");
            var task = new taskModel(campo.value);
            saveTask(task);
            printTasks();
            campo.value = "";
        }
    }

    function strike(event) {
        var campo = event.target;
        if (campo.className.indexOf("strike") === -1) {
            campo.className += "strike";
        } else {
            campo.className = campo.className.replace("strike", "");
        }
    }

    document.querySelector("#btnNewTask").addEventListener("click", addNewTask);
}

window.addEventListener("load", todoApp);