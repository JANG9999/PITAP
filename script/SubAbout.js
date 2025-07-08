/* header */
let ham = document.querySelector('.ham-wrap');
let mainMenu = document.querySelector('.ham-menu');
let down = document.querySelector('.down');
ham.addEventListener('click', function(){
  mainMenu.classList.toggle('open');
  if (mainMenu.classList.contains('open')) {
    down && (down.style.opacity = '1');
  } else {
    down && (down.style.opacity = '0');
  }
});
/* about */
let messages = [
    { text: "/PLANNING", bgColor: "#F4E357" },
    { text: "/DEVELOPER", bgColor: "#7ED6FF" },
    { text: "/BRANDING", bgColor: "#F4E357" },
    { text: "/PEOPLE", bgColor: "#F4E357" },
    { text: "/EXPERIENCE", bgColor: "#7ED6FF" },
    { text: "/DESIGN", bgColor: "#88EF59" }
  ];

let p = document.querySelector(".animated-text");
let wrapper = document.querySelector(".text-wrapper");
let measure = document.querySelector(".text-measure");
let index = 0;

function updateMessage() {
  const { text, bgColor } = messages[index];

  // 텍스트 너비 측정
  const extraPadding = window.innerWidth <= 768 ? 100 : 10;
  measure.textContent = text + extraPadding;

  const newWidth = measure.offsetWidth;

  // 텍스트 바꾸기 (즉시)
  p.textContent = text;

  // 배경색 & 너비 애니메이션
  p.style.backgroundColor = bgColor;
  wrapper.style.width = newWidth + "px";

  index = (index + 1) % messages.length;
}

// 초기 너비 설정
measure.textContent = messages[0].text;
wrapper.style.width = measure.offsetWidth + "px";

updateMessage(); // 첫 글자 설정
setInterval(updateMessage, 2000);

/* text-content */
const isMobile = window.innerWidth <= 768;

gsap.fromTo(".text-content p",
  { y: isMobile ? 250 : 550 },
  {
    y: isMobile ? -1300 : -1000,
    ease: "none",
    scrollTrigger: {
      trigger: ".card-section",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5
    }
  }
);
  

/* page */
gsap.registerPlugin(ScrollTrigger);

// 화면 너비가 768px 이상일 때만 실행
if (window.innerWidth >= 768) {
  let panels = gsap.utils.toArray(".slide-page .page");

  gsap.timeline({
    scrollTrigger: {
      trigger: ".slide-page",
      start: "top top",
      end: "+=300%",
      scrub: 0.5,
      pin: true,
    }
  })
  .fromTo(panels[1], { x: "100%" }, { x: "5%" })
  .fromTo(panels[2], { x: "100%" }, { x: "10%" }, ">+=0.5")
  .fromTo(panels[3], { x: "100%" }, { x: "15%" }, ">+=0.5")
  .fromTo(panels[4], { x: "100%" }, { x: "20%" }, ">+=0.5");
}


/* map */
var HOME_PATH = window.HOME_PATH || '.';
var position = new naver.maps.LatLng(37.551819485888, 126.91903088108);

var map = new naver.maps.Map('map', {
    center: position,
    zoom: 20
});

var marker = new naver.maps.Marker({
    position: position,
    map: map,
    icon: {
        url: 'https://pitap.at/assets/images/contact/marker.png', 
        size: new naver.maps.Size(177, 97),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(88, 97)
    }
});

/* footer */
if(innerWidth >= 768){
  gsap.fromTo('.footer-content',
    { y: 1500 },
    {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".card-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5
      }
    }
  );
}

let cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

let footerArea = document.querySelector('footer');
footerArea.addEventListener('mouseenter', function(){
  cursor.classList.add('active')
});
footerArea.addEventListener('mouseleave', function(){
  cursor.classList.remove('active')
});

let menuArea = document.querySelector('.ham-wrap');
menuArea.addEventListener('mouseenter', function(){
  cursor.classList.add('active')
});
menuArea.addEventListener('mouseleave', function(){
  cursor.classList.remove('active')
})