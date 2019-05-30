app = {
    droneLocation: "",
    init: function () {
        console.log("init inside app!");
        $("title").text("New title");
        $.getJSON("https://projectx-marconi.firebaseio.com/dronedetail.json")
            .done(app.onSuccess)
            .fail(app.onError);
        $("#go-button").on("click", app.go);
    },
    go: function () {
        let location = $("#stanza").text();
        console.log(location);
        if (location === "salotto") {
            location = "camera";
        } else if(location === "camera"){
            location = "cucina";
        }
        else if(location ==="cucina"){
            location ="bagno";
        }
        else{
            location="salotto";
        }
        let jsonData = JSON.stringify(location);
        console.log(jsonData);
        $.ajax({
            type: "PUT",
            url: "https://projectx-marconi.firebaseio.com/dronedetail/stanza.json",
            data: jsonData,
            contentType: "application/json",
        }).done(app.onGoSuccess)
            .fail(app.onError);
    },
    push: function () {
        let transport = $("#oggetto").text();
        console.log(transport);
        if (transport === "libero") {
            transport = "occupato";
        }else{
            transport="libero";
        }
        let jsonData = JSON.stringify(transport);
        console.log(jsonData);
        $.ajax({
            type: "PUT",
            url: "https://projectx-marconi.firebaseio.com/dronedetail/stanza.json",
            data: jsonData,
            contentType: "application/json",
        }).done(app.onGoSuccess)
            .fail(app.onError);
    },
    onGoSuccess: function (jsonData) {
        console.log(`onGoSuccess: ${jsonData}`)
        $("#stanza").text(jsonData);
    },
    onSuccess: function (jsonData) {
        // processa i dati qui!!!
        console.log(jsonData);
        $("#stanza").text(jsonData.stanza)
        $("#oggetto").text(jsonData.oggetto)
        $("#connessione").text(jsonData.connessione)
        $("#batteria").text(jsonData.batteria)
    },

    onError: function (e) {
        console.log("error!");
        console.log(JSON.stringify(e));
    }
};



$(document).ready(app.init);