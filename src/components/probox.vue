<template>
  <div class="probox">
    <div class="product-picwrap">
      <router-link class="product-item" tag="a" :to="{name:'procon',params:{aid:index}}"
                   v-for="(val,index) in arr">
          <span class="product-picbox">
						<img :src="val.img"/>
					</span>
        <p class="product-text font24 fontwhite">{{val.name}}</p>
      </router-link>
    </div>
    <div class="page-wrap font24 page-center">
      <a href="javascript:;" class=" fontcolor-40 page-item page-prev page-float">上一页</a>
      <a href="javascript:;" class=" fontcolor-40 page-item page-float">1</a>
      <a href="javascript:;" class=" fontcolor-40 page-item page-float">2</a>
      <a href="javascript:;" class=" fontcolor-40 page-item page-float">3</a>
      <a href="javascript:;" class=" fontcolor-40 page-item page-float">4</a>
      <a href="javascript:;" class=" fontcolor-40 page-item page-next page-float">下一页</a>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        arr:[
          {name:'产品展示图一',img:'/src/assets/img/product-pic1.png'},
          {name:'产品展示图二',img:'/src/assets/img/product-pic2.png'},
          {name:'产品展示图三',img:'/src/assets/img/product-pic3.png'},
          {name:'产品展示图四',img:'/src/assets/img/product-pic2.png'},
        ]
      }
    }
  }
</script>