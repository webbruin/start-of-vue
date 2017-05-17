<template>
  <div class="news-box">
    <ul class="news-wrap">
      <a class="font40 fontwhite new-tit index-newscur" href="javascript:;"><li>工作环境</li></a>
      <a class="font40 fontwhite new-tit" href="javascript:;"><li>员工照片</li></a>
      <a class="font40 fontwhite new-tit" href="javascript:;"><li>厂房一角</li></a>
      <div class="clearfix"></div>
    </ul>
    <div class="news-newtitwrap">
      <div class="news-titwrap">
        <router-link class="product-item" tag="a" :to="{name:'procon',params:{aid:index}}"
                     v-for="(val,index) in arr1">
          <span class="product-picbox">
            <img :src="val.img"/>
          </span>
          <p class="product-text font24 fontwhite">{{val.name}}</p>
        </router-link>
      </div>
      <div class="news-titwrap box-hidden">
        <router-link class="product-item" tag="a" :to="{name:'procon',params:{aid:index}}"
                     v-for="(val,index) in arr2">
          <span class="product-picbox">
            <img :src="val.img"/>
          </span>
          <p class="product-text font24 fontwhite">{{val.name}}</p>
        </router-link>
      </div>
      <div class="news-titwrap box-hidden">
        <router-link class="product-item" tag="a" :to="{name:'procon',params:{aid:index}}"
                     v-for="(val,index) in arr3">
          <span class="product-picbox">
            <img :src="val.img"/>
          </span>
          <p class="product-text font24 fontwhite">{{val.name}}</p>
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
        arr1:[
          {name:'公司相册一',img:'src/assets/img/product-pic1.png'},
          {name:'公司相册二',img:'src/assets/img/product-pic2.png'},
          {name:'公司相册三',img:'src/assets/img/product-pic3.png'},
          {name:'公司相册四',img:'src/assets/img/product-pic1.png'}
        ],
        arr2:[
          {name:'公司相册二',img:'src/assets/img/product-pic2.png'},
          {name:'公司相册一',img:'src/assets/img/product-pic1.png'},
          {name:'公司相册三',img:'src/assets/img/product-pic3.png'},
          {name:'公司相册四',img:'src/assets/img/product-pic1.png'}
        ],
        arr3:[
          {name:'公司相册三',img:'src/assets/img/product-pic3.png'},
          {name:'公司相册一',img:'src/assets/img/product-pic1.png'},
          {name:'公司相册二',img:'src/assets/img/product-pic2.png'},
          {name:'公司相册四',img:'src/assets/img/product-pic1.png'}
        ]
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
    }
  }
</script>