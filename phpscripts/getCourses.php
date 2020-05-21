<?php
// gets the course/class name from the database and call for by the javascript file to display these course as a select box 
    require "opendb.php";


    $sql ="SELECT courseName FROM course"; // sql command to retrive specified column and table
    $data = mysqli_query($link,$sql);

    $retrive = array();
    while($row =mysqli_fetch_array($data)){// pushes the data to an array
        array_push($retrive, $row["courseName"]);
    }

    echo json_encode($retrive);
    require "closedb.php";//closes communication from the database to the phpscript
?>