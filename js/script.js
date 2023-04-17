function showIt() {
    document.getElementById("hid").style.visibility = "visible";
  }
setTimeout("showIt()", 1000); // after 3 seconds

function hideDiv() {
  var x = document.getElementById("hid");
  if (x.style.visibility == "visible") {
    x.style.visibility = "hidden";
  }
}

window.onload = function() {
  var titles = [
  'Minkälainen on asuinpaikkasi?', 
  'Montako varvasta on koiralla?', 
  'Minkälaisia vanhempasi ovat?',
  'Tähän tulisi lisää kysymyksiä!'
  ];
  var random = titles[Math.floor(Math.random() * titles.length)];
  document.getElementById("kysymys").innerText = random;
}