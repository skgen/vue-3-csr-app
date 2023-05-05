import TheHomeView from '@/app/views/TheHomeView.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: TheHomeView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/app/views/TheNotFoundView.vue'),
  },
];
