import Vue from 'vue';
import App from './app.vue';

new Vue({
    el: '.prod-switcher',
    template: '<App/>',
    components: {
        App,
    }
});

// this tells webpack this file is available for HMR
if (module.hot) {
    module.hot.accept();
}

