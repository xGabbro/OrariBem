//#### Funzione per il caricamento delle classi

function buildClassList() {

    loadJSON('data', function (response) {
        var data = JSON.parse(response);

        for (var i = 0; i < Object.keys(data).length; i++) {
            var ul = document.getElementById("classes");

            var _category = document.createElement("t");
            _category.appendChild(document.createTextNode(data[i].category));
            _category.setAttribute("style", "color: grey; float: left; text-transform: uppercase");

            ul.appendChild(_category);

            ul.innerHTML += "<br />";

            for (var t = 0; t < Object.keys(data[i].classes).length; t++) {
                var _class = document.createElement("a");
                var _name = data[i].classes[t].name;

                _class.appendChild(document.createTextNode(_name));
                _class.setAttribute("onClick", "buildTimetable(" + i + "," + t + ")");
                _class.setAttribute("href", "#orario");
                ul.appendChild(_class);

            }

            ul.innerHTML += "<br />";

        }

    });

}

//####

//#### Funzionbe per la costruzione dell'orario

function buildTimetable(category, cls) {

    loadJSON('data', function (response) {
        var data = JSON.parse(response);
        var days = ['mon', 'tue', 'wed', 'thu', 'fri']

        var ul = document.getElementById("timetable");

        ul.innerHTML = "";

        days.forEach(function (day) {
            var stringSubjects = data[category].classes[cls].timetable[day];
            var subjects = stringSubjects.split('_');

            var div = document.createElement("div");
            div.setAttribute("class", "container");
            div.setAttribute("id", day);

            ul.appendChild(div);

            var counter = 1;
            subjects.forEach(function (subject) {
                var divDay = document.getElementById(day);

                var sub = document.createElement("a");
                sub.setAttribute("class", "orario");
                sub.appendChild(document.createTextNode(counter + "^Ora " + subject));
                divDay.appendChild(sub);

                counter++;
            });

            ul.innerHTML += "<br />";

        });

        var cont = document.getElementById("asni");
        cont.setAttribute("style", "");
        cont.setAttribute("class", "contenitore2");

    });

}

//####

//#### Funzione per caricare un file JSON

function loadJSON(name, callback) {
    var xobj = new XMLHttpRequest();

    xobj.overrideMimeType("application/json");
    xobj.open('GET', name + '.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);

}

//####