<template>
  <div id="focus" class="focus banner clear">
    <div class="hd">
      <ul>
        <li></li>
      </ul>
    </div>
    <div class="bd">
      <ul>
        <li><a href="javascript:;"><img src="../assets/img/banner.png" width="100%" height="100%"></a></li>
        <li><a href="javascript:;"><img src="../assets/img/banner1.png" width="100%" height="100%"></a></li>
        <li><a href="javascript:;"><img src="../assets/img/banner2.png" width="100%" height="100%"></a></li>
        <li><a href="javascript:;"><img src="../assets/img/banner.png" width="100%" height="100%"></a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    mounted(){
      //banner
      TouchSlide({
        slideCell:"#focus",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul",
        effect:"leftLoop",
        autoPlay:true,//自动播放
        autoPage:true, //自动分页
        switchLoad:"_src" //切换加载，真实图片路径为"_src"
      });
    }
  }
</script>