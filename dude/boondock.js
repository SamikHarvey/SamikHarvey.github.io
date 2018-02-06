$(function(){
    question1();
});

var question1 = function(){
  
  $("div.narrative, span.q1").html("Choose Your Character");
  $(".q1").show();
  $(".q1-choice").show();
  $(".buttons").html("<button class='btn btn-primary q1-yes'> YES </button>");
  $(".buttons").append("<button class='btn btn-primary q1-no'> NO </button>");

 $(document).ready(function() {
    $("#Huey")
        .append("<img src=huey.jpg width=100 height=100  />")
        .button();
});
$("#Huey").click(function(){
       $(".q1").hide();
       $(".q1-choice").hide();
       $(".q2").show();
       $(".q2-progress").show();
       $(".q2-choice").show();
       $(".q2-progress").show();
 })
 $(document).ready(function() {
    $("#Karate")
        .append("<img src=karate.jpeg width=100 height=100  />")
        .button();
});
$("#Karate").click(function(){
       $(".q2").hide();
       $(".q2-choice").hide();
       $(".s1").show();
       $(".s1-choice").show();
       $(".s1-progress").show();
       $(". btn-primary s1-choices-next").click(function(){
 });
 })
 
$(document).ready(function() {
    $("#Staff")
        .append("<img src=staff.jpg width=100 height=100  />")
        .button();
}); 
$("#Staff").click(function(){
      $(".q2").hide();
       $(".q2-choice").hide();
       $(".s2").show();
       $(".s2-choice").show();
       $(".s2-progress").show();
       $(". btn-primary s2-choices-next").click(function(){
 });
 })






$(document).ready(function() {
    $("#Riley")
        .append("<img src=rileyy.png width=100 height=100  />")
        .button();
});
$("#Riley").click(function(){
       $(".q1").hide();
       $(".q1-choice").hide();
       $(".q3").show();
       $(".q3-progress").show();
       $(".q3-choice").show();
       $(".q3-progress").show();
 })
 $(document).ready(function() {
    $("#Fists")
        .append("<img src=rchair.jpeg width=100 height=100  />")
        .button();
});
$("#Fists").click(function(){
       $(".q1").hide();
       $(".q1-choice").hide();
       $(".q3").show();
       $(".q3-progress").show();
       $(".q3-choice").show();
       $(".q3-progress").show();
 })
 
 
$(document).ready(function() {
    $("#Golf")
        .append("<img src=golf.jpg width=100 height=100  />")
        .button();
}); 
$("#Golf").click(function(){
       $(".q1").hide();
       $(".q1-choice").hide();
       $(".q3").show();
       $(".q3-progress").show();
       $(".q3-choice").show();
       $(".q3-progress").show();
 })


};
