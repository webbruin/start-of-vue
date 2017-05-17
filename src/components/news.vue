<template>
  <div class="news">
    <section>
      <div class="comp-titwrap">
        <span class="font40 comp-line comp-float"></span>
        <span class="font40 comp-tit comp-float">新闻中心</span>
        <span class="font40 comp-line comp-floatr"></span>
        <div class="clearfix"></div>
      </div>
      <newsbox2></newsbox2>
    </section>
  </div>
</template>
<script>
  import newsbox2 from './newsbox2.vue';
  export default {
    components:{
      newsbox2
    }
  }
</script>