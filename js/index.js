$(document).ready(function(){
 
  var timer;
  var change=true;
  var seconds=60;
  var min=25;
  var sess=25;
  var breaktime=5;
  var newmin=0;
  function startcounting() {
    
  timer = setInterval(function() {
    
      function check(){
      var minutenow=(min-1).toString();
      seconds=seconds-1;
      seconds=seconds.toString();
      $("#timer").html(minutenow+":"+(seconds < 10 ? "0" : "")+seconds);
  }
      
    if(seconds>0){ 
      check();
    }  
    else{
       if(min-1>0){
      min=min-1;
      seconds=60;
      newmin=newmin+1;
      check();
       } 
      else if(min-1===0&&change){
        min=breaktime;
        seconds=60;
        change=!change;
        check();
        $(".add").html("Break");
      }
      else if(min-1===0&&change===false){
        min=sess;
        seconds=60;
        change=!change;
        check();
        $(".add").html("Session");
      }  
    }   
  }, 1000);  
}
 
var started = false;  
 
$('.sess').click(function() {
  if (started) { 
    clearTimeout(timer);
  $(this).css("background-color","#00b300");
  }
  
  else {
    startcounting();
    $(this).css("background-color","#FF4500");
  }
    started = !started;
});
  
  $(".sess").one("click",function(){
    $(".add").html("Session");
  });
  
  $("#sessplus").on("click",function(){
    if(started===false){
      sess=sess+1;
      if(newmin===0){
      min=sess;
      }
      if(change===true){
      $("#timer").html(sess+":00");
         min=sess;
        seconds=60;
      }
    $(".time").html(sess+":00");
    
    }
  });
  $("#sessminus").on("click",function(){
    if(started===false){ 
      
    if(min>1){
    sess=sess-1;
      if(newmin===0){
      min=sess;
      }
      if(change===true){
      $("#timer").html(sess+":00");
        min=sess;
        seconds=60;
      }
    $(".time").html(sess+":00");
    
      }
    }
  });
    
  $("#breakplus").on("click",function(){
    if(started===false){
    breaktime=breaktime+1;
    $(".brtime").html(breaktime+":00");
      if(change===false){ 
         seconds=60;
         min=breaktime;
    $("#timer").html(breaktime+":00");
      }
     }
  });
  $("#breakminus").on("click",function(){
    if(started===false){ 
         
    if(breaktime>1){
    breaktime=breaktime-1;
    $(".brtime").html(breaktime+":00");
         
      if(change===false){ 
         seconds=60;
         min=breaktime;
    $("#timer").html(breaktime+":00");
      }
     }
    }
  });
   
});