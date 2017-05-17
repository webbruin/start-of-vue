<template>
  <div class="home">
    <section>
      <!--	<form action="" method="post" target="_blank">-->
      <search></search>
      <!--</form>-->
      <companybox></companybox>
      <newsbox></newsbox>
      <productbox></productbox>
    </section>
  </div>
</template>
<script>
  import search from './search.vue';
  import companybox from './companybox.vue';
  import newsbox from './newsbox.vue';
  import productbox from './productbox.vue';
  export default {
    components:{
      search,companybox,newsbox,productbox
    }
  }
</script>