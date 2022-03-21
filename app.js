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

jokeBtn.addEventListener('click', generateJokes);

generateJokes();

async function generateJokes(){
    const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious"
    )
    // console.log(res);
    const data = await res.json();
    let joke = "";
    if(data.joke == undefined){
        joke = `${data.setup} <br /> ${data.delivery}`; }

        else{
            joke= data.joke;
        }
       jokeTxt.innerHTML = joke;
    }

  // ---------------- FORM VALIDATION -----------
  const form = document.querySelector('.cta-form');
  const feedback = document.querySelector('.warning-name');
  const feedback2 = document.querySelector('.warning-email');
  const feedback3 = document.querySelector('.warning-subject');
  const feedback4 = document.querySelector('.warning-message');


  const namePattern = /^[a-zA-Z]{3,16}$/
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;



  form.addEventListener('submit', e =>{

    const fname = form.fname.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    if(namePattern.test(fname)){
      if(fname = "" ){
        e.preventDefault();
      } if(email=""){
        e.preventDefault();
      }
      if(subject=""){
        e.preventDefault();
      }
      if(message=""){
        e.preventDefault();
      }
     }
    else{
      form.fname.setAttribute('class', 'error');
      feedback.innerText = 'Full-name should be between 3 and 15 characters long!!!!';
    }

    if(emailPattern.test(email)){
      if(email =""){
        e.preventDefault();
      }
    }
     else{
       form.email.setAttribute('class', 'error');
      feedback2.innerText = 'Please match pattern!!';

    }
    if(form.subject.value == ""){
      e.preventDefault();
      form.subject.setAttribute('class','error');
      feedback3.innerText='Please choose an option';
     console.log('error');
  
    } 
      else{
        form.subject.setAttribute('class', 'success');
        console.log('success')
      }
      if(form.message.value == ""){
        e.preventDefault();
        form.message.setAttribute('class','error');
        feedback4.innerText='Please write a feedback';
    
      } 
        else{
          form.message.setAttribute('class', 'success');
          console.log('success')
        }

       
   
  });

  form.fname.addEventListener('keyup', e=>{
    if(namePattern.test(e.target.value)){
        form.fname.setAttribute('class', 'success');
        feedback.innerText = '';    


      }
    else{
      form.fname.setAttribute('class', 'error');
      feedback.innerText = 'Name should be between 3 and 15 characters long';    

    }

  });
  form.email.addEventListener('keyup', e=>{
 if(emailPattern.test(e.target.value)){
      form.email.setAttribute('class', 'success');
      feedback2.innerText = '';    

    }
    else{
      form.email.setAttribute('class', 'error');
    }
   
  });
  form.subject.addEventListener('change', e=>{
      if(form.subject.value == ""){
        form.subject.setAttribute('class','error');
        feedback3.innerText='Please choose an option';
       console.log('error');
    
  } 
  else{
    form.subject.setAttribute('class', 'success');
    feedback3.innerText="";
    console.log('success')
  }
});
form.message.addEventListener('keyup', e =>{
  
if(form.message.value == ""){
  form.message.setAttribute('class','error');

} 
  else{
    form.message.setAttribute('class', 'success');
    feedback4.innerText='';

  }
})
