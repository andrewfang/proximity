$(document).ready(function() {
  adjustSize();
  initScrollTo();
  if (window.location.pathname != "/") {
    doScrollTo(window.location.pathname.substring(1));
  }
});
var refresh = function(divName) {
  if (window.innerWidth > 990) {
    var h = window.innerHeight;
    var element = document.getElementById(divName);
    element.style.height = Math.max(h - 71, 550) + "px";
  } else {
    var element = document.getElementById(divName);
    element.style.height = "600px"
  }
}

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

var initScrollTo = function() {
  var navbuttons = $(".navbutton");
  for (idx in navbuttons) {
    id = navbuttons[idx].id;
    $("#" + id).click(function(event) {
      event.preventDefault();
      doScrollTo(this.id.substring(3));
    });
  }
}

var doScrollTo = function(destination) {
  $('html, body').animate({
      scrollTop: $("#" + destination).offset().top
  }, 1000);
  history.replaceState(null, null, destination);
}
