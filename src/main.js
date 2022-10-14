import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, {
    config: {
        loading: {}
    }
}, quasarUserOptions).use(store).mount('#app')
