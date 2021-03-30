"use strict";

const btns = document.querySelectorAll(".color");
const bike = document.querySelector(".ducati");

function changeBike(image) {
  for (let i = 0; i < btns.length; i++) {
    btns[i].disabled = true;

    bike.classList.remove("drive");
    bike.classList.add("drive2");

    const loadTime = window.setTimeout(() => {
      bike.classList.add("drive3");

      const loadTime = window.setTimeout(() => {
        bike.classList.remove("drive2");
        bike.classList.remove("drive3");
        bike.style.transition = "left 1s";
        bike.classList.add("active");

        const loadTime = window.setTimeout(() => {
          bike.style.transition = "";
          btns[i].disabled = false;
        }, 1000);
      }, 300);
    }, 300);

    bike.style.backgroundImage = image;
  }
}

btns.forEach(btn => {
  btn.disabled = false;
  btn.addEventListener("click", e => {
    for (let i = 0; i < btns.length; i++) {
      if (btns[i].classList.contains("active")) {
        btns[i].classList.remove("active");
      }
      btn.classList.add("active");
      bike.classList.add("drive");
      const loadTime = window.setTimeout(() => {
        if (e.target.classList.contains("black")) {
          changeBike("url(img/black_ducati.png)");
        } else if (e.target.classList.contains("red")) {
          changeBike("url(img/red_ducati.png)");
        } else if (e.target.classList.contains("white")) {
          changeBike("url(img/white_ducati.png)");
        }
      }, 500);
    }
  });
});
