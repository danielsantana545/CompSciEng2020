var priorTime = "00:01";

$(document).ready(function(){
    //define interval function
    document.getElementById("timeInput").value = "00:01";
    updateTime();
    setInterval(function(){updateTime()},10000);
});

function updateTime(){
    var d = new Date();
    var h = formatTime(d.getHours());
    var m = formatTime(d.getMinutes());
    var s = h + ":" +m;
    var $time = $("#timeInput");
    var v = $time.val();
    if($time.val() != s){
        console.log("updating time. " + h + ":" + m);
        $time.val(s);
    }
}

function formatTime(x){
    if(x<10){
        x = "0" + x;
    }
    return x;
}