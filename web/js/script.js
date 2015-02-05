var refresh = function() {
  var h = window.innerHeight;
  var element = document.getElementById("main");
  element.style.height = h - 30 + "px";

  //var title = document.getElementById("title");
  //title.style.marginTop = (h - 200)/2 + "px";
};
refresh();

window.onresize = function(event) {
  refresh();
}
