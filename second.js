var score1=0;
var score2=0;
var player1;
var player2;
player1= localStorage.getItem("player1");
console.log(player1);
player2= localStorage.getItem("player2");
console.log(player2);
document.getElementById("question").innerHTML="Question Turn-"+player1;
document.getElementById("answer").innerHTML="Answer Turn-"+player2;
document.getElementById("player1name").innerHTML=player1+":"+score1;
document.getElementById("player2name").innerHTML=player2+":"+score2;

function send(){
    var word= document.getElementById("Your_word").value;
    var lowercase_word= word.toLowerCase();
    var word_length= Math.floor(lowercase_word.length/2)
    var index= word_length+2;
    var first= lowercase_word.charAt(index);
    var first1=lowercase_word.replace(first,"_");
    console.log(first1);
    var second= lowercase_word.charAt(1);
    var second1= first1.replace(second,"_");
    console.log(second1)
    var third= lowercase_word.charAt(word_length);
    var third1= second1.replace(third,"_")
    console.log(third1);
}