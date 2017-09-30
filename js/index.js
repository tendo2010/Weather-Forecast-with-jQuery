$(function(){
    $("#loadwebapi").click(function(){
        $("#name").empty();
        $("#icon").empty();
        $("#temp").empty();
        $("#main").empty();
        $("#description").empty();
        
        var city = $("#city").val();

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
        url += "&APPID=6c291c42e7daecda369bcab1dc673372";
            $.get(url, function(data){
                var row = "<h5>" + data.name + "</h5>";
                var row2 = "<img src='images/" + data.weather[0].icon + ".png'>";
                var row3 = (data.main.temp * 0.1).toFixed(2) + " ºC";
                var row4 = data.weather[0].main;
                var row5 = data.weather[0].description;
                console.log(data);
                $("#name").append(row);
                $("#icon").append(row2);
                $("#temp").append(row3);
                $("#main").append(row4);
                $("#description").append(row5);
            });
    });
});