function loadAndDisplayCountries() {
    var worldDataFile = "world.json";
    $.getJSON(worldDataFile)
        .done(function (data) {
            console.log(data);
            $.each(data, function (i, item) {
                console.log(item);
                console.log(item.Country);
                console.log('Region is ' + item.Region);
                console.log('Population is ' + item.Population);
                console.log(i);
                $("#countryList").append('<li class="list-group-item"><a href="details.html?id=' + i + '">' + item.Country + '</a></li>');
            });
        });
}

function getCountryById() {
    //https://www.sitepoint.com/url-parameters-jquery/
    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        }
        else {
            return results[1] || 0;
        }
    }

    //show the querystring param
    console.log($.urlParam('id'));

    var worldDataFile = "world.json";
    $.getJSON(worldDataFile, function (data) {
        var countries = data;
        //console.log(countries);
        var id = $.urlParam('id')
        console.log(countries[id]);
        $("#country").text(countries[id].Country);
        $("#region").text(countries[id].Region);
        $("#population").text(countries[id].Population);
    })
}
