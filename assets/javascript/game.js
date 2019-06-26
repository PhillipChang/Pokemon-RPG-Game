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
    $(".loading-screen").delay(5000).fadeOut();
    $(".character-screen").delay(7000).fadeIn();
});
var audioBattle = document.createElement("audio");
audioBattle.setAttribute("src", "assets/music/battle-song.MP3");
$(".btn-battle").on("click", function() {
    if (userChose === 0){
        alert("You have not selected a pokemon!")
    }
    else{
    $(".character-screen").fadeOut();
    $(".battle-screen").fadeIn();
    charSelect();
    audioElement.pause();
    audioBattle.play();
    audioBattle.volume= 0.5;
    }
});

charSelect();

function charSelect(){
$(".character").on("click",function(){
    if (userChose === 0) {
        user = $(this).attr('id');
        userChose = 1;
        userHp = $(this).attr('data-health');
        userAtk = $(this).attr('data-attack');
        userDef = $(this).attr('data-defend');
        berry = $(this).attr('data-attack');
        $(".user-hp").append(userHp);
        $(this).appendTo(".user-char");
        $(".stat").remove();
    switch (user) {
        case 'moltres':
            $("#articuno").appendTo(".comp-char-1");
            $("#zaptos").appendTo(".comp-char-2");
            $("#mewtwo").appendTo(".comp-char-3");
            break;
        case 'articuno':
            $("#moltres").appendTo(".comp-char-1");
            $("#zaptos").appendTo(".comp-char-2");
            $("#mewtwo").appendTo(".comp-char-3");
            break;
        case 'zaptos':
           $("#moltres").appendTo(".comp-char-1");
           $("#articuno").appendTo(".comp-char-2");
           $("#mewtwo").appendTo(".comp-char-3");
           break;
        case 'mewtwo':
           $("#moltres").appendTo(".comp-char-1");
           $("#articuno").appendTo(".comp-char-2");
           $("#zaptos").appendTo(".comp-char-3");
           break;
    }
    }
   else if (userChose === 1) {
       enemy = $(this).attr('id');
       userChose = 2;
       enemyHp = $(this).attr('data-health');
       enemyAtk = $(this).attr('data-defend');
       $(".enemy-hp").append(enemyHp);
       $(this).appendTo(".defender");
       $(this).addClass("enemy");
       $(".attack-button").append('<img class="attack" src="assets/images/attack.png">');
       $(".attack").css('width:','38%');
       attack();
    }
   $(".character").off("click");
});
}

function attack(){
$(".attack").on("click",function(){
userAtk = parseInt(userAtk);
userHp = parseInt(userHp);
enemyHp = parseInt(enemyHp);
enemyAtk = parseInt(enemyAtk);
berry = parseInt(berry);

enemyHp -= userAtk;
$(".result").html(" " +user +" did " +userAtk +" damage to " +enemy +". "+enemy +" counter " +enemyAtk +" damage to " +user);
userAtk = berry + userAtk;

if (enemyHp <= 0) {
    $(".enemy").remove();
    $(".attack").remove();
    userChose = 1;
    enemiesDefeated += 1;
    enemyHp = "";
    enemyAtk = 0;
    $("#enemies-defeat").text(enemiesDefeated);
    charSelect();
}
userHp -= enemyAtk;
$(".enemy-hp").text(enemyHp);
$(".user-hp").text(userHp);

if (userHp <= 0) {
    $(".result").html("You Lost! Better luck next time!");
    losses++;
    $("#losses").text(losses);
    $(".attack").remove();
    restart();
}
if (enemiesDefeated === 3 ) {
    $(".result").html("You have defeated all of the trainer's pokemon! You are the pokemon master!");
    win++;
    $("#wins").text(win);
    restart();
}
});
}

function restart(){
$(".btn-start-over").on("click",function(){
    location.reload();
});
}

});