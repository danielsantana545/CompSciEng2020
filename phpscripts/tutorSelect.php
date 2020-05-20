<?php
    require "opendb.php";
    $sql ="SELECT tutor_name FROM tutor";
    $data = mysqli_query($link,$sql);

    $retrive = array();
    while($row =mysqli_fetch_array($data)){
        array_push($retrive, $row["tutor_name"]);
    }
    echo json_encode($retrive);
    require "closedb.php";
?>