<template>
  <div class="comp-titwrap contact">
    <span class="font40 comp-line comp-float"></span>
    <span class="font40 comp-tit comp-float">在线留言</span>
    <span class="font40 comp-line comp-floatr"></span>
    <div class="clearfix"></div>

    <locations></locations>

    <div class="contact-wrap">
      <p class="contact-item font30">联系方式</p>
      <p class="contact-item font30">电话：0539-8800978</p>
      <p class="contact-item font30">Q Q：2254898878</p>
      <p class="contact-item font30">微信：sdlwkj</p>
      <p class="contact-item font30">地址：临沂市经开区中印软件产业园（临沂云计算中心）</p>
    </div>
  </div>
</template>
<script>
  import locations from './locations.vue';
  export default {
    components:{
      locations
    }
  }
</script>