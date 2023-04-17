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
