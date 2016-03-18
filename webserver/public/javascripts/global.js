function populateTable(){
  console.log("inside populate table function");
    var u = $("#uname").val();
    var p = $("#pass").val()
    $.ajax({
        type: "POST",
        url: "/send",
        dataType: "json",
        encode: true,
        contentType: 'application/json',
        data: JSON.stringify({username:u,password:p}),
        success: function(msg){
          console.log("succ", msg);
         alert("login details are verified and saved successfully");
        },
        error: function (error) {
        
            console.log("error", error);
            alert("login details are not verified");
        }
     });

}
