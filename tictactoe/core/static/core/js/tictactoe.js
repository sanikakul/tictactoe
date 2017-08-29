var tictactoe = {

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
            $("#top-left").off("click");
        });

        $("#top-center").click(function(){
            var parent = document.getElementById("top-center");
            var child = tictactoe.createX();
            parent.append(child);
            $("#top-center").off("click");
        });

        $("#top-right").click(function(){
            var parent = document.getElementById("top-right");
            var child = tictactoe.createX();
            parent.append(child);
            $("#top-right").off("click");
        });

        $("#middle-left").click(function(){
            var parent = document.getElementById("middle-left");
            var child = tictactoe.createX();
            parent.append(child);
            $("#middle-left").off("click");
        });

        $("#middle-center").click(function(){
            var parent = document.getElementById("middle-center");
            var child = tictactoe.createX();
            parent.append(child);
            $("#middle-center").off("click");
        });

        $("#middle-right").click(function(){
            var parent = document.getElementById("middle-right");
            var child = tictactoe.createX();
            parent.append(child);
            $("#middle-right").off("click");
        });

        $("#bottom-left").click(function(){
            var parent = document.getElementById("bottom-left");
            var child = tictactoe.createX();
            parent.append(child);
            $("#bottom-left").off("click");
        });

        $("#bottom-center").click(function(){
            var parent = document.getElementById("bottom-center");
            var child = tictactoe.createX();
            parent.append(child);
            $("#bottom-center").off("click");
        });

        $("#bottom-right").click(function(){
            var parent = document.getElementById("bottom-right");
            var child = tictactoe.createX();
            parent.append(child);
            $("#bottom-right").off("click");
        });
    },

    initializeOs: function() {
        $("#top-left").click(function(){
            var parent = document.getElementById("top-left");
            var child = tictactoe.createO();
            parent.append(child);
            $("#top-left").off("click");
        });

        $("#top-center").click(function(){
            var parent = document.getElementById("top-center");
            var child = tictactoe.createO();
            parent.append(child);
            $("#top-center").off("click");
        });

        $("#top-right").click(function(){
            var parent = document.getElementById("top-right");
            var child = tictactoe.createO();
            parent.append(child);
            $("#top-right").off("click");
        });

        $("#middle-left").click(function(){
            var parent = document.getElementById("middle-left");
            var child = tictactoe.createO();
            parent.append(child);
            $("#middle-left").off("click");
        });

        $("#middle-center").click(function(){
            var parent = document.getElementById("middle-center");
            var child = tictactoe.createO();
            parent.append(child);
            $("#middle-center").off("click");
        });

        $("#middle-right").click(function(){
            var parent = document.getElementById("middle-right");
            var child = tictactoe.createO();
            parent.append(child);
            $("#middle-right").off("click");
        });

        $("#bottom-left").click(function(){
            var parent = document.getElementById("bottom-left");
            var child = tictactoe.createO();
            parent.append(child);
            $("#bottom-left").off("click");
        });

        $("#bottom-center").click(function(){
            var parent = document.getElementById("bottom-center");
            var child = tictactoe.createO();
            parent.append(child);
            $("#bottom-center").off("click");
        });

        $("#bottom-right").click(function(){
            var parent = document.getElementById("bottom-right");
            var child = tictactoe.createO();
            parent.append(child);
            $("#bottom-right").off("click");
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
        tictactoe.initializeOs();
    });

    $("#quit-game").click(function() {
        location.reload();
    })

});