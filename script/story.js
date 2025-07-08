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

/* 토글 */

let select = document.querySelector('.select h2');
let option = document.querySelector('.select .option');
let optionItems = document.querySelectorAll('.option p');
let cards = document.querySelectorAll('.card');
let noResult = document.querySelector('.no-result');
select.addEventListener('click', (e) => {
  e.stopPropagation(); // 문서 클릭 이벤트 전파 막기
  option.classList.toggle('show');
});
document.addEventListener('click', () => {
  option.classList.remove('show');
});
optionItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation(); // 메뉴 닫히는 거 방지
    let category = item.dataset.category;
    select.textContent = category;
    option.classList.remove('show');
    let visibleCount = 0;
    cards.forEach(card => {
  let cardCategories = card.dataset.category.split(' ');
  if (category === 'ALL' || cardCategories.includes(category)){
    card.style.display = 'block';
    visibleCount++;
  }else {
    card.style.display = 'none';
    }
  });
    noResult.style.display = visibleCount === 0 ? 'block' :'none';
  });
});

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