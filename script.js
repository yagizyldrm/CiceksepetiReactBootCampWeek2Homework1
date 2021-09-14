function myFunction() {
    var x = document.getElementById("saydbar");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.transitionTimingFunction= "ease-in";
      x.style.transitionDuration= "4s"
    } else {
      x.style.display = "none";
      x.style.transitionTimingFunction= "ease-out";
      x.style.transitionDuration= "4s"
    }
  }