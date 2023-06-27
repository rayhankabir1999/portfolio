window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 0) {
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

document.getElementById("scrollBtn").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
