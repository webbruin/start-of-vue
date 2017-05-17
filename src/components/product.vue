<template>
  <div class="product">
    <section>
      <div class="comp-titwrap">
        <span class="font40 comp-line comp-float"></span>
        <span class="font40 comp-tit comp-float">产品展示</span>
        <span class="font40 comp-line comp-floatr"></span>
        <div class="clearfix"></div>
      </div>
      <probox></probox>
    </section>
  </div>
</template>
<script>
  import probox from './probox.vue';
  export default {
    components:{
      probox
    }
  }
</script>