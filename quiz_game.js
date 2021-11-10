var player1_score = 0;
var player2_score = 0;
var question_turn = localStorage.getItem("player1_name1");
var answer_turn = localStorage.getItem("player2_name1");
var player1_name = question_turn;
var player2_name = answer_turn;

function update() {
    document.getElementById("player1_name").innerHTML=localStorage.getItem("player1_name1") + ":";
    document.getElementById("player2_name").innerHTML=localStorage.getItem("player2_name1") + ":";
    document.getElementById("player1_score").innerHTML=player1_score;
    document.getElementById("player2_score").innerHTML=player2_score;
    document.getElementById("qturn").innerHTML=player1_name;
    document.getElementById("aturn").innerHTML=player2_name;
}

function send() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    if((n1.length >= 1) && (n2.length >= 1)) {
        document.getElementById("content").innerHTML='<h4 id="Question">' + n1 + ' × ' + n2 + '</h4><br><p>Answer:<span><input type="number" id="ans"></span></p><br><button class="btn btn-info" onclick="check()">Check</button>';
        document.getElementById("n1").value="";
        document.getElementById("n2").value="";
    }
    else if((n1.length < 1) && (n2.length >= 1)){
        window.alert("Multiplicand is missing.");
    }
    else if((n2.length < 1) && (n1.length >= 1)){
        window.alert("Multiplier is missing.");
    }
    else if((n1.length < 1) && (n2.length < 1)){
        window.alert("Boxes are empty. You are requested to fill them.");
    }
}

function check() {
    var answer = document.getElementById("ans").value;

    if(answer.length >= 1) {
        
    }
    else if(answer.length < 1){
        window.alert("Please write your answer on the box.");
    }
}