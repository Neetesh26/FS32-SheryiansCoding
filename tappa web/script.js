const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

gsap.from('#nav , .nav-left img , .nav-right img , .nav-right h3', {
  duration: 1,
  stagger: 0.3,
  y: -100,
  opacity: 0,
  ease: 'power2.out'
});
gsap.from('.title p', {
  duration: 2.5,
  stagger: 0.3,
  y: 10,
  opacity: 0,
  ease: 'power2.out'
});
gsap.from('.title .buttons, h4 , i', {
  duration: 2.5,
  stagger: 0.3,
  y: 10,
  opacity: 0,
  ease: 'power2.out'
});
gsap.from('.image-cont img', {
  duration: 2,
  stagger: 0.3,
  scale: 0.6,
  // y: 10,
  opacity: 0,
  // ease: 'power2.out'
});


Shery.textAnimate(".title h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  //   delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

// scroll()

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
main.addEventListener("mousemove", function (pro) {
  crsr.style.left = pro.x + 8 + "px"; //cursor distance form circle 10
  crsr.style.top = pro.y + 5 + "px";
});


// var imgCont = document.querySelector(".image-cont img ");
// // var main = document.querySelector(".main");

// imgCont.addEventListener("mouseenter", function () {
//   crsr.innerHTML = "view more";
//   gsap.to(crsr, {
//     height: "22px",
//     width: "90px",
//     borderRadius: "10px",
//         padding: "0px 4px",
//     duration: 0.3,
//   })
// })
// imgCont.addEventListener("mouseleave", function () {
//   crsr.innerHTML = "";
//   gsap.to(crsr, {
//     height: "15px",
//     width: "15px",
//     borderRadius: "50%",
//   })
// })

Shery.imageMasker(".img" /* Element to target.*/, {
  //Parameters are optional.
  // style: 2,
  mouseFollower: true,
  text: "View More",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".img" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,

});


// var pg3 = document.querySelector(".page3");
// var heading2H1 = document.querySelector(".heading2 h1");
// gsap.from('.page2 .heading ', {
//   duration: 4,
//   stagger: 0.3,
//   y: -50,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".page2 .heading ",
//     scroller: "body",
//     // start: 'top 60%',
//     // end: 'bottom 20%',
//     // scrub: true,
//     // toggleActions: 'play none none reverse',
//     markers: true,
//     ease: 'power2.out',
//   }
// })