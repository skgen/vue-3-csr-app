import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'normalize.css';
import 'github-markdown-css';
import '@/assets/scss/main.scss';
import i18n from '@/plugins/i18n';
import '@/lib/modules/i18n';

import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount('#app');
