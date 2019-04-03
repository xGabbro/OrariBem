
function getClass() {
    
    loadJSON('data', function(response) {
        var data = JSON.parse(response);
        
        for(var i = 0; i < Object.keys(data).length; i++) {
            console.log(data[i].name);
            var ul = document.getElementById("list");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(data[i].name));
            li.setAttribute("href", "#");
            ul.appendChild(li);
        }

    });

}

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

getClass();