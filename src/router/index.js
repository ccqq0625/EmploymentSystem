import Vue from "vue";
import VueRouter from "vue-router";

const Home =() => import('../views/home/Home');
const test =() => import('../views/test/test');
const Post=() => import('../views/Post/Post');
const PostMatch=() => import('../views/postmatch/PostMatch');
const Login=() =>import('../views/login/Login');
const Register=() =>import('../views/register/Register');
Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta:{
      navShow:true
    }
  },
  {
    path:'/post',
    component:Post,
    meta:{
      navShow:true
    }
  },
  {
    path:"/postmatch",
    component:PostMatch,
    meta:{
      navShow:true
    }
  },
  {
    path:"/login",
    component:Login,
    meta:{
      navShow:false
    }
  },
  {
    path:"/register",
    component:Register,
    meta:{
      navShow:false
    }
  },
  {
    path:'/test',
    component:test,
    meta:{
      navShow:true
    }

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
