<template>
  <div class="search">
    <label id="search-wrap" class="search-wrap">
      <input id="search-input" class="search-input"style="color: #999999;" type="text" name="address"  value="请输入关键词搜索" onfocus="if(this.value=='请输入关键词搜索'){this.value=''};this.style.color='#999999';"
             onblur="if(this.value==''||this.value=='请输入关键词搜索'){this.value='请输入关键词搜索'};this.style.color='#999999';">
      <button id="search-button" class="search-button" type="submit">
        <img src="../assets/img/search.png"/>
      </button>
    </label>
  </div>
</template>