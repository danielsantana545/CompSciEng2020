<?php

    require "opendb.php";


    $sql ="SELECT courseName FROM course";
    $data = mysqli_query($link,$sql);

    $retrive = array();
    while($row =mysqli_fetch_array($data)){
        array_push($retrive, $row["courseName"]);
    }

    echo json_encode($retrive);
    require "closedb.php";
?>