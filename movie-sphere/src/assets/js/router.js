import { createRouter, createWebHistory } from 'vue-router';
import SiteHeroSection from '@/components/SiteHeroSection.vue';
import MovieDetails from '@/components/MovieDetails.vue';

const routes = [
  { path: '/', name: 'Home', component: SiteHeroSection },
  { path: '/movie/:id', name: 'MovieDetails', component: MovieDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;