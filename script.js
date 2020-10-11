$(document).ready(function() {
   $("#uname").keypress(function(){
     $('#uname').css("border","1px solid #ccc");
   });
  
  $("#uemail").keypress(function(){
     $('#uemail').css("border","1px solid #ccc");
   });
  
  $("#msg").keypress(function(){
     $('#msg').css("border","1px solid #ccc");
   });
     
   $('#submitbtn').click(function(){ 
     var name = $('#uname').val();
     var email = $('#uemail').val();
     var msg = $('#msg').val();
     
     var etest = IsEmail(email);
     
     if(name=='' || email=='' || etest==false) {
       if(name=='') {
         $('#uname').css("border","1px solid red");
       }
       if(msg=='') {
         $('#msg').css("border","1px solid red");
       }
       if(etest==false) {
         $('#uemail').css("border","1px solid red");
       }
       alert("Please enter your name, email and message correctly!");
     }
     else {
       alert("Thank you for contacting me!");
     }
     
   });
});

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}