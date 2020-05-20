$(document).ready(function () {
    $.getJSON("phpscripts/getCourses.php", success = function (data) {
        var list = "";

        for (var i = 0; i < data.length; i++) {
            list += "<option value ='" + data[i].toLowerCase() + "'>" + data[i] + "</option>";
        }
        $("#slctCourse").append(list);
    });
    $.getJSON("phpscripts/tutorSelect.php", success = function (data) {
        var list = "";

        for (var i = 0; i < data.length; i++) {
            list += "<option value ='" + data[i].toLowerCase() + "'>" + data[i] + "</option>";
        }
        $("#slctTutor").append(list);
    });
});

const notesBox = '<textarea placeholder="notes" class="notes">';
const timeOut = '<input type="time" class="timeOut">';
const submitButton = '<input type="image" src="https://img.icons8.com/ultraviolet/40/000000/edit.png" class="editButton"/>';
const editButton = '<input type="image" onclick="return checkOut(this);" src="https://img.icons8.com/ultraviolet/40/000000/checked-2.png" class="submitButton"/>';

var studentArray = [];

function reloadTable() { //deletes annd reloads html table.
    clearTable();
    studentArray.forEach(addToTable);

    $("textarea").blur(function () { //saves notes to array when cclicking out 
        var sName = $(this).closest("td").children("p").text();
        var sNotes = $(this).val();
        console.log($(this))
        saveNotes(sName, sNotes)
    });

    function clearTable() {
        $(".studentTable").find("tr").remove();
    }

    function addToTable(item) {
        var tableRow = "<tr><td class='studentRow'><p>" + item.name + "</p>" + notesBox + item.notes + "</textarea>" + timeOut + submitButton + editButton + "</td></tr>";
        var trTst = $(".studentTable tr:last");
        if ($(".studentTable tr:last").length !== 0) {
            $(".studentTable tr:last").after(tableRow);
        }
        else {
            $(".studentTable").append(tableRow);
        }
    }
}

function checkOut(domObject) { //called when check is clicked
    console.log("checkout clicked");
    //test = $(this).closest("td")
    var sName = $(domObject).closest("td").children("p").text();
    var student = studentArray.find(function (post, index) {
        if (post.name == sName) {
            return true;
        }
    });

    if (student != undefined) {
        console.log("checkout sending to database");
        sendToDatabase(student);
    }
}


function saveNotes(sName, note) {
    var student = studentArray.find(function (post, index) {
        if (post.name == sName) {
            return true;
        }
    });

    if (student != undefined) {
        student.notes = note
    }
}

function addStudent() {//called on form submit, adds student to list
    //getting all html objects needed
    var $getName = $("#studentName");
    var $getTime = $("#timeInput");
    var $getClass = $("#slctCourse");
    var $getTutor = $("#slctTutor");
    //checks if the student in question is already present
    var check = studentArray.find(function (post, index) {
        if (post.name == $getName.val()) {
            return true;
        }
    });
    if (check != undefined) {
        alert("Error: student's names must be unique");
        return;
    }


    var s = createStudentObject($getName.val(), $getTime.val(), $getClass.val(), $getTutor.val())
    studentArray.push(s);
    reloadTable()
}


function sendToDatabase(studentEvent) {
    console.log("sending: " + studentEvent.name)
    $.post("phpscripts/insertInfo.php",
        {
            student_Name: studentEvent.name,
            time_In: studentEvent.timeIn,
            class_name: studentEvent.course,
            time_Out: studentEvent.timeOut,
            notes: studentEvent.notes,
            tutor_name: studentEvent.tutor
        },
        function (data) {
            console.log(data
            )
        }
    );
}

function createStudentObject(name, timeIn, course, tutor) {
    return studentEvent = {
        name: name,
        timeIn: timeIn,
        course: course,
        timeOut: null,
        notes: "", //this is. the best. patch ever.
        tutor: tutor
    };
}