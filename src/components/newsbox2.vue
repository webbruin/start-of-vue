<template>
  <div class="newsbox">
    <ul class="news-wrap">
      <a class="font40 fontwhite new-tit index-newscur" href="javascript:;"><li>行业新闻</li></a>
      <a class="font40 fontwhite new-tit" href="javascript:;"><li>公司动态</li></a>
      <a class="font40 fontwhite new-tit" href="javascript:;"><li>专题报道</li></a>
      <div class="clearfix"></div>
    </ul>
    <div class="news-newtitwrap">
      <div class="news-titwrap">
        <router-link class="news-tititem" tag="a" to="/newcon" v-for="(val,index) in arr1"
                     :to="{name:'newcon',params:{aid:index}}"
        >
          <span class="news-titleft font20">{{val.title}}</span>
          <span class="news-titright font18">{{val.time}}</span>
          <div class="clearfix"></div>
        </router-link>
      </div>
      <div class="news-titwrap box-hidden">
        <router-link class="news-tititem" tag="a" to="/newcon" v-for="(val,index) in arr2"
                     :to="{name:'newcon',params:{aid:index}}"
        >
          <span class="news-titleft font20">{{val.title}}</span>
          <span class="news-titright font18">{{val.time}}</span>
          <div class="clearfix"></div>
        </router-link>
      </div>
      <div class="news-titwrap box-hidden">
        <router-link class="news-tititem" tag="a" to="/newcon" v-for="(val,index) in arr3"
                     :to="{name:'newcon',params:{aid:index}}"
        >
          <span class="news-titleft font20">{{val.title}}</span>
          <span class="news-titright font18">{{val.time}}</span>
          <div class="clearfix"></div>
        </router-link>
      </div>
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
        arr1:[],
        arr2:[],
        arr3:[]
      }
    },
    mounted(){
      //axios拿数据
      let url = '../src/data/new2.json';
      this.$http.get(url).then((res)=>{
        this.arr1=res.data.obj1;
        this.arr2=res.data.obj2;
        this.arr3=res.data.obj3;
      }).catch((res)=>{
        console.log(res.state);
      })
    }
  }
</script>