function codepen() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);


  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
window.addEventListener("load", () => {
  codepen();
})


function brandids() {
  gsap.from(".brandids img", {
    stagger: 0.8,
    duration: 2,
    y: 100,
    opacity: 0,
  })
}

window.addEventListener("load", () => {
  brandids();
})
var flag = 1;

function mainAnimation() {
  var box1 = document.querySelector(".box1");
  var img1 = document.querySelector(".box1 img");

  var box2 = document.querySelector(".box2");
  var img2 = document.querySelector(".box2 img");

  var box3 = document.querySelector(".box3");
  var img3 = document.querySelector(".box3 img");

  var box4 = document.querySelector(".box4");
  var img4 = document.querySelector(".box4 img");

  var box5 = document.querySelector(".box5");
  var img5 = document.querySelector(".box5 img");

  img1.addEventListener("click", () => {
    if (flag == 1) {
      box1.style.width = "85vw";
      img1.style.width = "85vw";
      img1.style.zIndex = "90";
      img1.style.position = "absolute";
      img2.style.transform = "scale(0)";
      img3.style.transform = "scale(0)";
      img4.style.transform = "scale(0)";
      img5.style.transform = "scale(0)";
      flag = 0;
    } else {
      box1.style.width = "17vw";
      img1.style.width = "17vw";
      img1.style.zIndex = "0";
      img1.style.position = "static";
      img2.style.transform = "scale(1)";
      img3.style.transform = "scale(1)";
      img4.style.transform = "scale(1)";
      img5.style.transform = "scale(1)";
      flag = 1;
    }
  });



  img2.addEventListener("click", () => {
    if (flag == 1) {
      box2.style.width = "85vw";
      img2.style.width = "85vw";
      img2.style.zIndex = "90";
      img2.style.position = "absolute";
      img1.style.transform = "scale(0)";
      img3.style.transform = "scale(0)";
      img4.style.transform = "scale(0)";
      img5.style.transform = "scale(0)";
      img2.style.left = "7vw"
      flag = 0;
    } else {
      box2.style.width = "17vw";
      img2.style.width = "17vw";
      img2.style.zIndex = "0";
      img2.style.position = "static";
      img1.style.transform = "scale(1)";
      img3.style.transform = "scale(1)";
      img4.style.transform = "scale(1)";
      img5.style.transform = "scale(1)";
      flag = 1;
    }
  });


  img3.addEventListener("click", () => {
    if (flag == 1) {
      box3.style.width = "85vw";
      img3.style.width = "85vw";
      img3.style.zIndex = "90";
      img3.style.position = "absolute";
      img1.style.transform = "scale(0)";
      img2.style.transform = "scale(0)";
      img4.style.transform = "scale(0)";
      img5.style.transform = "scale(0)";
      img3.style.left = "7vw"
      flag = 0;
    } else {
      box3.style.width = "17vw";
      img3.style.width = "17vw";
      img3.style.zIndex = "0";
      img3.style.position = "static";
      img1.style.transform = "scale(1)";
      img2.style.transform = "scale(1)";
      img4.style.transform = "scale(1)";
      img5.style.transform = "scale(1)";
      flag = 1;
    }
  });


  img4.addEventListener("click", () => {
    if (flag == 1) {
      box4.style.width = "85vw";
      img4.style.width = "85vw";
      img4.style.zIndex = "90";
      img4.style.position = "absolute";
      img1.style.transform = "scale(0)";
      img2.style.transform = "scale(0)";
      img3.style.transform = "scale(0)";
      img5.style.transform = "scale(0)";
      img4.style.left = "7vw"
      flag = 0;
    } else {
      box4.style.width = "17vw";
      img4.style.width = "17vw";
      img4.style.zIndex = "0";
      img4.style.position = "static";
      img1.style.transform = "scale(1)";
      img2.style.transform = "scale(1)";
      img3.style.transform = "scale(1)";
      img5.style.transform = "scale(1)";
      flag = 1;
    }
  });



  img5.addEventListener("click", () => {
    if (flag == 1) {
      box5.style.width = "85vw";
      img5.style.width = "85vw";
      img5.style.zIndex = "90";
      img5.style.position = "absolute";
      img1.style.transform = "scale(0)";
      img2.style.transform = "scale(0)";
      img3.style.transform = "scale(0)";
      img4.style.transform = "scale(0)";
      img5.style.left = "7vw"
      flag = 0;
    } else {
      box5.style.width = "17vw";
      img5.style.width = "17vw";
      img5.style.zIndex = "0";
      img5.style.position = "static";
      img1.style.transform = "scale(1)";
      img2.style.transform = "scale(1)";
      img3.style.transform = "scale(1)";
      img4.style.transform = "scale(1)";
      flag = 1;
    }
  });
}

mainAnimation();

function boxcrsr() {
  var container = document.querySelector(".container");
  container.addEventListener("mouseenter", () => {
    var circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.borderRadius = "50%";
    circle.style.height = "9vh";
    circle.style.width = "9vh";
    circle.style.opacity = 0.5;
    circle.style.color = "#fff";
    circle.style.backgroundColor = "red";
    circle.style.position = "absolute";
    circle.style.zIndex = "99";
    circle.style.display = "flex";
    circle.style.alignItems = "center";
    circle.style.justifyContent = "center";

    var heading = document.createElement("h3");
    heading.textContent = "Click";
    circle.appendChild(heading);
    container.appendChild(circle);

    container.addEventListener("mousemove", (event) => {
      var rect = container.getBoundingClientRect();
      circle.style.left = event.clientX - rect.left + container.scrollLeft + "px";
      circle.style.top = event.clientY - rect.top + container.scrollTop + "px";
      circle.style.transform = "translate(50%,-20%)";
    });
    container.addEventListener("mouseleave", () => {
      if (circle) {
        circle.remove();
      }
    })
  });
}

boxcrsr();


let tag = 0;

function screen() {
  const screen = document.querySelector(".display");
  const btnl = document.querySelector(".left button");
  const btnr = document.querySelector(".right button");
  const images = [
    document.querySelector(".display #img1"),
    document.querySelector(".display #img2"),
    document.querySelector(".display #img3"),
    document.querySelector(".display #img4"),
    document.querySelector(".display #img5")
  ];

  btnr.addEventListener("click", () => {
    if (tag < images.length - 1) {
      images[tag].style.transform = "scale(0)";
      images[tag + 1].style.transform = "scale(1)";
      tag++;
    }
  });

  btnl.addEventListener("click", () => {
    if (tag > 0) {
      images[tag].style.transform = "scale(0)";
      images[tag - 1].style.transform = "scale(1)";
      tag--;
    }
  });
}

screen();



