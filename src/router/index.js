import Vue from "vue";
import VueRouter from "vue-router";

const Home =() => import('../views/home/Home');
const test =() => import('../views/test/test');
const Post=() => import('../views/Post/Post');
const PostMatch=() => import('../views/postmatch/PostMatch');
const Login=() =>import('../views/login/Login');
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
    path:'/post',
    component:Post,
  },
  {
    path:"/postmatch",
    component:PostMatch,
  },
  {
    path:"/login",
    component:Login,
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

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router;
