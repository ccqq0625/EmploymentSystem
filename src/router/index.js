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
const index2017=()=> import('../views/bigDataShow/index2017.vue')
const index20171=()=> import('../views/bigDataShow/index20171.vue')
const index20172=()=> import('../views/bigDataShow/index20172.vue')
const index20173=()=> import('../views/bigDataShow/index20173.vue')
const index2018=()=> import('../views/bigDataShow/index2018.vue')
const index20181=()=> import('../views/bigDataShow/index20181.vue')
const index20182=()=> import('../views/bigDataShow/index20182.vue')
const index20183=()=> import('../views/bigDataShow/index20183.vue')
const index2019=()=> import('../views/bigDataShow/index2019.vue')
const index20191=()=> import('../views/bigDataShow/index20191.vue')
const index20192=()=> import('../views/bigDataShow/index20192.vue')
const index20193=()=> import('../views/bigDataShow/index20193.vue')
const index2020=()=> import('../views/bigDataShow/index2020.vue')
const index20201=()=> import('../views/bigDataShow/index20201.vue')
const index20202=()=> import('../views/bigDataShow/index20202.vue')
const index20203=()=> import('../views/bigDataShow/index20203.vue')
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
    path: '/pro2017',
    name: 'index2017',
    component: index2017,
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
  },
  {
    path: '/pro2018',
    name: 'index2018',
    component: index2018,
  },
  {
    path: '/pro20181',
    name: 'index20181',
    component: index20181,
  },
  {
    path: '/pro20182',
    name: 'index20182',
    component: index20182,
  },
  {
    path: '/pro20183',
    name: 'index20183',
    component: index20183,
  },
  {
    path: '/pro2019',
    name: 'index2019',
    component: index2019,
  },
  {
    path: '/pro20191',
    name: 'index20191',
    component: index20191,
  },
  {
    path: '/pro20192',
    name: 'index20192',
    component: index20192,
  },
  {
    path: '/pro20193',
    name: 'index20193',
    component: index20193,
  },
  {
    path: '/pro2020',
    name: 'index2020',
    component: index2020,
  },
  {
    path: '/pro20201',
    name: 'index20201',
    component: index20201,
  },
  {
    path: '/pro20202',
    name: 'index20202',
    component: index20202,
  },
  {
    path: '/pro20203',
    name: 'index20203',
    component: index20203,
  },
 
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
