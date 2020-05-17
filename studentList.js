const notes = '<textarea placeholder="notes" class="notes"></textarea>';
const timeOut = '<input type="time" class="timeOut">';
const submitButton = '<input type="image" src="https://img.icons8.com/ultraviolet/40/000000/edit.png" class="editButton"/>';
const editButton = '<input type="image" src="https://img.icons8.com/ultraviolet/40/000000/checked-2.png" class="submitButton"/>';

var studentArray = [];

$(document).ready(function(){
    studentArray.push(createStudentObject("pisswank","07:33","database"));
    studentArray.push(createStudentObject("alpha nerd","07:33","database"));
    studentArray.push(createStudentObject("rojer","07:33","database"));
    reloadTable();
});



function reloadTable(){
    clearTable();
    studentArray.forEach(addToTable);

    function clearTable(){
        $(".studentTable").find("tr").remove();
    }

    function addToTable(item){
        var tableRow = "<tr><td class='studentRow'><p>" + item.name + "</p>" + notes + timeOut + editButton + submitButton + "</td></tr>";
        var trTst = $(".studentTable tr:last");
        if($(".studentTable tr:last").length !== 0){
            $(".studentTable tr:last").after(tableRow);
        }
        else {
            $(".studentTable").append(tableRow);
        }
        
    }
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

function sendToDatabase(studentEvent){
    $.post("insertInfo.php",
        {
            student_Name: studentEvent.name,
            time_In : studentEvent.timeIn,
            class_name : studentEvent.course,
            time_Out : studentEvent.timeOut,
            notes : studentEvent.notes
        },
        function(data) {
           console.log(data
            )
        }
     );
}


