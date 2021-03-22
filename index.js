document.querySelector("h1").style.color = "red";
var JamesNumber = (Math.floor(Math.random() * 6) + 1);
var MaryNumber = (Math.floor(Math.random() * 6) + 1);

if (JamesNumber === 1) {
  document.querySelector(".imgJ").setAttribute("src", "images/dice1.png");
}
if (JamesNumber === 2) {
  document.querySelector(".imgJ").setAttribute("src", "images/dice2.png");
}
if (JamesNumber === 3) {
  document.querySelector(".imgJ").setAttribute("src", "images/dice3.png");
}
if (JamesNumber === 4) {
  document.querySelector(".imgJ").setAttribute("src", "images/dice4.png");
}
if (JamesNumber === 5) {
  document.querySelector(".imgJ").setAttribute("src", "images/dice5.png");
}
if (JamesNumber === 6) {
  document.querySelector(".imgJ").setAttribute("src", "images/dice6.png");
}

if (MaryNumber === 1) {
  document.querySelector(".imgM").setAttribute("src", "images/dice1.png");
}
if (MaryNumber === 2) {
  document.querySelector(".imgM").setAttribute("src", "images/dice2.png");
}
if (MaryNumber === 3) {
  document.querySelector(".imgM").setAttribute("src", "images/dice3.png");
}
if (MaryNumber === 4) {
  document.querySelector(".imgM").setAttribute("src", "images/dice4.png");
}
if (MaryNumber === 5) {
  document.querySelector(".imgM").setAttribute("src", "images/dice5.png");
}
if (MaryNumber === 6) {
  document.querySelector(".imgM").setAttribute("src", "images/dice6.png");
}
