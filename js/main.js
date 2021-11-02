let body = document.querySelector("body"),
menu = document.querySelector(".menu"),
nav = document.querySelector("nav"),
menuUl = document.querySelector(".menu ul"),
header = document.querySelector(".header"),
buttons = document.querySelector(".buttons"),
menuButton = document.querySelector(".menu__button"),
menuButtonClose = document.querySelector(".menu__button-close");

window.addEventListener('resize', function() { //updating by width screen
  let width = window.innerWidth;
  if (width > 860) {   
    menuUl.style.display="flex";    
    header.append(buttons);
    nav.style.display="block";
  }
  if (width < 860) {
    menuUl.style.display="block";
    menu.append(buttons);
  } 
});

document.onreadystatechange = () => {
  menuButton.onclick=function(e){
    e.preventDefault();
    menuButton.classList.toggle("active");
    menu.classList.toggle("overlay");
    body.classList.toggle("main__scroll");
    menuButton.classList.toggle("menu__button-close");
    menuUl.classList.toggle("active");
    nav.classList.toggle("active");
    nav.style.display="block";
    menu.append(buttons);
    buttons.classList.toggle("active");
  }

  if(menuButton.classList.toggle("menu__button-close")){
    menuButton.classList.toggle("active", false);
    menu.classList.toggle("overlay", false);
    body.classList.toggle("main__scroll", false);
    menuButton.classList.toggle("menu__button-close", false);
    menuUl.classList.toggle("active", false);
    nav.classList.toggle("active", false);
    nav.style.display="inherit";
    header.append(buttons);
    buttons.classList.toggle("active", false);
  }

};


