<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style/main.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

    <title>Document</title>
</head>

<body>
    <header>
        <img src="./images/icons8-php-logo-160.png" alt="">
        <h1>php game quiiz</h1>

    </header>
    <main>
        <section class="container1">
            <h2>About</h2>
            <p>hello ,dear visiter this Quiz will test your php knowlege it will cover all the parts from (varibles,
                loops ,condotions...) as well as object orianted programing i hope youll enjoy it and if you are not
                ready i really advice you to take a look at our tutorial site, thank you .</p>
        </section>

        <section class="midelbox">

            <div class="user-name nameinputbox">

                <h2>to start the test you should first enter your name </h2>
                <form class="form " action="./quizPage.php" method="post">
                    <input type="text" name="fullname" id="domTextElement"  class="form__field" placeholder="Enter your full name please " />
                    <button type="button" onclick="showStart();"
                        class="btn btn--primary btn--inside uppercase" >Send</button>
                </form>

            </div>


            <div class=" quiz-start hide ">

                <button class="example_g"  type="button"><a href="quizPage.php"> Click here to
                        Start!</a></button>
                <img src="./images/Customer Survey-rafiki.svg" alt="">
               

            </div>

        </section>

        <section class="container2">
            <h2>game rules</h2>
            <ul>
                <li>you have to anser all the quistions</li>
                <li>if you pass 30s your anser will count fals</li>
                <li>you may have one or more than one right anser </li>
                <li>the resault at the end </li>
            </ul>
        </section>
        
    </main>

    <footer>

        <div class="row">
            <div class="col-xs-12 col-md-8 offset-md-2 block border">
                <div class="wrapper-progressBar">
                    <ul class="progressBar">
                        <li class="active">Informations</li>
                        <li class="">Quistions</li>
                        <li>Resault</li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>
   
     <script src="js/app.js"></script>

</body>


</html>