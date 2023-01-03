<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href=" styleQuiz/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    
    <title>Document</title>
</head>
<body>
 
    <header>

        <div class="quistionsCounter">
            <p class="qustion-number"></p>
  
        </div>

        <img src="./images/icons8-php-logo-160.png" alt="">

        <div class="timeCounter">
        <p>⏱️<span id="timer">0 s</span></p>
        </div>
  

    </header>
    

    <main class="quiz-Box ">

        <h1 class="qustion-text"></h1>

        <div class="sectionCarts option-container">
        
       </div>

       <div class="answers-indicator">

       </div>
   
    </main >
    
    
    <main class="result-Box hide">

    <?php 
    include "./classes/user.class.php";
          username();
    ?>


        <div class="result">
            <p><?php echo 'full name:'.$_SESSION['fullname']; ?></p>
            <p>total score: <span class="total-score"></span></p>
            <p>percentage: <span class="total-percentage"></span></p>
            <p>feedback: <span class="feedback"></span></p>
            <p>correct answers: <span class="total-correct"></span></p>
            <p>wrong answers: <span class="total-wrong"></span></p>
          
            <button class="btn" type="button"  ><h3><a href="first.php">start over</a></h3></button>   
        </div>
        
    </main>
   
    <footer>
        <div class="row">
            <div class="col-xs-12 col-md-8 offset-md-2 block border">
                <div class="wrapper-progressBar">
                    <ul class="progressBar">
                        <li class="active">Informations</li>
                        <li class="active">Quistions</li>
                        <li id="Resault">Resault</li>
                    </ul>
                </div>
            </div>
        </div> 
    </footer>

 <script src="js/app.js"></script>
 

 
</body>
</html>