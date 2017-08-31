var tictactoe = {

    dictionary: {"0": {"0": "top-left", "1": "top-center", "2": "top-right"},
        "1": {"0": "middle-left", "1": "middle-center", "2": "middle-right"},
        "2": {"0": "bottom-left", "1": "bottom-center", "2": "bottom-right"}},

    createO: function(){
        var $element = $("<div></div>");
        $element.addClass("full-size text-center");

        var $child = $("<i></i>");
        $child.addClass("fa fa-circle-o icon-style");

        $element.append($child);
        return $element[0]
    },

    createX: function(){
        var $element = $("<div></div>");
        $element.addClass("full-size text-center");

        var $child = $("<i></i>");
        $child.addClass("glyphicon glyphicon-remove icon-style");

        $element.append($child);

        return $element[0]
    },

    initializeXs: function() {
        $("#top-left").click(function(){
            var parent = document.getElementById("top-left");
            var child = tictactoe.createX();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#top-center").click(function(){
            var parent = document.getElementById("top-center");
            var child = tictactoe.createX();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#top-right").click(function(){
            var parent = document.getElementById("top-right");
            var child = tictactoe.createX();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#middle-left").click(function(){
            var parent = document.getElementById("middle-left");
            var child = tictactoe.createX();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#middle-center").click(function(){
            var parent = document.getElementById("middle-center");
            var child = tictactoe.createX();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#middle-right").click(function(){
            var parent = document.getElementById("middle-right");
            var child = tictactoe.createX();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#bottom-left").click(function(){
            var parent = document.getElementById("bottom-left");
            var child = tictactoe.createX();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#bottom-center").click(function(){
            var parent = document.getElementById("bottom-center");
            var child = tictactoe.createX();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#bottom-right").click(function(){
            var parent = document.getElementById("bottom-right");
            var child = tictactoe.createX();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });
    },

    initializeOs: function() {
        $("#top-left").click(function(){
            var parent = document.getElementById("top-left");
            var child = tictactoe.createO();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#top-center").click(function(){
            var parent = document.getElementById("top-center");
            var child = tictactoe.createO();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#top-right").click(function(){
            var parent = document.getElementById("top-right");
            var child = tictactoe.createO();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#middle-left").click(function(){
            var parent = document.getElementById("middle-left");
            var child = tictactoe.createO();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#middle-center").click(function(){
            var parent = document.getElementById("middle-center");
            var child = tictactoe.createO();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#middle-right").click(function(){
            var parent = document.getElementById("middle-right");
            var child = tictactoe.createO();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#bottom-left").click(function(){
            var parent = document.getElementById("bottom-left");
            var child = tictactoe.createO();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#bottom-center").click(function(){
            var parent = document.getElementById("bottom-center");
            var child = tictactoe.createO();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });

        $("#bottom-right").click(function(){
            var parent = document.getElementById("bottom-right");
            var child = tictactoe.createO();
            parent.append(child);
            tictactoe.deInitializeGridClicks();
            tictactoe.appsTurn();
        });
    },

    deInitializeGridClicks: function () {
        $("#top-left").off("click");
        $("#top-center").off("click");
        $("#top-right").off("click");

        $("#middle-left").off("click");
        $("#middle-center").off("click");
        $("#middle-right").off("click");

        $("#bottom-left").off("click");
        $("#bottom-center").off("click");
        $("#bottom-right").off("click");
    },

    appsTurn: function () {
        $.ajax({
            type: 'GET',
            url: 'apps_turn/',
            dataType: "json",
            success: function(data) {
=            alert(data)
		}});

    }
};

$(document).ready(function(){

    tictactoe.initializeXs();

    $("#player-user").click(function() {
        var $element = document.getElementById("player-user");
        $element.style.color = "peru";

        var $other = document.getElementById("player-app");
        $other.style.color = "#8c8c8c";

        var $turn = document.getElementById("turn-div");
        $turn.textContent = "Your Turn";

        tictactoe.deInitializeGridClicks();
        tictactoe.initializeXs();
    });

    $("#player-app").click(function() {
        var $element = document.getElementById("player-app");
        $element.style.color = "peru";

        var $other = document.getElementById("player-user");
        $other.style.color = "#8c8c8c";

        var $turn = document.getElementById("turn-div");
        $turn.textContent = "App's Turn";

        tictactoe.deInitializeGridClicks();
        tictactoe.initializeXs();
    });

    $("#quit-game").click(function() {
        location.reload();
    })

});