// // Main Page
$(document).ready(function() {
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/music/pokemon-song.MP3");
$(".btn-start").on("click", function() {
    $(".main-screen").fadeOut();
    $(".loading-screen").fadeIn();
    $(".loading-screen").delay(1000).fadeOut();
    $(".character-screen").delay(1000).fadeIn();
    // $(".loading-screen").delay(5000).fadeOut();
    // $(".character-screen").delay(7000).fadeIn();
    audioElement.play();
});
});

$(document).ready(function() {
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/music/battle-song.MP3");
$(".btn-battle").on("click", function() {
    $(".character-screen").fadeOut();
    $(".battle-screen").fadeIn();
    audioElement.play();
});
});

$(document).ready(function() {
// var audioElement = document.createElement("audio");
// audioElement.setAttribute("src", "assets/music/battle-song.MP3");
$(".characters").on("click", function() {
    if (pikachu) {
        $("#pikachu").prependTo($(".user-char"));
    }
    if (squirtle) {
        $("#squirtle").prependTo($(".user-char"));
    }
    if (charmander) {
        $("#charmander").prependTo($(".user-char"));
    }
    if (mewtwo) {
        $("#mewtwo").prependTo($(".user-char"));
    }
    
});
});



