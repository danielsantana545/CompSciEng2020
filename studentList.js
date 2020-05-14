var priorTime = null;//used for allowing the user to edit the time

$(document).ready(function(){
    //define interval function
    document.getElementById("timeInput").value = "00:01";
    updateTime();
    setInterval(function(){updateTime()},10000);
});

function timeEdit(){//called when user manual changes time
    priorTime = getCurrentTime();
}

function updateTime(){ //updates the time on the checkin time
    var s = getCurrentTime();
    var $time = $("#timeInput");
    var v = $time.val();
    if(priorTime !== null){ //this block keeps the update from undoing manual edits
        if(priorTime != s){
            console.log("updating time. " + s);
            $time.val(s);
            priorTime = null; //setting priorTime to null
        }
    }
    else if($time.val() != s){
        console.log("updating time. " + s);
        $time.val(s);
    }
}

function getCurrentTime(){ //returns current 24 hour time as hh:mm
    function formatTime(x){ //makes sure all times are 2 digit stings
        if(x<10){
            x = "0" + x;
        }
        return x;
    }

    var d = new Date();
    var h = formatTime(d.getHours());
    var m = formatTime(d.getMinutes());
    return h + ":" +m;
}

function createStudentObject(name, timeIn, course){
    return studentEvent = {
        name:name,
        timeIn:timeIn,
        course:course,
        timeOut:null,
        notes:null
    };
}


