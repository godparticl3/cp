const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-items');
  const navLinks = document.querySelectorAll('.nav-items li');

  navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      // e.preventDefault();
      burger.classList.toggle('toggle');
      nav.classList.toggle('nav-active');
      navLinks.forEach(setStyleLink)
    })
  });

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    // animate navlinks
    //navLinks.forEach(setStyleLink);
    // burger animation
    burger.classList.toggle('toggle');
    if(document.getElementsByTagName('body')[0].style.maxWidth != "fit-content")
    document.getElementsByTagName('body')[0].style.maxWidth = "fit-content";
    // else {
    //   document.getElementsByTagName('body')[0].style.maxWidth = null;
    // }
  });
}

function setStyleLink(el, index) {
  if (el.style.animation) {
    el.style.animation = ''
  } else {
    el.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 +0.5}s`;
  }
}
navSlide();
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
