<template>
  <div class="backtop">
    <a class="font40" id="return" href="javascript:;" @click="tops">
      返回顶部
    </a>
  </div>
</template>
<script>
  export default {
    methods:{
      tops:()=>{
        scrollTo(0,0);
      }
    }
  }
</script>