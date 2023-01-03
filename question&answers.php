<?php include './classes/databse.class.php';?>

<?php 

          
            $database = new database();
            $db = $database->openConnection();

        $data = array();
        $option = array();
       

//query counts the length of the questions 
      $stmt = $db->query("SELECT count(*) FROM questions");
      $questionLength =$stmt->fetchColumn();


//loop brings the questions and the answers and the correct answer 
        for($i=1;$i<=$questionLength;$i++){
           
          $answer_obj = array();
          $quistionnum=$i;
            
            $stm = $db->query("SELECT * FROM questions where question_number = $quistionnum  and quiz_name= 'php' ");
          
            while ($row = $stm->fetch()) {
              
                 $q= $row['question_text'];
                $answer_obj["q"] = $q ;
              
            }

           
            $stm = $db->query("SELECT * FROM options where question_number =$quistionnum and quiz_name= 'php' ");
            $answer_array_index = 0;
            while ($row = $stm->fetch()) {

                            
                 $optionid[$answer_array_index] = $row['id'];
                $option[$answer_array_index] = $row['coption'];
                $answer_array_index++;


            }

  
            $answer_obj["option"] = $option;
            $answer_obj["optionId"] = $optionid;

            $data[] = $answer_obj;
 
            }

           

            

            echo json_encode($data);

 
?>

  