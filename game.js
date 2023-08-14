 var buttonColours= ["red","blue","green", "yellow"];
 var gamePattern =[];
 var userClickedPattern =[]; 
 var level =0;
 var started=0;
 $(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level "+ level);
    started=1;
    nextSequence();
  }
 })

 $(".btn").click(function(){
 var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence () {
  userClickedPattern=[];
level++;
  $("#level-title").text("Level "+ level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour= buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);

    
};
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

};
function animatePress(currentColour){
 $("." + currentColour).addClass("pressed");
 setTimeout(function(){
  $("." + currentColour).removeClass("pressed");
 },100);
};
function checkAnswer(currentLevel){
 if( gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
  console.log("success");
  if( userClickedPattern.length ===gamePattern.length ){
   setTimeout(function(){
   nextSequence();
  }, 1000);
   }  }
  else{
    console.log("fail");
    playWrongSound();
    $("h1").text("Game over, press any key to restart");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    startover();
  }};
  function playWrongSound(){
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
  }
  function startover(){
  started=0;
  gamePattern=[];
  level=0;
  };



