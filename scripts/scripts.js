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
                _class.appendChild(document.createTextNode(data[i].classes[t].name));
                _class.setAttribute("href", "#");        
                ul.appendChild(_class);

            }     

            ul.innerHTML += "<br />";  

        }

    });

}

//####

//#### Funzionbe per la costruzione dell'orario

function buildTimetable(name) {

    loadJSON('data'), function(response) {
        var data = JSON.parse(response);
        var days = ['mon', 'tue', 'wed', 'thu', 'fri']
        
        days.forEach(function(day) {
            var stringSubjects = data[name].timetable[day];
            var subjects = stringSubject.split('_');

            var counter = 1;
            subjects.forEach(function(subject) {
                
                 

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

function provv() {
	console.log(data[i].timetable["lun"]);
	for(var t = 0; t < Object.keys(data[i]['timetable']).length; t++) {
		var day = data[i].timetable[t];
		console.log(day);
		console.log(data[i].timetable['mon']);
		var ul = document.getElementById("list");
		var li = document.createElement("li");
		li.appendChild(document.createTextNode("DIO PORCO"));
		li.setAttribute("href", "#");
		ul.appendChild(li);		
	}
}

