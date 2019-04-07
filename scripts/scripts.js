//#### Funzione per il caricamento delle classi

function buildClassList() {
    
    loadJSON('data', function(response) {
        var data = JSON.parse(response);
        
        for(var i = 0; i < Object.keys(data).length; i++) {
            var ul = document.getElementById("classes");
            
            var _category = document.createElement("t");
            _category.appendChild(document.createTextNode(data[i].category));
            _category.setAttribute("style", "color: grey; float: left; text-transform: uppercase");

            ul.appendChild(_category);

            ul.innerHTML += "<br />";     

            for(var t = 0; t < Object.keys(data[i].classes).length; t++) {
                var _class = document.createElement("a");
                var _name = data[i].classes[t].name; 

                _class.appendChild(document.createTextNode(_name));
                _class.setAttribute("href", "javascript:buildTimetable(\"" + _name + "\")");
                ul.appendChild(_class);

            }     

            ul.innerHTML += "<br />";  

        }

    });

}

//####

//#### Funzionbe per la costruzione dell'orario

function buildTimetable(name) {
    console.log(name);

    loadJSON('data'), function(response) {
        var data = JSON.parse(response);
        var days = ['mon', 'tue', 'wed', 'thu', 'fri']
        
        days.forEach(function(day) {
            var stringSubjects = data[name].timetable[day];
            var subjects = stringSubject.split('_');

            var counter = 1;
            subjects.forEach(function(subject) {
                
                 console.log("sas");
            });

        });

    }

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