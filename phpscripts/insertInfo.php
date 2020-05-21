<?php
require "opendb.php";// opens the database 

if(isset($_POST['student_Name'])) {//gets the information from the sendToDatabase function then Posts it to the database
    $student_Name = $_POST['student_Name'];
    $time_In = $_POST['time_In'];
    $course_name = $_POST['class_Name'];
    $time_Out = $_POST['time_Out'];
    $notes = $_POST['notes'];
    $tutor_name = $_POST['tutorName'];

    $update_help ="UPDATE tutor SET days_worked = days_worked + 1 WHERE tutor_name ='$tutor_name'";
    $data = mysqli_query($link,$update_help);
    
    $sql = mysqli_query($link,"insert into student(id, student_Name, time_In, course_Name, time_Out, notes) values('','$student_Name', '$time_In', '$course_name', '$time_Out', '$notes')");

    if($sql){// these were testing commands to see if data was being sent before final intergrtation of our code
        echo "Data sent successfully";
    }
    else{
        echo "Failed to send data";
    }
}
header("refresh:2, url=../main.html");//test to refresh the page after the success or fail of data being sent
?>