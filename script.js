
$('#gomb').on("click", function() {
    console.log("Yeah, you clicked me!");
});
$('#gomb2').on("click", function(){
    $('#gomb').text("igen");
});
$('#gomb3').on("click", function(){
    $('#gomb, #gomb2, #gomb3').css("background-color","blue");
});