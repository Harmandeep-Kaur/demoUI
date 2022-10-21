import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import store from "./store"
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import 'vue-tel-input/dist/css/sprite.css'; // Flags styles
import 'vue-tel-input/dist/css/component.css';  // Component styles

createApp(App).use(Quasar, quasarUserOptions).use(store).use(VueTelInput).mount('#app')
