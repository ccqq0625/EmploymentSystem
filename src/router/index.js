import Vue from "vue";
import VueRouter from "vue-router";


// import Each from '@/components/Each'
// import Picture from '@/components/Picture'
// import Pic1 from '@/components/Pic1'
// import Pic2 from '@/components/Pic2'
// import School from '@/components/School'
// import Physical from '@/components/College/Physical'
// import Phy1 from '@/components/College/Phy/Phy1'
// import Computer from '@/components/College/Computer'
// import Co1 from '@/components/College/Com/Co1'
//import Co2 from '@/components/College/Com/Co2'
// import Co3 from '@/components/College/Com/Co3'
//import Co11 from '@/components/College/Com/Co11'

const Home =() => import('../views/home/Home');
const test =() => import('../views/test/test');
const Post=() => import('../views/Post/Post');
const PostMatch=() => import('../views/postmatch/PostMatch');
//const School=() => import('../components/School');
const Computer= () =>import('../components/College/Computer');
const Co1=() => import('../components/College/Com/Co1');
const Co2=() => import('../components/College/Com/Co2');
const Co3=() => import('../components/College/Com/Co3');
const Co11=() => import('../components/College/Com/Co11');
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
    path:'/show',
    component:Computer,
  },
  {
    path: '/College/Com/Co1',
    name: 'Co1',
    component: Co1
  },
  {
    path: '/College/Com/Co2',
    name: 'Co2',
    component: Co2
  },
  {
    path: '/College/Com/Co3',
    name: 'Co3',
    component: Co3
  },
  {
    path: '/College/Com/Co11',
    name: 'Co11',
    component: Co11
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
