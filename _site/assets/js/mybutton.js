const mybutton = document.getElementById("myBtn");

// show/hide button
function scrollFunction() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 30) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}

window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", scrollFunction);

// scroll to top on click
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


