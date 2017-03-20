/* global $ */
var scriptEdders= ["Paulson", "Brian", "Kevin", "Ricky"]; 
var scriptEd = ["Joe", "Nate", "Dennis", "Chinnell"];

function add_name( name, isTeacher ) {
    if ( name.length !== 0 ) {
        if ( isTeacher ) {
            scriptEd.push( name );
        }
        else {
            scriptEdders.push( name );
        }
    }
    else {
        alert('please give a name');
    }
}



$(document).ready(function(){


$("#studentButton").click(function(){
    var x= Math.floor(Math.random()*scriptEdders.length);
    console.log(x);
    $("#studentDisplay").html(scriptEdders[x]); 
}); 
   
   
$("#studentclicker").click(function(){  
    var students= $("#students").val();
    
        add_name( students, false );
        console.log( scriptEdders );
        $("#students").html(students);
    $('input').val('');
    $("#studentclicker").html("Add Another Name");
}); 
   
   
   
$("#teacherButton").click(function(){
    var y= Math.floor(Math.random()*scriptEd.length); 
    
    $("#teacherDisplay").html(scriptEd[y]);    
}); 
   
$("#teacherclicker").click(function(){  
    var teacher = $("#teachers").val();
    
        add_name( teacher, true );
        console.log( scriptEd );
        $("#teachers").html(teacher); 
    $('input').val('');
    $("#teacherclicker").html("Add Another Name"); 
}); 
   
});
