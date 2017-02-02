import Vue from 'vue';
import App from './components/App.vue';

const app = new Vue({
  // more to come (see export)
  ...App
});

export {app /* eventually router*/ /*, store*/};
