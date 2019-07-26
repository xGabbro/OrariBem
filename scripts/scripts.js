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
        var days = ['lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì']
        days.setAttribute("style", "text-transform: uppercase");

        var ul = document.getElementById("sectionTT");

        var tbl = document.createElement("table");
        tbl.setAttribute("class", "timetable");
        var tblBody = document.createElement("tbody");

        ul.innerHTML = "";

        //Aggiunge le ore all'orario
        var hoursRow = document.createElement("tr");
        for (var i = 0; i < 9; i++) {
            var cell = document.createElement("td");

            if (i == 0)
                cell.appendChild(document.createTextNode(""));
            else
                cell.appendChild(document.createTextNode(i));

            hoursRow.appendChild(cell);

        }
        tblBody.appendChild(hoursRow);

        //Costruisce l'orario
        days.forEach(function (day) {
            var stringSubjects = data[category].classes[cls].timetable[day];
            var subjects = stringSubjects.split('_');

            var row = document.createElement("tr");
            
            //Aggiunge la cella del giorno
            var daycell = document.createElement("td");
            daycell.appendChild(document.createTextNode(day));
            row.appendChild(daycell);

            //Aggiunge le materie di un determinato giorno
            var counter = 1;
            subjects.forEach(function (subject) {

                var cell = document.createElement("td");
                cell.appendChild(document.createTextNode(subject));
                row.appendChild(cell);

                counter++;
            });

            tblBody.appendChild(row);

        });

        tbl.appendChild(tblBody);
        ul.appendChild(tbl);

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