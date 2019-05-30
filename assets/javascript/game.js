$(document).ready(function() {
var userHp;
var userAtk;
var berry;
var enemyHp;
var enemyAtk;
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
    audioElement.play();
    $(".main-screen").fadeOut();
    $(".loading-screen").fadeIn();
    $(".loading-screen").delay(1000).fadeOut();
    $(".character-screen").delay(1000).fadeIn();
    // $(".loading-screen").delay(5000).fadeOut();
    // $(".character-screen").delay(7000).fadeIn();
});

$(".character").on("click",function(){
    if (userChose === 0) {
        user = $(this).attr('id');
        userChose = 1;
        userHp = $(this).attr('data-health');
        userAtk = $(this).attr('data-attack');
        userDef = $(this).attr('data-defend');
        berry = $(this).attr('data-attack');
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
   
   else if (userChose === 1) {
       enemy = $(this).attr('id');
       userChose = 2;
       enemyHp = $(this).attr('data-health');
       enemyAtk = $(this).attr('data-defend');
       $(this).appendTo(".defender");
       $(this).addClass("enemy");
       $(".btn-attack").on("click", attack);
       console.log("This is enemy hp");
       console.log(enemyHp);
   }
});

function attack(){
userAtk = parseInt(userAtk);
userHp = parseInt(userHp);
enemyHp = parseInt(enemyHp);
enemyAtk = parseInt(enemyAtk);
berry = parseInt(berry);

enemyHp -= userAtk;
$(".result").html(" " +user +" did " +userAtk +" damage to " +enemy +". "+enemy +" counter " +enemyAtk +" damage to " +user);
console.log("user attack");
console.log(userAtk);
userAtk += berry;
console.log(userAtk);


if (enemyHp <= 0) {
    $(".enemy").remove();
    $("btn-attack").off('click', attack);
    userChose = 1;
    enemiesDefeated += 1;
    enemyHp = 0;
    enemyAtk = 0;
    console.log("enemy defeated");
    console.log(enemiesDefeated);
    $("#enemies-defeat").text(enemiesDefeated);
}
userHp -= enemyAtk;
$(".enemy-hp").text(enemyHp);
$(".user-hp").text(userHp);



if (userHp <= 0) {
    $(".btn-attack").off("click");
    $(".result").html("You Lost! Better luck next time!");
    losses++;
    $("#losses").text(losses);
}
if (enemiesDefeated === 3 ) {
    $(".result").html("You have defeated all of the trainer's pokemon! You are the pokemon master!");
    $("btn-attack").off('click');
    win++;
    $("#wins").text(win);
}
}

var audioBattle = document.createElement("audio");
audioBattle.setAttribute("src", "assets/music/battle-song.MP3");
$(".btn-battle").on("click", function() {
    $(".character-screen").fadeOut();
    $(".battle-screen").fadeIn();
    audioElement.pause();
    audioBattle.play();
    audioBattle.volume= 0.5;
});
});
