const cards = document.querySelectorAll('.card__inner');
for(let i = 0; i < cards.length; i++){
  cards[i].addEventListener( 'click', function() {
  cards[i].classList.toggle('is-flipped');
});
}

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let curSlide = 0;
  const maxSlide = slides.length;

  //translate slides with transform
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // function to change slide to next
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };
  // function to change slide to next

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };
 btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
};
slider();

// Tab components
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // First remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Then activate with adding class
  clicked.classList.add('operations__tab--active');

  // Activate content section
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});


// Team section  generated with JS 
const team = {
  names:['Bob', 'Alice', 'John'],
  positions:['Senior Frontend & Backend', 'Senior Java & Scratching', 'Senior Devops & Networking'],
  images:['first.jpg', 'second.jpg', 'third.jpg'],
  social:{
      icons:['https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png'],
      links:['https://facebook.com/bob','https://facebook.com/alice', 'https://facebook.com/john' ],
      icons2:['https://img.icons8.com/ios-glyphs/30/000000/linkedin.png'],
      links2:['https://linkedin.com/bob','https://linkedin.com/alice', 'https://linkedin.com/john' ]

      
  }

};

function renderNames(names){
  return `
  <ul class="team__names">
      ${names.map(name => `<li><h3>${name}</h3></li>`).join('')}
  </ul>
  `;
}
function renderPositions(positions){
  return `
  <ul class="team__positions">
      ${positions.map(position => `<li><p class="positions">${position}</p> 
         </li>`).join('')}
     
  </ul>
  `;
}
function renderImages(images){
  return `
  <ul class="team__img">
      ${images.map(image => `<li><img class="images" src="assets/images/${image}">
      </li>`).join('')}
  </ul>
  `;
}
function renderIcons(icons){

  return `
      ${icons.map(icon => `<img src="${icon}">`).join('')}
  
  `;

}
function renderIcons2(icons2){

return `
  ${icons2.map(icon2 => `<img src="${icon2}">`).join('')}

`;

}



function renderLinks(links){
  return `
      ${links.map(link => `<li><a class="flex" href="${link}">${renderIcons(team.social.icons)} </a> 
                            </a>
          </li>
          
                          
      `).join('')}
 
  `;

}  function renderLinks2(links2){
  return `
      ${links2.map(link2 => `<li><a class="flex" href="${link2}">${renderIcons2(team.social.icons2)}</a></li>`).join('')}
 
  `;

} 


const teamContainer = document.querySelector('.team');
let html="";

html += `<h1 class="title">Our Team</h1>
${renderImages(team.images)} 
${renderNames(team.names)}
${renderPositions(team.positions)}  
<ul class="team__links">  ${renderLinks(team.social.links)}  </ul>
<ul class="team__links"> ${renderLinks2(team.social.links2)}</ul>

`;
teamContainer.innerHTML = html;




//-------JOKE API------

const jokeTxt = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJokes)

generateJokes()

async function generateJokes(){
    const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious"
    )
    const data = await res.json();
    let joke = ""
    if(data.joke == undefined){
        joke = `${data.setup} <br /> ${data.delivery}` }

        else{
            joke= data.joke
        }

       jokeTxt.innerHTML = joke;
    }