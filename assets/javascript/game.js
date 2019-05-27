$(document).ready(function() {
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/javascript/pokemon-song.MP3");
$(".btn").on("click", function() {
    audioElement.play();
})
});



