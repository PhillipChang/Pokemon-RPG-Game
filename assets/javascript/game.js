var pokemon = [
    {
        name: "Pikachu",
        hp: 120,
        attack: 25,
        defend: 10,
        image:"assets/images/pikachu-2.png",
    },
    {
        name: "Squirtle",
        hp: 100,
        attack: 20,
        defend: 15,
        image:"assets/images/squirtle.png",
    },
    {
        name: "Charmander",
        hp: 100,
        attack: 15,
        defend: 25,
        image:"assets/images/charmander-3.png",
    },
    {
        name: "Mewtwo",
        hp: 100,
        attack: 30,
        defend: 10,
        image:"assets/images/mewtwo-2.png",
    }];

var userHp;
var userAtk;
var userPokemon;
var enemyHp;
var enemyAtk;
var enemyPokemon;

// Main Page
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


// function enemyPokemon() {
//     for (i=0;i<pokemon.length;i++){
//         if (userPokemon !== pokemon[i]) {
//             pokemon[i].prependTo($(".comp-char"));
//         }
//     }
// }



$(document).ready(function() {
   $("#pikachu").on("click", function(){
        $("#pikachu").appendTo($(".user-char"));
        userPokemon = pokemon[0];
        userHp = pokemon[0].hp;
        userAtk = pokemon[0].attack;
        $("#squirtle").appendTo($(".comp-char"));
        $("#charmander").appendTo($(".comp-char"));
        $("#mewtwo").appendTo($(".comp-char"));
    });
    $("#squirtle").on("click", function(){
        $("#squirtle").appendTo($(".user-char"));
        $("#pikachu").appendTo($(".comp-char"));
        $("#charmander").appendTo($(".comp-char"));
        $("#mewtwo").appendTo($(".comp-char"));
    });
    $("#charmander").on("click", function(){
        $("#charmander").appendTo($(".user-char"));

        $("#pikachu").appendTo($(".comp-char"));
        $("#squirtle").appendTo($(".comp-char"));
        $("#mewtwo").appendTo($(".comp-char"));
    });
    $("#mewtwo").on("click", function(){
        $("#mewtwo").appendTo($(".user-char"));
        $("#pikachu").appendTo($(".comp-char"));
        $("#squirtle").appendTo($(".comp-char"));
        $("#charmander").appendTo($(".comp-char"));
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





