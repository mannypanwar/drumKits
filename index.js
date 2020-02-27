for (i = 0; i <= 6; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
function handleClick() {
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
}
