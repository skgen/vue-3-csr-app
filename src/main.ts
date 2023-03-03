import { createApp } from 'vue';
import { createMelkorUi } from '@patriarche/melkor';
import { createPinia } from 'pinia';

import '@patriarche/melkor/style';
import '@/assets/scss/main.scss';

import i18n from '@/plugins/i18n';
import router from '@/plugins/router';

import App from '@/App.vue';

const app = createApp(App);

const mkui = createMelkorUi({
  i18n,
  router,
});
app.use(mkui);

app.use(createPinia());

app.mount('#app');
