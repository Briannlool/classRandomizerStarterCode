$(document).ready(function(){

var scriptEdders= ["Paulson", "Brian", "Kevin", "Ricky"]; 
var scriptEd= ["Joe", "Nate", "Dennis", "Chinnell"];

$("#studentButton").click(function(){
    var x= Math.floor(Math.random()*scriptEdders.length);
    console.log(x)
    $("#studentDisplay").html(scriptEdders[x]); 
}); 
   
   
$("#studentclicker").click(function(){  
    var students= $("input").val(scriptEdders.push());  
    if ( students === "")
    $("#students").html("Error"); 

    
    
}); 
   
   
   
$("#teacherButton").click(function(){
    var y= Math.floor(Math.random()*scriptEd.length); 
    
$("#teacherDisplay").html(scriptEd[y]);    
}); 
   
    
});
