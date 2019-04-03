var request = new XMLHttpRequest()

request.open('GET', 'data.json', true)

request.onload = function() {
    var data = JSON.parse(this.response)

    $.each(data, function(i, option) {
        $('#sas').append($('<option/>').attr("value", i).text(data['class'][i]['name']));
    });

}

request.send()