import barba from '@barba/core';
import pageHome from './res/_Slider';
import pageSlider from './res/_SliderTemplate';
import toggleMenu from './res/_Menu';
import pageSliderAbout from './res/_SliderAbout';
import {
    wrap
} from 'gsap/gsap-core';
// ===== init ======

const wrapperPage = document.querySelector('.wrapper');

toggleMenu();

// const scrollUp = () => {

//     wrapperPage.querySelector('.scroll-up__link').addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector('.main-content').scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });

// };
// scrollUp();

// if (wrapperPage.classList.contains('home-page')) {
//     pageHome();
// } else if (wrapperPage.classList.contains('about-page')) {
//     pageSliderAbout();
// } else if (wrapperPage.classList.contains('blog-page')) {
//     pageSlider();
// }
barba.hooks.beforeEnter(data => {
    window.scrollTo(0, 0);
    // Menu.init();
    let target = data.next.container;
    const scrollUp = () => {

        target.querySelector('.scroll-up__link').addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.main-content').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

    };
    scrollUp();

});

barba.hooks.once(data => {
    window.scrollTo(0, 0);
    // Menu.init();
    let target = data.next.container;
    const scrollUp = () => {

        target.querySelector('.scroll-up__link').addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.main-content').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

    };
    scrollUp();
});

barba.init({
    transitions: [{
        name: 'default',
        once({
            current,
            next
        }) {
            // document.querySelector('.header').classList.remove('header--size');
        },
        enter({
            current,
            next
        }) {
            // document.querySelector('.header').classList.remove('header--size');
        }
    }],
    views: [{
            namespace: 'home',
            beforeEnter(data) {
                pageHome(data.next.container);
            },
            beforeOnce(data) {
                pageHome(data.next.container);
            }
        },
        {
            namespace: 'about',
            beforeEnter(data) {
                pageSliderAbout(data.next.container);
            },
            beforeOnce(data) {
                pageSliderAbout(data.next.container);
            }
        },
        {
            namespace: 'blog',
            beforeEnter(data) {
                pageSlider(data.next.container);
            },
            beforeOnce(data) {
                pageSlider(data.next.container);
            }
        },
    ]
});