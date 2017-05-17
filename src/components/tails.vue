<template>
  <div class="tails">
    <footer>
      <backtop></backtop>
      <footbar></footbar>
    </footer>
  </div>
</template>
<script>
  import backtop from './backtop.vue';
  import footbar from './footbar.vue';
  export default {
    components:{
      backtop,footbar
    }
  }
</script>