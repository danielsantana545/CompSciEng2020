<?php

    $server = ""; // change the name for your server
    $user = ""; // change the user to match your user
    $password = "";// change the password to match users password
    $db = "";// change to mathch you database/schema

    $link = mysqli_connect($server, $user, $password, $db);
    if($link->connect_error){
        die("Connection Failed: " . $link->connect_error);// throws error notification to say that the connection failed
    }
    else{
        echo "connection successful"; // if connection is successful
    }
    // writing query
    //$sql = 'SELECT * FROM students'

   //make the query and retirve results
   // $result = mysqli_query($conn, $sql);

    // gets the results from the rows call for
   // $students = mysql_fectch_all($result, MYSQLI_ASSOC);

    //print out
   // print_r($pizzas);


    /*$conn = mysqli_connect('localhost','Daniel', 'Dakotasmith1', 'Testing');
    if(!$conn){
        echo 'Connection Failed: ' . mysqli_connect_error();

    }
    else{
        echo 'Connection Successful';
    }
*/

?>