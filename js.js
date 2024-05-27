var acc = document.getElementsByClassName("accordion");
var i;
var arrow = document.getElementsByClassName("arrow");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* acc.onclick = function() {
    arrow.style.transform = 'rotate(90deg)'
} */
