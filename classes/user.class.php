<?php 

 function username(){
        // starting the session
    session_start();

    $_SESSION['fullname']= " name undifined";

    if (isset($_POST['fullname'])){ 
    if($_POST['fullname'] != ''){
        $_SESSION['fullname'] = $_POST['fullname'];            
    }

    $_SESSION['fullname'] = $_SESSION['fullname'];    
    }

    

}



   


