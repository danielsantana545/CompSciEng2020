const notes = '<input type="text" class="notes">';
const timeOut = '<input type="time" class="timeOut">';
const submitButton = '<input type="image" src="https://img.icons8.com/ultraviolet/40/000000/edit.png" class="editButton"/>';
const editButton = '<input type="image" src="https://img.icons8.com/ultraviolet/40/000000/checked-2.png" class="submitButton"/>';


var priorTime = null;//used for allowing the user to edit the time
var studentArray = [];

$(document).ready(function () {
    reloadTable();
    //define interval function
    document.getElementById("timeInput").value = "00:01";
    updateTime();
    setInterval(function () { updateTime() }, 10000);
});

function timeEdit() {//called when user manual changes time
    priorTime = getCurrentTime();
}

function updateTime() { //updates the time on the checkin time
    var s = getCurrentTime();
    var $time = $("#timeInput");
    var v = $time.val();
    if (priorTime !== null) { //this block keeps the update from undoing manual edits
        if (priorTime != s) {
            console.log("updating time. " + s);
            $time.val(s);
            priorTime = null; //setting priorTime to null
        }
    }
    else if ($time.val() != s) {
        console.log("updating time. " + s);
        $time.val(s);
    }
}

function getCurrentTime() { //returns current 24 hour time as hh:mm
    function formatTime(x) { //makes sure all times are 2 digit stings
        if (x < 10) {
            x = "0" + x;
        }
        return x;
    }

    var d = new Date();
    var h = formatTime(d.getHours());
    var m = formatTime(d.getMinutes());
    return h + ":" + m;
}

function reloadTable() {
    clearTable();
    studentArray.forEach(addToTable);

    function clearTable() {
        $(".studentTable").find("tr").remove();
    }

    function addToTable(item) {
        var tableRow = "<tr><td class='studentRow'><p>" + item.name + "</p>" + notes + timeOut + editButton + submitButton + "</td></tr>";
        var trTst = $(".studentTable tr:last");
        if ($(".studentTable tr:last").length !== 0) {
            $(".studentTable tr:last").after(tableRow);
        }
        else {
            $(".studentTable").append(tableRow);
        }

    }
}

function createStudentObject(name, timeIn, course) {
    return studentEvent = {
        name: name,
        timeIn: timeIn,
        course: course,
        timeOut: null,
        notes: null
    };
}