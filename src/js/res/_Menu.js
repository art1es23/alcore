import gsap from 'gsap';

const toggleMenu = (container) => {
    class Menu {
        constructor() {
            this.header = document.querySelector('.header');
            this.menuToogle = document.querySelector('.menu');
            this.menuNav = document.querySelector('.navigation--wrapper');
            this.menuInner = document.querySelector('.navigation');
            // this.body = document.querySelector('body');

            this.init();
        }

        init() {

            const logo = document.querySelector('.logo');
            const logoLeft = logo.getBoundingClientRect().left;
            const circleLogo = document.querySelector('circle.circle--logo');
            const circleToggle = document.querySelector('circle.circle--toggle');

            const hide = () => {
                let tl = new gsap.timeline({
                    paused: true
                });
                tl
                    .to(circleLogo, 1.5, {
                        scale: 1,
                        y: 0,
                        x: 0,
                        yPercent: 0,
                        xPercent: 0,
                    })
                    .to(circleToggle, 1.5, {
                        scale: 1,
                        y: 0,
                        x: 0,
                        yPercent: 0,
                        xPercent: 0,
                    }, '-=1.5');

                return tl;
            };

            const show = () => {
                let tl = new gsap.timeline({
                    paused: true
                });

                tl
                    .to(circleLogo, 1.5, {
                        scale: 10,
                        y: -500,
                        x: -500,
                        yPercent: 50,
                        xPercent: 0,
                    })
                    .to(circleToggle, 1.5, {
                        scale: 10,
                        y: -500,
                        x: -500,
                        yPercent: -100,
                        xPercent: 0,
                    }, '-=1.5');
                return tl;

            };

            // document.body.classList.remove('scroll--hidden');
            this.menuToogle.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.header.classList.contains('header--size')) {
                    hide().play();
                    document.body.classList.remove('scroll--hidden');
                } else if (!this.header.classList.contains('header--size') && window.pageYOffset > 0) {
                    show().play();
                    document.body.classList.remove('scroll--hidden');

                } else {
                    show().play();
                    document.body.classList.add('scroll--hidden');
                }
                this.menuNav.classList.toggle('navigation--show');
                this.menuToogle.classList.toggle('menu--toggle');
                this.header.classList.toggle('header--size');
                if (this.menuInner.classList.contains('navigation--align')) {
                    this.menuInner.classList.remove('navigation--align');
                }

                this.menuInner.classList.add('navigation--align');
            });

            window.addEventListener('scroll', (e) => {
                e.preventDefault();
                let scrollPage = window.pageYOffset;

                this.header.classList.remove('header--position', 'header--size');

                // show().play();
                if (scrollPage == 0) {
                    // document.body.classList.remove('scroll--hidden');
                    hide().play();
                    this.menuNav.classList.remove('navigation--show');
                    this.menuToogle.classList.remove('menu--toggle');
                    this.menuInner.classList.remove('navigation--align');

                } else {
                    show().play();
                    this.header.classList.add('header--position');
                    this.menuInner.classList.remove('navigation--align');
                    this.menuNav.classList.remove('navigation--show');
                    this.menuToogle.classList.remove('menu--toggle');

                    if (this.header.classList.contains('header--size')) {

                        this.menuNav.classList.toggle('navigation--show');
                        this.menuToogle.classList.toggle('menu--toggle');
                        this.header.classList.toggle('header--size');
                        if (this.menuInner.classList.contains('navigation--align')) {
                            this.menuInner.classList.remove('navigation--align');
                        }

                        this.menuInner.classList.add('navigation--align');

                    }

                }

            });
        }


    }

    let togglemenu = new Menu();
};

export default toggleMenu;

// const Menu = {

//     header: document.querySelector('.header'),
//     menuToogle: document.querySelector('.menu'),
//     menuNav: document.querySelector('.navigation--wrapper'),
//     menuInner: document.querySelector('.navigation'),
//     slider: document.querySelector('.slider'),

//     init: function () {
//         this.menuToogle.addEventListener('click', (e) => {
//             e.preventDefault();

//             this.menuNav.classList.toggle('navigation--show');
//             this.menuToogle.classList.toggle('menu--toggle');
//             this.header.classList.toggle('header--size');
//             // this.slider.classList.toggle('slider--size');
//             this.menuInner.classList.toggle('navigation--align');
//             document.body.classList.toggle('scroll--hidden');
//         });

//         window.addEventListener('scroll', (e) => {
//             e.preventDefault();
//             let scrollPage = window.pageYOffset;

//             this.header.classList.remove('header--position', 'header--size');

//             if (scrollPage > 0) {
//                 this.header.classList.add('header--position');
//             } else {
//                 this.menuNav.classList.remove('navigation--show');
//                 this.menuToogle.classList.remove('menu--toggle');
//             }

//         });

//         console.log('SOME FUNCTION INIT');
//     }

// };

// Menu.init();