<template>
  <div class="newcon">
    <h1 class="new-contit font30">{{newscontent.title}}</h1>
    <span class="font18 new-contime">{{newscontent.time}}&nbsp;&nbsp;{{newscontent.source}}</span>
    <span class="new-picwrap">
				<img src="../assets/img/new-pic.png" alt="" />
			</span>
    <div class="new-textwrap font24" v-html="newscontent.contents"></div>
    <div class='page-wrap'>
      <a href="javascript:;" class=" page-item page-prev fontcolor-40 font24">下一篇：张小龙刚刚在朋友圈秀了一张照片，小程序“炸裂”了</a>
      <a href="javascript:;" class=" page-item page-next fontcolor-40 font24">上一篇：关于“罗一笑”捐款文刷屏的一些思考</a>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        newscontent:{}
      }
    },
    mounted(){
      let url = '../src/data/new3.json';
      this.$http.get(url).then((res)=>{
        console.log(res.data);
        this.newscontent = res.data.newscontent[this.$route.params.aid];
      }).catch((res)=>{
        alert(res.state);
      })
    }
  }
</script>