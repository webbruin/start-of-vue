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
        <router-link class="news-tititem" tag="a" :to="{name:'newcon',params:{aid:index}}"
                     v-for="(val,index) in arr1">
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
    <!--<a href="new-center.html" class="font30 more-icon news-moreicon">查看更多&gt;</a>-->
    <router-link class="font30 more-icon news-moreicon" to="/news">查看更多&gt;</router-link>
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
      /*新闻中心导航切换效果*/
      $(function(){
        $(".news-wrap a").click(
          function(){
            $(this).addClass("index-newscur").siblings().removeClass("index-newscur");
          });
      });
      $(function(){
        $('.news-wrap .new-tit').click(function(){
          var $a=$(this).index();//获取序列号
          $('.news-newtitwrap>div').eq($a).show().siblings().hide();
        });
      });

      //axios拿数据
      let url = '../src/data/new1.json';
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