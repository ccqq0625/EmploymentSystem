import Vue from "vue";
import VueRouter from "vue-router";

const Home =() => import('../views/home/Home');
const test =() => import('../views/test/test');
Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path:'/test',
    component:test
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
