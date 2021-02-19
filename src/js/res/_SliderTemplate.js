'use strict';

const pageSlider = (container) => {
    class SliderTemplate {
        constructor(props, counterAccess) {
            console.log('SOME: ', props);
            this.rootElement = props.element;
            this.accessCounter = props.a;
            this.sliderWrapper = this.rootElement.querySelector('.page-slider--wrapper');
            this.sliderInner = this.rootElement.querySelector('.page-slider__inner');
            this.sliderListItems = Array.from(this.rootElement.querySelectorAll('.page-slider__slide'));
            this.arrowWrapper = this.rootElement.querySelector('.page-slider__arrows');
            this.prevBtn = this.rootElement.querySelector('.prev');
            this.nextBtn = this.rootElement.querySelector('.next');
            this.counterSlide = this.rootElement.querySelector('#current');
            this.counterSlideTotal = this.rootElement.querySelector('#total');
            this.sliderWrapperWidth = this.sliderWrapper.clientWidth;

            this.slideIndex = 1;
            this.slideOffset = 0;

            this.sliderToggle();
        }

        sliderToggle() {
            this.sliderInner.style.width = 100 * this.sliderListItems.length + '%';
            this.sliderInner.style.display = 'flex';
            this.sliderInner.style.transition = 'all 0.5s ease';
            this.sliderWrapper.style.overflow = 'hidden';
            this.sliderListItems.forEach(item => {
                item.style.width = this.sliderWrapperWidth;
            });

            this.showCounter();

            this.nextBtn.addEventListener('click', () => {

                if (this.slideOffset == this.sliderWrapperWidth * (this.sliderListItems.length - 1)) {
                    this.slideOffset = 0;
                } else {
                    this.slideOffset += this.sliderWrapperWidth;
                }
                this.sliderInner.style.transform = `translateX(-${this.slideOffset}px)`;
                if (this.slideIndex == this.sliderListItems.length) {
                    this.slideIndex = 1;
                } else {
                    this.slideIndex++;
                }
                this.currentCounter();
            });

            this.prevBtn.addEventListener('click', () => {

                if (this.slideOffset == 0) {
                    this.slideOffset = this.sliderWrapperWidth * (this.sliderListItems.length - 1);
                } else {
                    this.slideOffset -= this.sliderWrapperWidth;
                }
                this.sliderInner.style.transform = `translateX(-${this.slideOffset}px)`;
                if (this.slideIndex == 1) {
                    this.slideIndex = this.sliderListItems.length;
                } else {
                    this.slideIndex--;
                }
                this.currentCounter();
            });
        }

        showCounter() {
            if (this.sliderListItems.length >= 10) {
                this.counterSlideTotal.textContent = this.sliderListItems.length;
                this.counterSlide.textContent = this.slideIndex;
            } else {
                this.counterSlideTotal.textContent = `0${this.sliderListItems.length}`;
                this.counterSlide.textContent = `0${this.slideIndex}`;
            }
        }

        currentCounter() {
            if (this.sliderListItems.length < 10) {
                this.counterSlide.textContent = `0${this.slideIndex}`;
            } else {
                this.counterSlide.textContent = `${this.slideIndex}`;
            }
        }
    }

    let sliderBlogPage = new SliderTemplate({
        element: container.querySelector('.page-slider'),
    });

};

export default pageSlider;
// const SliderTemplate = (page) => {
//     const slider = page.querySelector('.blog__slider'),
//         sliderInner = page.querySelector(`.blog__inner`),
//         sliderListItems = page.querySelectorAll(`.blog__slide`),
//         prevBtn = page.querySelector(`.prev`),
//         nextBtn = page.querySelector(`.next`),
//         counterSlide = page.querySelector('#current'),
//         counterSlideTotal = page.querySelector('#total');

//     let slideIndex = 1,
//         slideOffset = 0;

//     function start() {
//         showCounter();
//         init();
//     }

//     function showCounter() {
//         if (sliderListItems.length >= 10) {
//             counterSlideTotal.textContent = sliderListItems.length;
//             counterSlide.textContent = slideIndex;
//         } else {
//             counterSlideTotal.textContent = `0${sliderListItems.length}`;
//             counterSlide.textContent = `0${slideIndex}`;
//         }
//     }

//     function init() {
//         const sliderWrapper = slider.querySelector(`.blog__slider--wrapper`);
//         const sliderWrapperWidth = sliderWrapper.clientWidth;

//         sliderInner.style.width = 100 * sliderListItems.length + '%';
//         sliderInner.style.display = 'flex';
//         sliderInner.style.transition = 'all 0.5s ease';

//         sliderWrapper.style.overflow = 'hidden';
//         sliderListItems.forEach(item => {
//             item.style.width = sliderWrapperWidth;
//         });

//         nextBtn.addEventListener('click', () => {
//             if (slideOffset == sliderWrapperWidth * (sliderListItems.length - 1)) {
//                 slideOffset = 0;
//             } else {
//                 slideOffset += sliderWrapperWidth;
//             }
//             sliderInner.style.transform = `translateX(-${slideOffset}px)`;

//             if (slideIndex == sliderListItems.length) {
//                 slideIndex = 1;
//             } else {
//                 slideIndex++;
//             }

//             currentCounter();
//         });

//         prevBtn.addEventListener('click', () => {
//             if (slideOffset == 0) {
//                 slideOffset = sliderWrapperWidth * (sliderListItems.length - 1);
//             } else {
//                 slideOffset -= sliderWrapperWidth;
//             }
//             sliderInner.style.transform = `translateX(-${slideOffset}px)`;

//             if (slideIndex == 1) {
//                 slideIndex = sliderListItems.length;
//             } else {
//                 slideIndex--;
//             }

//             currentCounter();
//         });
//     }

//     function currentCounter() {
//         if (sliderListItems.length < 10) {
//             counterSlide.textContent = `0${slideIndex}`;
//         } else {
//             counterSlide.textContent = `${slideIndex}`;
//         }
//     }
// };

// // Menu.init();
// SliderTemplate(container).start();