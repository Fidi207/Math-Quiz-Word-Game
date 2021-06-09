player1_name = localStorage.getItem("Player1_Name");
player2_name = localStorage.getItem("Player2_Name");
player1_score = 0;
player2_score = 0;
Qturn= "p1";
Aturn= "p2";

document.getElementById("player1Name").innerHTML = player1_name +  ":";
document.getElementById("player2Name").innerHTML = player2_name +  ":";

document.getElementById("player_question").innerHTML = player1_name + ", Enter The Question";
document.getElementById("player_answer").innerHTML = player2_name + ", Enter The Answer";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;


function send(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    symbol=document.getElementById("symbool").value;
    numbers = num1 + "  " + symbol + "  " + num2;
    QQuestion= parseInt(num1) + symbol + parseInt(num2);
    console.log(eval(numbers));
    CorrectAnswer= eval(numbers);

    
    questionTag= "<h4 id='mathQuestion'>Q. " + numbers + "</h4> <br>";
    inputTag= "Answer. <input id='answer' type='text'> <br> <br>";
    buttonTag= "<button class= 'btn btn-danger' onclick='check()'>Check Answer</button>";

    row= questionTag+ inputTag+ buttonTag;
    document.getElementById("output").innerHTML= row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("symbol").value = "";
}

function check() {
    
    hi3= "<h3 id='frick' style= 'color: green'>Correct Answer!!</h3>";
    h3= "<h3 id='frack' style='color: red'>Wrong Answer! Try Again.</h3>"
    buttun= "<button id='buttn' class='btn btn-info' onclick='ok()'>OK</button>";
    endTug1= hi3 + buttun;
    endTug2= h3 + buttun;
    console.log("checked");
    userAnswer= document.getElementById("answer").value;
    userAnswer= userAnswer.toLowerCase();
    if (userAnswer == CorrectAnswer) {
        if (Aturn == "p1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML= player1_score;
        }
        else if(Aturn == "p2") {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML= player2_score;
        }
        document.getElementById("output").innerHTML= endTug1;
    }

    else if(userAnswer != CorrectAnswer) {
        if (Aturn == "p1") {
            document.getElementById("player1_score").innerHTML= player1_score;
        }
        else if(Aturn == "p2") {
            document.getElementById("player2_score").innerHTML= player2_score;
        }
        document.getElementById("output").innerHTML= endTug2;
   }
}

function ok(){
    if (Qturn == "p1") {
        Qturn = "p2";
        Aturn = "p1";
        document.getElementById("player_question").innerHTML = player2_name + ", Enter The Question";
        document.getElementById("player_answer").innerHTML = player1_name + ", Enter The Answer";
    }
    else if(Qturn == "p2") {
        Qturn= "p1";
        Aturn= "p2";
        document.getElementById("player_question").innerHTML = player1_name + ", Enter The Answer";
        document.getElementById("player_answer").innerHTML = player2_name + ", Enter The Question";
    }
    document.getElementById("output").innerHTML= "";
}