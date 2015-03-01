var refresh = function(divName) {
  if (window.innerWidth > 990) {
    var h = window.innerHeight;
    var element = document.getElementById(divName);
    element.style.height = Math.max(h - 71, 550) + "px";
  } else {
    var element = document.getElementById(divName);
    element.style.height = "750px"
  }
};
var resizeUpcoming = function() {
  document.getElementById("upcomingBody").style.backgroundSize = window.innerHeight + 70 + "px"
};
var adjustSize = function() {
  refresh("homeBody");
  refresh("demoBody");
  refresh("upcomingBody");
  refresh("aboutBody");
  refresh("contactBody");
  resizeUpcoming();
}

window.onresize = function(event) {
  adjustSize();
}
adjustSize();
