import { createApp } from 'vue';

import mkui from '@/plugins/melkor';
import App from '@/TheApp.vue';

const app = createApp(App);

app.use(mkui);

app.mount('#app');
