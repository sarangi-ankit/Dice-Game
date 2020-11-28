var randomnumber1=Math.floor(Math.random()*6)+1;
var image1source="images/dice" +randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src" , image1source);

var randomnumber2=Math.floor(Math.random()*6)+1;
var image2source="images/dice" +randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src" , image2source);








if (randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="Player 1 won";
}

else if (randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML="player 2 won";
}
else{
    document.querySelector("h1").innerHTML="draw";
}
