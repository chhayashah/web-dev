<?php

    $SERVER_URL = "localhost";
    $USERNAME = "root";
    $PASSWORD = "";
    $DB_NAME = "ev_axis";

    $conn = mysqli_connect($SERVER_URL, $USERNAME, $PASSWORD, $DB_NAME) or die("Unable to connect to database");

    if(isset($_POST['submit'])) {
        $username = $_POST['uname'];
        $pass = $_POST['psw'];

        if(empty($username) || empty($pass)) {
            echo "Invalid Username/Password";
            exit(0);
        }

        $qry = "SELECT * FROM users WHERE username='$username' AND password='$pass'";
        $sendToDb = mysqli_query($conn, $qry);

        if($sendToDb) {
            $count = mysqli_num_rows($sendToDb);

            if($count <= 0) {
                $qry2 = "INSERT INTO users VALUES ('', '$username', '$pass')";
                $sendToDb2 = mysqli_query($conn, $qry2);
                if($sendToDb2) {
                    echo "Registeration Successful";
                }
                else {
                    echo "Some error occured";
                }
            }
            else {
                echo "Already Registered";
            }
        }
    }
?>