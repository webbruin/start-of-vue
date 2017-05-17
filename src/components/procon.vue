<template>
  <div class="procon">
    <div class="comp-titwrap">
      <span class="font40 comp-line comp-float"></span>
      <span class="font40 comp-tit comp-float">产品展示</span>
      <span class="font40 comp-line comp-floatr"></span>
      <div class="clearfix"></div>
      <div class="product-picwrap">
				<span class="product-item">
					<span class="product-picbox">
						<img :src="obj.img"/>
					</span>
					<p class="product-text font24 fontwhite">{{obj.name}}</p>
				</span>
      </div>
      <ul class="product-notewrap" v-html="obj.products"></ul>
      <div class="product-textwrap font24" v-html="obj.contents"></div>
      <div class="page-wrap">
        <a href="javascript:;" class=" page-item page-prev fontcolor-40 font24">下一篇：张小龙刚刚在朋友圈秀了一张照片，小程序“炸裂”了</a>
        <a href="javascript:;" class=" page-item page-next fontcolor-40 font24">上一篇：关于“罗一笑”捐款文刷屏的一些思考</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        obj:{}
      }
    },
    mounted(){
      let url = '../src/data/articles.json';
      this.$http.get(url).then((res)=>{
        this.obj = res.data.articles[this.$route.params.aid];
      }).catch((res)=>{
        alert(res.state);
      })
    }
  }
</script>