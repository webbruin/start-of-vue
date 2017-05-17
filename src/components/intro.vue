<template>
  <div class="intro">
    <section>
      <div class="comp-titwrap">
        <span class="font40 comp-line comp-float"></span>
        <span class="font40 comp-tit comp-float">公司介绍</span>
        <span class="font40 comp-line comp-floatr"></span>
        <div class="clearfix"></div>
      </div>
      <companybox></companybox>
    </section>
  </div>
</template>
<script>
  import companybox from './companybox.vue';
  export default {
    components:{
      companybox
    }
  }
</script>