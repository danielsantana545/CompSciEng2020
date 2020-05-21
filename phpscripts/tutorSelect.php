<?php
    require "opendb.php";
    $sql ="SELECT tutor_name FROM tutor"; // sql command to retrive the data from the specified column and table
    $data = mysqli_query($link,$sql);

    $retrive = array();
    while($row =mysqli_fetch_array($data)){// creates an array from the data retrived
        array_push($retrive, $row["tutor_name"]);
    }
    echo json_encode($retrive);
    require "closedb.php";
?>