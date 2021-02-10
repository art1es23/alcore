import barba from '@barba/core';
import pageHome from './res/_Slider';
import pageSlider from './res/_SliderTemplate';
import toggleMenu from './res/_Menu';
// ===== init ======
toggleMenu();

barba.hooks.beforeEnter(data => {
    window.scrollTo(0, 0);
    // Menu.init();
});

barba.hooks.once(data => {
    window.scrollTo(0, 0);
    // Menu.init();
});

barba.init({
    views: [{
            namespace: 'home',
            beforeEnter(data) {
                pageHome(data.next.container);
            },
            beforeOnce(data) {
                pageHome(data.next.container);
            }
        },
        // {
        //     namespace: 'about',
        //     beforeEnter(data) {
        //         pageSlider(data.next.container);
        //     },
        //     beforeOnce(data) {
        //         pageSlider(data.next.container);
        //     }
        // },
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