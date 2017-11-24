import Vue from 'vue';
import prodTabs from './components/prod.tabs.vue';


new Vue({
    el: '.prod-switcher',
    data: {
        products: {
            windows: ['Double-hung', 'Slider', 'Casement', 'Hopper', 'Awning'],
            doors: ['Entry', 'Hinged Patio', 'Sliding Patio'],
        },
    },
    components: {
        prodTabs,
    },
});

// this tells webpack this file is available for HMR
if (module.hot) {
    module.hot.accept();
}

