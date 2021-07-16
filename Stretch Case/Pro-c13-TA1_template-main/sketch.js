//enter an letter and check whether it's a vowel or not
var input
var heading

function setup() 
{
  createCanvas(400, 400);
  //taking input from the player
  input = createInput()
  input.position(5,80)
  heading = createElement("h4","enter any letter from the alphabet")
  heading.position(5,40)
  textAlign(CENTER)
}

function draw() {
  background(178,255,102);
  var value = input.value()

//creating a switch case
switch(value)
{
case "a" :
console.log("vowel")  
break ;

case "e" :
console.log("vowel")
break ;

case "i" :
console.log("vowel")
break ;

case "o" :
console.log("vowel")
break ;

case "u" :
console.log("vowel")
break ;
default :
console.log("not a vowel, try again")
break ;
}
}

