// // Main Page
$(document).ready(function() {
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/music/pokemon-song.MP3");
$(".btn-start").on("click", function() {
    $(".loading-screen").fadeIn();
    $(".main-screen").fadeOut();
    audioElement.play();
});
});






// function fadeOut() {
//    var fade = 1;
//    var timer = setInterval(function() {
//        if (fade <= 0.1) {
//         clearInterval(timer);
//         $(".loading-row").style.display = 'none';
//        }
//        $(".loading-row").style.opacity= fade;
//        $(".loading-row").style.filter = fade*100;
//        fade -= fade * 0.1;
//    },50);
// }
   
//    );

// function frame() {
//     if (load == 100) {
//         clearInterval(timer);
//         $(".loading-row").style.display = 'none';
//     }
//     else {
//         load = load++;
//     }
// }
// function fade(element) {
//     var op = 1;  // initial opacity
//     var timer = setInterval(function () {
//         if (op <= 0.1){
//             clearInterval(timer);
//             element.style.display = 'none';
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op -= op * 0.1;
//     }, 50);
// }



