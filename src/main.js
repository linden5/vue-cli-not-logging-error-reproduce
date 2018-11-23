import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let req = require.context('./undefined', false, /.css/ig)

function importAll(r) {
  r.keys().forEach(r)
}
importAll(req)

new Vue({
  render: h => h(App),
}).$mount('#app')