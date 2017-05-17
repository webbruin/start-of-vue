<template>
  <div class="photo">
    <section>
      <div class="comp-titwrap">
        <span class="font40 comp-line comp-float"></span>
        <span class="font40 comp-tit comp-float">公司相册</span>
        <span class="font40 comp-line comp-floatr"></span>
        <div class="clearfix"></div>
      </div>
      <photobox></photobox>
    </section>
  </div>
</template>
<script>
  import photobox from './photobox.vue';
  export default {
    components:{
      photobox
    }
  }
</script>