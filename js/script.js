$("#finished").click(function() {
  check();
});

function check() {
  var question1 = $("#question1").val();
  var question2 = $("input[class='question2']:checked").val();
  var question3 = $("#question3").val();
  var question4 = $("#question4").val();
  var question5 = $("#question5").val();
  var question6 = $("input[class='question6']:checked").val();
  var correct=0;

  if (question1=="e") {
    correct++;
  }

  if (question2=="A River") {
    correct++;
  }

  if (question3=="name") {
    correct++;
  }

  if (question4=="vowels") {
    correct++;
  }

  if (question5=="hole") {
    correct++;
  }

  if (question6=="A Ruler") {
    correct++;
  }

  var messages=["Well look at YOU!!!, not so dum after all!","Well thats just Embarrassing!","Could you be any more Stupid"];
  var pictures=["resources/gif/congrats.gif","resources/gif/embarrassing.gif","resources/gif/failed.gif"]
  var range;

  if (correct < 2) {
range = 2;
} else if (correct < 5) {
range = 1;
} else {
range = 0;
}
  document.getElementById("after_submit").style.visibility="visible";
  document.getElementById("number_correct").innerHTML="You got "+correct+" correct.";
  document.getElementById("message").innerHTML=messages[range];
  document.getElementById("picture").src=pictures[range];


  // var question2 = $("input[class='question2']:checked").val();
// alert(question2);
}

$(".quiz").hide();
$("#container").hide();
$("#game").hide();

$("#begin").click(function () {
  $(".quiz").show();
  $("#myvideo").hide();
  $("#container").hide();
});

$("#riddles").click(function () {
  $("#container").show();
  $(".quiz").hide();
  $("#myvideo").hide();
  $("#game").hide();
});

$("#home2").click(function () {
  $(".quiz").hide();
  $("#myvideo").show();
});

$("#home1").click(function () {
  $("#container").hide();
  $(".quiz").hide();
  $("#myvideo").show();
  $("#game").hide();
});

$("#my-game").click(function () {
  $("#container").hide();
  $(".quiz").hide();
  $("#myvideo").hide();
  $("#game").show();
});
