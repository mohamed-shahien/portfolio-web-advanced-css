let section = document.querySelectorAll("section, header");
let navlinks = document.querySelectorAll("nav ul li a");

window.onscroll =  () => {
    section.forEach(sec =>{
        let top = window.scrollY;
        let ofsit = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= ofsit && top < ofsit + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


//change nav style on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroller', window.scrollY >0);
})

const textbuttons = document.querySelectorAll('.contact__btn');
textbuttons.forEach(textbutton => {
    let text = textbutton.querySelector('p');
    text.innerHTML =  text.innerHTML.split('').map((character,index) =>
     `<span style="transform: rotate(${index * 12}deg);">${character}</span>`).join('')
});









// mind themes

// let mood = document.querySelector('.mood');
// let seme = document.querySelector('.mood a');

// seme.addEventListener('click', () => {
//     seme.classList.toggle('blue')
// })


// mood.addEventListener('click',() =>{
//     seme.classList.toggle('blue')
//     if(seme.classList = 'blue'){

//         seme.style.background = '#003347'
//         seme.style.left = '0'
//     }else {
//         seme.classList.toggle('blue')
//         seme.style.background = 'var(--color-bg-4)';
//     }   
// })


// function tog(){

//     if(seme.classList = 'blue'){
//         seme.classList.toggle('blue')
//         seme.style.background = '#003347'
//     }else {
//         // seme.classList.toggle('blue')
//         seme.style.background = 'var(--color-bg-4)'
        
//     }  
// }

// mind themes


var swiper = new Swiper('.mySwiper', {
    slidesPerView:1,
    spaceBetween:30,
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        599:{
            slidesPerView:2,
            spaceBetween:30,
        },
        1023: {
            slidesPerView:3,
            spaceBetween:30,
        }
    }
});
const nav = document.querySelector('.nav__linkes');
const openNavBtn = document.querySelector('#nav__toggle-opne');
const clossNavBtn = document.querySelector('#nav__toggle-close');

const opneNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    clossNavBtn.style.display = 'inline-block';
}
openNavBtn.addEventListener("click", opneNav)

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    clossNavBtn.style.display = 'none';
}
clossNavBtn.addEventListener("click", closeNav);

if(document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navlink =>{
        navlink.addEventListener('click', closeNav)
    })
}
