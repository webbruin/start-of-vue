<template>
  <div id="app">
    <loading v-show="loadingState"></loading>
    <heads></heads>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view class="aa"></router-view>
    </transition>
    <tails></tails>
  </div>
</template>

<script>
  import './assets/js/jquery-1.8.3.min';
  import heads from './components/heads.vue';
  import tails from './components/tails.vue';
  import home from './components/home.vue';
  import {mapGetters} from 'vuex';
  export default {
    name: 'app',
    data () {
      return {

      }
    },
    mounted(){
      this.$store.dispatch('hideLoading');
      window.onload=window.onresize=function(){
          document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px'
      };

      /*新闻中心导航切换效果*/
      $(function(){
        $(".news-wrap a").click(
          function(){
            $(this).addClass("index-newscur").siblings().removeClass("index-newscur");
          });
      });
      $(function(){
        $('.news-wrap .new-tit').click(function(){
          var $a=$(this).index();//获取序列号
          $('.news-newtitwrap>div').eq($a).show().siblings().hide();
        });
      });
    },
    components:{
      heads,tails,home
    },
    computed:mapGetters(
      ['loadingState']
    )
  }
</script>

<style>

</style>
