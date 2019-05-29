$(document).ready(function() {
var userHp;
var userAtk;
var enemyHp;
var enemyAtk;
var enemyDef;
var userChose = 0;
var user;
var enemy;
var win = 0;
var enemiesDefeated = 0;
var losses = 0;
var attack;

// Main Page
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

$(".character").on("click",function(){
    if (userChose == 0) {
        user = $(this).attr('id');
        userChose = 1;
        userHp = $(this).attr('data-health');
        userAtk = $(this).attr('data-attack');
        userDef = $(this).attr('data-defend');
        $(this).appendTo(".user-char");
        $(this).off('click');
    switch (user) {
        case 'pikachu':
            $("#squirtle").appendTo(".comp-char-1");
            $("#charmander").appendTo(".comp-char-2");
            $("#mewtwo").appendTo(".comp-char-3");
            break;
        case 'squirtle':
            $("#pikachu").appendTo(".comp-char-1");
            $("#charmander").appendTo(".comp-char-2");
            $("#mewtwo").appendTo(".comp-char-3");
            break;
        case 'charmander':
           $("#pikachu").appendTo(".comp-char-1");
           $("#squirtle").appendTo(".comp-char-2");
           $("#mewtwo").appendTo(".comp-char-3");
           break;
        case 'mewtwo':
           $("#pikachu").appendTo(".comp-char-1");
           $("#squirtle").appendTo(".comp-char-2");
           $("#charmander").appendTo(".comp-char-3");
           break;
    }
    }
   
   else if (userChose == 1) {
       enemy = $(this).attr('id');
       userChose = 2;
       enemyHp = $(this).attr('data-health');
       enemyAtk = $(this).attr('data-attack');
       enemyDef = $(this).attr('data-defend');
       $(this).appendTo(".defender");
       $(this).addClass("enemy");
       $(".btn-attack").on('click', attack);
   }
})

function attack(){
userAtk = parseInt(userAtk);
userHp = parseInt(userHp);
enemyHp = parseInt(enemyHp);
enemyAtk = parseInt(enemyAtk);

userHp -= enemyDef;
enemyHp -= userAtk;
// add new variable to useratk
if (enemyHp <= 0) {
    $(".enemy").remove();
    userChose = 1;
    enemiesDefeated++;
    enemyHp = 0;
    enemyAtk = 0;
    enemyDef = 0;
}

if (enemiesDefeated == 3 ) {
    $(".result").html("You have defeated all of the trainer's pokemon! You are the pokemon master!");
    win++;
}
$(".enemy-hp").html(enemyHp);
console.log(userHp);
$(".user-hp").html(userHp);


$(".result").html(" " +user +" did " +userAtk +" damage to " +enemy +". "+enemy +" counter " +enemyDef +" damage to " +user);

console.log(userHp);
if (userHp <= 0) {
    $(".btn-attack").off("click");
    $(".result").html("You Lost! Better luck next time!");
    losses++;
}
}

var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/music/battle-song.MP3");
$(".btn-battle").on("click", function() {
    $(".character-screen").fadeOut();
    $(".battle-screen").fadeIn();
    audioElement.play();
});
});
