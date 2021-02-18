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
            const logoTop = logo.getBoundingClientRect().top;
            const logoWidth = logo.clientWidth;
            const logoHeight = logo.clientHeight;

            const navLeft = this.menuInner.getBoundingClientRect().left;
            const navTop = this.menuInner.getBoundingClientRect().top;
            const navWidth = this.menuInner.clientWidth;
            const navHeight = this.menuInner.clientHeight;

            const circleLogo = document.querySelector('circle.circle--logo');
            const circleToggle = document.querySelector('circle.circle--toggle');

            const maskSVG = document.querySelector('.header--mask');
            maskSVG.setAttribute('viewbox', `0 0 ${window.innerWidth} ${this.header.clientHeight}`);

            console.log('heade', this.header.clientHeight);


            const setMask = () => {
                let tl = new gsap.timeline({
                    paused: true
                });
                console.log('SET SVG');
                console.log(navLeft, navWidth);
                console.log(navTop, navHeight);
                tl
                    .set(circleLogo, {
                        scale: 1,
                        // transformOrigin: `${Math.abs(logoLeft + (logoWidth / 2))} ${logoTop}px`
                    })
                    .set(circleToggle, {
                        // transformOrigin: `${Math.abs(navLeft - (navWidth / 2))}px ${navTop}px`
                    }, '-=1.5');

                return tl;
            };


            const hide = () => {
                let tl = new gsap.timeline({
                    paused: true,
                    ease: "power3.inOut"
                });
                // setMask();
                tl
                    .to(circleLogo, 1.5, {
                        scale: 1,
                    })
                    .to(circleToggle, 1.5, {
                        scale: 1,
                    }, '-=1.5');

                return tl;
            };

            const show = () => {
                let tl = new gsap.timeline({
                    paused: true,
                    ease: "power3.inOut"
                });
                // setMask();

                tl
                    .to(circleLogo, 1.5, {
                        scale: 50,
                        transformOrigin: 'center center'
                        // transformOrigin: `${Math.abs(logoLeft + (logoWidth / 10))} ${logoTop + (logoHeight / 3)}px`
                        // y: -500,
                        // x: -500,
                        // yPercent: 0,
                        // xPercent: -400,
                    })
                    .to(circleToggle, 1.5, {
                        scale: 50,
                        transformOrigin: 'center center'

                        // transformOrigin: `${Math.abs(navLeft - (navWidth / 3))}px ${navTop - (navHeight / 2)}px`
                        // y: -500,
                        // x: -500,
                        // yPercent: -150,
                        // xPercent: -400,
                    }, '-=1.5');
                return tl;

            };


            this.menuToogle.addEventListener('click', (e) => {
                e.preventDefault();

                if (this.header.classList.contains('header--position')) {
                    let scroll = window.pageYOffset;

                    document.body.style.top = -scroll + 'px';
                    document.body.classList.toggle('scroll--hidden');
                    this.header.classList.toggle('header--position');

                    if (this.header.classList.contains('header--size', 'header--position')) {
                        document.body.style.top = '';
                        // console.log(scroll);
                        window.scrollTo(0, scroll);
                        // window.scrollTo({
                        //     top: scroll,
                        //     behavior: "smooth"
                        // });
                        hide().play();
                    }

                } else if (this.header.classList.contains('header--size')) {
                    hide().play();
                    document.body.classList.remove('scroll--hidden');

                } else {
                    show().play();
                    document.body.classList.add('scroll--hidden');
                }

                this.header.classList.toggle('header--size');
                this.menuNav.classList.toggle('navigation--show');
                this.menuToogle.classList.toggle('menu--toggle');
                if (this.menuInner.classList.contains('navigation--align')) {
                    this.menuInner.classList.remove('navigation--align');
                }

                this.menuInner.classList.add('navigation--align');
            });

            // window.scrollTo({
            //     top: `${scroll}`,
            //     behavior: "smooth"
            // });

            window.addEventListener('scroll', (e) => {
                e.preventDefault();
                let scrollPage = window.pageYOffset;

                show().play();

                if (scrollPage == 0 && !document.body.classList.contains('scroll--hidden')) {
                    hide().play();
                    this.header.classList.remove('header--position');

                } else {
                    this.header.classList.add('header--position');

                    if (this.header.classList.contains('header--size') && window.pageYOffset === 0) {
                        show().play();
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