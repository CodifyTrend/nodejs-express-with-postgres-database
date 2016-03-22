function insert(){
 
    var u = $("#uname").val();
    var p = $("#pass").val();
    $.ajax({
        type: "POST",
        url: "/insert",
        dataType: "json",
        encode: true,
        contentType: 'application/json',
        data: JSON.stringify({username:u,password:p}),
        success: function(msg){   
           console.log("succ", msg); 
           alert("registration success");
           window.location.href='/login';
        },
        error: function (error) {    
            console.log("error", error); 
        }
     });

}


function populateTable(){
    var u = $("#uname").val();
    var p = $("#pass").val();
    $.ajax({
        type: "POST",
        url: "/send",
        dataType: "json",
        encode: true,
        contentType: 'application/json',
        data: JSON.stringify({username:u,password:p}),
        success: function(msg){
            console.log("succ", msg);
            if(msg.message=="true"){
             window.location.href='/alert';
            } 
            else {
           alert("username and password is incorrect");
               }
             
        },
        error: function (error) {
        
            console.log("error", error);
            
        }
     });

}
