import Vue from "vue";
import VueRouter from "vue-router";



const Home =() => import('../views/home/Home');
const test =() => import('../views/test/test');
const Post=() => import('../views/Post/Post');
const PostMatch=() => import('../views/postmatch/PostMatch');
//const School=() => import('../components/School');
const Index= () =>import('../components/College/index.vue');
const Co1Main=() => import('../components/College/Com/Co1Main');
const Co2Main=() => import('../components/College/Com/Co2Main');
const Co3Main=() => import('../components/College/Com/Co3Main');
const Co11Main=() => import('../components/College/Com/Co11Main');
const Co12Main=() => import('../components/College/Com/Co12Main');
const Co21Main=() => import('../components/College/Com/Co21Main');
const Co22Main=() => import('../components/College/Com/Co22Main');
const Co31Main=() => import('../components/College/Com/Co31Main');
const Co32Main=() => import('../components/College/Com/Co32Main');
const Login=() =>import('../views/login/Login');
const Register=() =>import('../views/register/Register');
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    name:'Home',
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
    path:'/show',
    component:Index,
  },
  {
    path: '/College/Com/Co1Main',
    name: 'Co1Main',
    component: Co1Main,
  },
  {
    path: '/College/Com/Co1/Co11Main',
    name: 'Co11Main',
    component: Co11Main
  },
  {
    path: '/College/Com/Co1/Co12Main',
    name: 'Co12Main',
    component: Co12Main
  },
  {
    path: '/College/Com/Co2Main',
    name: 'Co2Main',
    component: Co2Main
  },
  {
    path: '/College/Com/Co2/Co21Main',
    name: 'Co21Main',
    component: Co21Main
  },
  {
    path: '/College/Com/Co2/Co22Main',
    name: 'Co22Main',
    component: Co22Main
  },
  {
    path: '/College/Com/Co3Main',
    name: 'Co3Main',
    component: Co3Main
  },
  {
    path: '/College/Com/Co3/Co31Main',
    name: 'Co31Main',
    component: Co31Main
  },
  {
    path: '/College/Com/Co3/Co32Main',
    name: 'Co32Main',
    component: Co32Main
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
  mode:'history',
  base:'/dist/'
});

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

//以下代码估计没啥用
// 跳转之后重置界面大小
router.afterEach((to, from) => {
  // 基准
  const baseSize = 16
  // 设置 rem 函数
  function setRem() {
    // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / 1920
    // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
  }
  setRem()
})

export default router;
