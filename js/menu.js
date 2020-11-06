window.onload = function menuF() {
var menu = document.getElementById('myTopnav');
menu.onclick = function myFunction() {
 if (menu.className === 'topnav') {
  menu.className += ' responsive';
  document.getElementById("menu").style.color = "black";
 } else {
  menu.className = 'topnav';
	document.getElementById("menu").style.color = "white";
 }
}

}