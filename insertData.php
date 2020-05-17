<?php
if(isset($_POST['submit'])) {
    $student_Name = $_POST['studentName'];
    $time_In = $_POST['timeIn'];
    $class_name = $_POST['className'];
    $time_Out = $_POST['timeOut'];
    $notes = $_POST['notes'];

    $link = mysqli_connect('localhost', 'Daniel', 'Dakotasmith1', 'testing');
    $sql = mysqli_query($link,"insert into student(id, student_Name, time_In, class_Name, time_Out, notes) values('','$student_Name', '$time_In', '$class_name', '$time_Out', '$notes')");

    if($sql){
        echo "Data sent successfully";
    }
    else{
        echo "Failed to send data";
    }
}

?>