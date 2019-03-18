import Vue from 'vue';
import App from './components/App';

// Vue.config.productionTip = false;

console.log('index.ts')
console.log(App)

new Vue({
  render: (h) => h(App),
}).$mount('#app');