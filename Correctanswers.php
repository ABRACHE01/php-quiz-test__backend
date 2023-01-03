<?php include './classes/databse.class.php';?>

<?php 
          
    $database = new database();
    $db = $database->openConnection();



//query counts the length of the questions 
$stmt = $db->query("SELECT count(*) FROM questions");
$questionLength =$stmt->fetchColumn();


//loop brings the questions and the answers and the correct answer 
for($i=1; $i<=$questionLength ;$i++){
    $database = new database();
    $db = $database->openConnection();
    $stm = $db->query("SELECT * FROM options where is_correct =1 and question_number=  $i");
    $row = $stm->fetch();
   
     $answers[] =  $row['id'] ;

     
}

echo json_encode($answers); 


          
?>


