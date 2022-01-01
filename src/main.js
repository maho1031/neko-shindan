import Vue from 'vue'
import App from './App.vue'
import MainContent from './components/MainContent.vue';
import MainResult from './components/MainResult.vue';
import MainStart from './components/MainStart.vue';


Vue.config.productionTip = false
Vue.component("MainContent", MainContent);
Vue.component("MainResult", MainResult);
Vue.component("MainStart", MainStart);



new Vue({
  render: h => h(App),
}).$mount('#app')
