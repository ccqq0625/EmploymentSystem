import { Select } from "element-ui";
import Vue from "vue";
import VueRouter from "vue-router";



const Home =() => import('../views/home/Home');
const StuInfo=() => import('../views/info/StuInfo');
const ComInfo=() => import('../views/info/ComInfo')
//const Post=() => import('../views/Post/Post');
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
const pdfMain=() => import('../views/info/pdfMain');
const pdf=() => import('../views/postmatch/pdf');
const BigScreen=()=> import('../views/bigDataShow/index.vue')
const index20171=()=> import('../views/bigDataShow/index20171.vue')
const index20172=()=> import('../views/bigDataShow/index20172.vue')
const index20173=()=> import('../views/bigDataShow/index20173.vue')
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
  // {
  //   path:'/post',
  //   component:Post,
  //   meta:{
  //     navShow:true
  //   }
  // },
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
    path:'/StuInfo',
    component:StuInfo,
    meta:{
      navShow:true
    }

  },
  {
    path:'/ComInfo',
    component:ComInfo,
    meta:{
      navShow:true
    }
  },
  {
    path:'/pdfMain',
    component:pdfMain,
    meta:{
      navShow:false
    }
  },
  {
    path:'/pdf',
    component:pdf,
    meta:{
      navShow:false
    }
  },
  {
    path:'/bigScreen',
    component:BigScreen,
    meta:{
      navShow:false
    }
  },
  {
    path: '/pro20171',
    name: 'index20171',
    component: index20171,
  },
  {
    path: '/pro20172',
    name: 'index20172',
    component: index20172,
  },
  {
    path: '/pro20173',
    name: 'index20173',
    component: index20173,
  }
 
];

const router = new VueRouter({
  routes,
  mode:'history',
  base:'/employmentsystem/'
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
