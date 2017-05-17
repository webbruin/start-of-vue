<template>
  <div class="navbar">
    <nav>
				<span class="nav-item menu" id="open-icon">
					<img src="../assets/img/menu.png"/>
				</span>
      <span class="nav-item logo">
					<img src="../assets/img/logo.png"/>
				</span>
      <span class="nav-item admin">
					<img src="../assets/img/people.png"/>
				</span>
      <div class="clearfix"></div>
    </nav>
    <ul class="nav-list" id="nav-list" >
      <router-link class="font40" tag="a" v-for="(val,index) in arr" :to="val.routers">
        <li class="navlist-item" @click="show">{{val.name}}</li>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        arr:[
          {routers:'/home',name:'公司首页'},
          {routers:'/intro',name:'公司简介'},
          {routers:'/special',name:'精彩专题'},
          {routers:'/news',name:'新闻中心'},
          {routers:'/product',name:'产品展示'},
          {routers:'/photo',name:'公司相册'},
          {routers:'/msg',name:'在线留言'},
          {routers:'/contact',name:'联系我们'},
        ]
      }
    },
    methods:{
      show:()=>{
        scrollTo(0,0)
      }
    },
    mounted(){
      /*导航展开收起效果代码*/
      $(document).ready(function () {
        $("#open-icon").click(function () {
          $("#nav-list").slideToggle();
        });
      });
      $(document).ready(function () {
        $("#nav-list>a").click(function () {
          $("#nav-list").slideToggle();
        });
      });
    }
  }
</script>