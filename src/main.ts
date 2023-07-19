import { createApp } from 'vue';
import { createPinia } from 'pinia';

import mkuiPlugin from '@/plugins/melkor';
import App from '@/TheApp.vue';

import '@/assets/scss/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(mkuiPlugin());

app.mount('#app');
