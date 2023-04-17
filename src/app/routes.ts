import HomeView from '@/app/views/TheHomeView.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/app/views/TheNotFoundView.vue'),
  },
];
