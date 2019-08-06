
var randomNumber1=Math.random();
randomNumber1=randomNumber1 * 6;
randomNumber1=Math.floor(randomNumber1) + 1;

var imgg="images/dice" + randomNumber1 + ".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", imgg);


var randomNumber2=Math.random();
randomNumber2=randomNumber2 * 6;
randomNumber2=Math.floor(randomNumber2) + 1;

var imgg="images/dice" + randomNumber2 + ".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", imgg);


if(randomNumber1>randomNumber2)
{
document.querySelector("h1").innerHTML="player one wins!!!!🏁";
}

else if(randomNumber1<randomNumber2)
{
document.querySelector("h1").innerHTML="player two wins!!!!🏁";
}

else{
  document.querySelector("h1").innerHTML="its a tie!!!🏁";
}
