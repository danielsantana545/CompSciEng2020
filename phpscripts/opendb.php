<?php
    require "dbconfig.php";
    //opens the connection to the specified database
    $link = mysqli_connect($server, $user, $password, $db) or die("Failed Connection");
    
 ?>
