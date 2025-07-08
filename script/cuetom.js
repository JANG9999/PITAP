/* screen */
  let main = document.querySelector('.main-page');
  window.addEventListener('load', function(){
    setTimeout(function(){
      let screen = document.querySelector('.screen');
      main.style.display = 'block';
      screen.classList.add('slide-out');
      setTimeout(function(){
        screen.style.display = 'none'
      }, 2000)
    },2000)
  })
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
/* main */
let text = [
  "DORCO 웹사이트 <br> 리뉴얼 수주",
  "GYEYANG<br>COMPLEX",
  "MAYFILED<br>HOTEL",
  "SAMSUNG DISPLAY",
  "SAMSUNG DISPLAY<br>NEWSROOM",
  "MAYPLACE<br>HOTEL",
  "HUGEL<br>BYRYZN",
  "SAMSUNGFIRE<br>UXW SOLUTION",
  "현대해상<br>CNG CARE",
  "MOBISLIVE",
  "COLEO<br>MMARTING",
];
let swiperTitle = document.querySelector('.swiper-title');

var swiper1 = new Swiper(".main-swiper", {
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      speed: 2000,
      pagination: {
        el: ".swiper-pagination",
        type : 'fraction'
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      loop: true,
      on: {
        autoplayTimeLeft(s, time, progress) {
          let bar = document.querySelector('.autoplay-progress .progress');
          bar.style.width = `${(1 - progress) * 100}%`;
        },
        slideChange: function(){
          swiperTitle.classList.add('fade-out');
          setTimeout(function(){
            swiperTitle.innerHTML = text[swiper1.realIndex];
            swiperTitle.classList.remove('fade-out')
          },500);
        }
      }
    });
    swiperTitle.innerHTML = text[swiper1.realIndex];

let toggleBtn = document.querySelector('.pause');
let icon = toggleBtn.querySelector('i');
let Paused = false;
toggleBtn.addEventListener('click', () => {
  if (Paused) {
    swiper1.autoplay.start(); 
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    swiper1.autoplay.stop();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
  Paused = !Paused;
});

/* welcome */
var swiper2 = new Swiper(".welcome-slide", {
      slidesPerView: 1.8,
      breakpoints:{
        768: {
          slidesPerView: 'auto',
        }
      },
      spaceBetween: 15,
    });

let slides = document.querySelectorAll('.slideimg-wrap img');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? '1' : '0';
  });
}

showSlide(current); 

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 800); 
  
/* move-word */
let imgs = document.querySelectorAll('.word-wrap');
let imgSection = document.querySelector('.move-word');

window.addEventListener('scroll', function () {
  let rect = imgSection.getBoundingClientRect();
  let windowHeight = window.innerHeight;
  let mobile = window.innerWidth <= 768;

  if (rect.top < windowHeight && rect.bottom > 0) {
    let progress = 1 - rect.top / windowHeight;
    let speed1 = mobile ? 100 : 600;
    let speed2 = mobile ? 150 : 900;
    let speed3 = mobile ? 100 : 600;

    let move1 = Math.min(1200, progress * speed1);
    let move2 = Math.min(1200, progress * speed2);
    let move3 = -Math.min(1200, progress * speed3);

    imgs.forEach((img, i) => {
      console.log(imgs)
      if(i===0){
        img.style.transform = `translateX(${move1}px)`;
      }else if(i===1){
        img.style.transform = `translateX(${move2}px)`;
      }else if(i===2){
        img.style.transform = `translateX(${move3}px)`;
      }
    });
  }
});

gsap.registerPlugin(ScrollTrigger);

let footer = document.querySelector('footer')
let cardSection = document.querySelector('.card-section')
gsap.to(footer, {
  yPercent: 0,
  scrollTrigger: {
    trigger: cardSection,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});

if(window.innerWidth >= 768){
  // 카드 섹션과 footer-content 동기화 이동
  gsap.fromTo(".footer-content",
    { y: 1000 },
    {
      y: 50,
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


/* cursor */
let cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

let slide = document.querySelector('.welcome-slide');
slide.addEventListener('mouseenter',function(){
  cursor.classList.add('active')
});
slide.addEventListener('mouseleave',function(){
  cursor.classList.remove('active')
});

let cardArea = document.querySelector('.card-wrap');
cardArea.addEventListener('mouseenter', function(){
  cursor.classList.add('active')
});
cardArea.addEventListener('mouseleave', function(){
  cursor.classList.remove('active')
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