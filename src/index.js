//import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Scrollbar from 'smooth-scrollbar';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
//gsap.registerPlugin(ScrollToPlugin);

/*
Scrollbar.init(document.querySelector('#my-scrollbar'), {damping: 0.1,
    delegateTo: document,
    alwaysShowTracks: true,
    speed: 0.2,});

*/
var tl = gsap.timeline({
    defaults:{
        duration: 1}
});

const Herotext = new SplitType('#title')

tl.to(".box", {
    yPercent: -100,
    ease: "expo.easeInOut",
    })
    .from(".center-img", {
    scale: 3,
    x: 100,
    ease: "expo.easeInOut",
    }, '-=1')
    .to(".wrapper-img", {
        width: "500",
        height: "600",
        ease: "expo.easeInOut",
        duration: 1
    }, '-=1')
    .to(".left", {
        x: -300,
        y: 50,
        rotation: -10,
        ease: "expo.easeInOut"
    }).to(".right", {
        x: 327,
        y: 56,
        rotation: 10,
        ease: "expo.easeInOut"
    }, '-=0.8')
    .to('.title',{
        opacity: 1
    }, )
    .fromTo('.char',{
        yPercent: 25,
        opacity: 0,
        },
        {opacity: 1,
        stagger: 0.1,duration: 0.2}
        ,'-=1')
    .fromTo('.nav > div, .hero-container > div',{
    opacity: 0,
    y: -30,
    ease: "expo.easeInOut",
},{
    y:0,
    opacity: 1,
},'-=1')
.to('.arrow-down',{
    opacity:1,
    y: 50,
    repeat:-1,    ease: "expo.easeInOut"})

let heroArrow = document.querySelector('.arrow-down');
heroArrow.addEventListener('click',()=>{
    tl.reverse(4);
    gsap.to(window, {delay:2, duration: 2, scrollTo: "#features"});
    //setTimeOut(tl.restart(true, false), 5000)

})


let words = gsap.utils.toArray('.side-txt> p');
words.forEach((word)=>{
    gsap.to(word, { 
        position: 'sticky',
        x:300,
        color: 'rgb(14, 13, 12)',
        stagger: 1,
        ease: 'expo.easeInOut',
        duration: 1,
        scrollTrigger: {
            trigger: word,
            
            scrub: 1,
            start: "top center",
            end: "bottom 80%",
        },
    })
})
/*
gsap.to('.features',{
    scrollTrigger: {
        trigger: '.features',
        scrub: true,
        animation: tl.play()
}
     
})
*/

/*
if(tl.reversed){
    tl.play();
}*/
/*
var tl2 = gsap.timeline({ scrollTrigger: {

}});

const featurestext = new SplitType('#features-p', { types: 'words' });


    
/*
gsap.fromTo('#features-p>.word', {
        xPercent: -100,
        ease: "expo.easeInOut",
        stagger: 1,
},{
        scrollTrigger: {
            trigger: '.word',
            markers: true,
            start: "top center"
        },
        xPercent: 100,
        backgroundPositionX: "0%",
        ease: "expo.easeInOut",
        duration: 3,
        stagger: 1,/*
        scrollTrigger: {
          
          markers: true,
          scrub: 1,
          start: "top center",
          end: "bottom top",
        },
      });*/


/*
words.forEach(word => {
    tl2.to(word,{
        scrollTrigger: {
            trigger: word,
          },
        backgroundPositionX: "0%",
        stagger: 1,

      });
});
*/

/**************/ 
/*
gallery.map(({src, title, subtitle, category}, index)=>{
    let div = document.createElement('div');
    div.classList.add='gallery-item-wrapper'
    div.innerHTML =`
    <div class="gallery-item">
            <div class="gallery-item-info">
                <h1 class="gallery-info-title">${title}</h1>
                <h6 class="gallery-info-subtitle">${subtitle}</h6>
                <p class="gallery-info-category">${category}</p>
            </div>
            <div class="gallery-item-img">

            </div>
        </div>
    `
    let galleryDiv = document.querySelector('.gallery') 
    galleryDiv.appendChild(div);
    let galleryDivImg = document.querySelector('.gallery-item-img') 
    galleryDivImg.style.backgroundImage = `url('${src}')`
})*/








gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container2",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3000",
  }
});


let cards = document.querySelectorAll('.gallery-item-wrapper')

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle('is-visible', entry.isIntersecting)
    })
},{
    threshold: 0.6
})

cards.forEach(card=>{
    observer.observe(card)
})