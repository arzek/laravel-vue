
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');
window.Vuetify = require('vuetify');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


Vue.component('send-component', require('./components/send-component.vue'));
Vue.component('delete-component', require('./components/delete-component.vue'));
Vue.component('table-component', require('./components/table-component.vue'));
Vue.component('layout-component', require('./components/layout-component.vue'));
Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app',
    template: "<layout-component></layout-component>"
});


