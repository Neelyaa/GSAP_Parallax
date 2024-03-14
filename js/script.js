document.addEventListener('DOMContentLoaded', function () {
    'use-strict';

    Splitting();

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    //Header
    const gTl = gsap.timeline();
    gTl.from(".title .char", 1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out" });
    gTl.to(".header__img", 2, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1, ease: "expo.out" }, "-=1");
    gTl.from(".header__marq", 2, { opacity: 0, yPercent: 100, ease: "expo.out" }, "-=1.5");

    //Animate Square
    const gsapSquare = gsap.utils.toArray('.section-title__square');
    gsapSquare.forEach((gSquare, i) => {
        const rotate = gsap.from(gSquare, 3, { rotation: 720 });
        ScrollTrigger.create({
            trigger: gSquare,
            animation: rotate,
            start: 'top bottom',
            scrub: 1.9
        });
    });

    // Header
    function header() {
        gsap.to('.title_parallax', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            yPercent: -150
        })
        gsap.to('.header .stroke', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: 50
        })

        gsap.to('.header__img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: -70
        })

        gsap.to('.header__img img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            scale: 1.3
        })

        gsap.to('.header__marq-wrapp', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: -50
        })

        gsap.to('.header__marq-star img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            rotate: -720
        })
    }
    header();

    // About
    function about() {
        gsap.from('.about__img', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                scrub: 1.9
            },
            yPercent: 80
        })
        gsap.from('.about__img img', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                scrub: 1.9
            },
            scale: 1.6
        })
        gsap.to('.about__txt', {
            scrollTrigger: {
                trigger: '.about__wrapp',
                start: 'top bottom',
                scrub: 1.9
            },
            yPercent: 50
        })
    }
    about();
})

// Description
function description() {
    gsap.from('.description__num', {
        x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
        scrollTrigger: {
            trigger: '.description__list',
            start: 'top bottom',
            scrub: 1.9
        }
    })
}
description();

// Galerie
function galerie() {
    gsap.from('.work__item, .work__item-num', {
        y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
        scrollTrigger: {
            trigger: '.work',
            start: 'top bottom',
            scrub: 1.9
        }
    })
    gsap.from('.work__item-img img', {
        scale: 1.6,
        scrollTrigger: {
            trigger: '.work__wrapp',
            start: 'top bottom',
            scrub: 1.9
        }
    })
}
galerie();

// Services

function serv() {
    gsap.from('.serv__item-arrow', {
        x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
        scrollTrigger: {
            trigger: '.serv__list',
            start: 'top bottom',
            scrub: 1.9
        }
    })
}
serv();

//Footer

function footer() {
    gsap.from('.footer__div span', {
        y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
        opacity: 0,
        scrollTrigger: {
            trigger: '.footer',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1.9
        }
    })
}
footer();