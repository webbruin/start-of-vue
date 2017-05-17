<template>
  <div class="heads">
    <header>
      <navbar></navbar>
      <!--<banner class="banner clear">-->
      <slider v-show="sliderState"></slider>
      <!--</banner>-->
    </header>
  </div>
</template>
<script>
  import navbar from './navbar.vue';
  import slider from './slider.vue';
  import {mapGetters} from 'vuex';
  export default {
    components:{
      navbar,slider
    },
    computed:mapGetters(
      ['sliderState']
    ),
    mounted(){
      this.routeChange(this.$route.path);
    },
    watch:{
      $route(to){
        this.routeChange(to.path);
      }
    },
    methods:{
      routeChange(path){
        if(path == '/intro' ||
          path == '/photo' ||
          path.indexOf('/newcon')!=-1 ||
          path.indexOf('/procon')!=-1
        ){
          this.$store.dispatch('hideSlider');
        }else{
          this.$store.dispatch('showSlider');
        }
      }
    }
  }
</script>