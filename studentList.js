$(document).ready(function(){
    //define interval function
    document.getElementById("timeInput").value = "00:01";
    updateTime();
   setInterval(function(){updateTime()}, 15000);
});



function updateTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    console.log("updating time. " + h + ":" + m)
    var s = h + ":" +m;
    //$("#timeInput").value(h + ":" + m);
    //TODO: change this to jquery. maybe.
    document.getElementById("timeInput").value = s; 
}