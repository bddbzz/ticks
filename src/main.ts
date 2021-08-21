import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import SvgIcon from '@/components/SvgIcon';

const app = createApp(App);
app.component('SvgIcon', SvgIcon);
app.use(router);
app.mount('#app');
