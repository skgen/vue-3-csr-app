import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from '@/plugins/router';
import i18n from '@/plugins/i18n';
import mkui from '@/plugins/melkor';
import App from '@/TheApp.vue';

import '@style/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(mkui);

app.mount('#app');
