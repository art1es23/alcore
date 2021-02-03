class Menu {
    constructor() {
        this.header = document.querySelector('.header');
        this.menuToogle = this.header.querySelector('.menu');
        this.menuNav = this.header.querySelector('.navigation--wrapper');
        this.slider = document.querySelector('.slider');
        this.body = document.body;

        this.toggleNavigation();
        this.scrollDefault();
    }
    // toggle() {

    //     let toggleBtn = this.menuToogle;
    //     let toggleMenu = this.menuNav;

    //     console.log('asdasdasds');
    //     toggleMenu.classList.add('show');
    //     toggleBtn.classList.add('btn--swap');
    // }

    toggleNavigation() {
        this.menuToogle.addEventListener('click', (e) => {
            e.preventDefault();
            let toggleBtn = this.menuToogle;
            let toggleMenu = this.menuNav;
            let toggleHeader = this.header;
            let slider = this.slider;
            let body = this.body;

            console.log(body);

            // if (toggleHeader.classList.contains('header--size')) {
            //     toggleMenu.classList.remove('navigation--show');
            //     toggleBtn.classList.remove('btn--swap');
            //     toggleHeader.classList.remove('header--size');
            //     slider.classList.remove('slider--size');
            //     document.querySelector('.navigation').style.alignItems = 'center';
            //     body.classList.remove('scroll--hidden');
            // }

            toggleMenu.classList.toggle('navigation--show');
            toggleBtn.classList.toggle('menu--toggle');
            toggleHeader.classList.toggle('header--size');
            slider.classList.toggle('slider--size');
            document.querySelector('.navigation').style.alignItems = 'baseline';
            body.classList.toggle('scroll--hidden');
        });
    }

    scrollDefault() {
        let toggleBtn = this.menuToogle;
        let toggleHeader = this.header;
        let toggleMenu = this.menuNav;
        // let xHeader = toggleHeader.clientHeight;

        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            let scrollPage = window.pageYOffset;

            toggleHeader.classList.remove('header--position', 'header--size');

            if (scrollPage > 0) {
                toggleHeader.classList.add('header--position');
            } else {
                toggleMenu.classList.remove('navigation--show');
                toggleBtn.classList.remove('menu--toggle');
            }

        });
    }


}


export default Menu;