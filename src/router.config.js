import home from './components/home.vue';
import intro from './components/intro.vue';
import news from './components/news.vue';
import product from './components/product.vue';
import photo from './components/photo.vue';
import msg from './components/msg.vue';
import contact from './components/contact.vue';
import newcon from './components/newcon.vue';
import procon from './components/procon.vue';
import special from './components/special.vue';
import error from './components/error.vue';

const routes = [
  {path:'/home',component:home},
  {path:'/intro',component:intro},
  {path:'/news',component:news},
  {path:'/product',component:product},
  {path:'/msg',component:msg},
  {path:'/contact',component:contact},
  {path:'/photo',component:photo},
  {path:'/special',component:special},
  {name:'newcon',path:'/newcon/:aid',component:newcon},
  {name:'procon',path:'/procon/:aid',component:procon},
  {path:'/',redirect:'/home'},
  {path:'*',component:error},
];

export default {
  routes
}
