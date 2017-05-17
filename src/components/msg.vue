<template>
  <div class="comp-titwrap msg">
    <span class="font40 comp-line comp-float"></span>
    <span class="font40 comp-tit comp-float">在线留言</span>
    <span class="font40 comp-line comp-floatr"></span>
    <div class="clearfix"></div>
    <msgbox></msgbox>
  </div>
</template>
<script>
  import msgbox from './msgbox.vue';
  export default {
    components:{
      msgbox
    }
  }
</script>