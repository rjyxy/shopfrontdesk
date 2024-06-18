<script>

export default {
  data: function (){
    return {
      // 缩略图索引
      n: 0,
      // 缩略图数组
      smallImgUrl: [
          require('@/assets/images/01_small.jpg'),
          require('@/assets/images/02_small.jpg'),
          require('@/assets/images/03_small.jpg')
      ],
      // 商品图片数组
      bigImgUrl: [
          require('@/assets/images/01.jpg'),
          require('@/assets/images/02.jpg'),
          require('@/assets/images/03.jpg')
      ]
    }
  },
  methods: {
    mouseEnter: function (){
    //   鼠标进入图片的效果
      document.querySelector('.tool').style.display='block';
      document.querySelector('.bigbox').style.display='block';
    },
    mouseLeave: function (){
    //   鼠标移出图片的效果
      document.querySelector('.tool').style.display='none';
      document.querySelector('.bigbox').style.display='none';
    },
    mouseMove: function (e){
      var enlarge=document.querySelector('.enlarge');
      var tool=document.querySelector('.tool');
      var bigimg=document.querySelector('.bigimg');
      // 获取事件对象
      var ev=window.event || e;
      //   获取图片放大工具到商品图片左端距离
      var x = ev.clientX-enlarge.offsetWidth/2+document.documentElement.scrollLeft;
      //   获取图片放大工具到商品图片顶端距离
      var y = ev.clientY-enlarge.offsetHeight/2+document.documentElement.scrollTop;
      if (x<0) x=0;
      if (y<0) y=0;
      if (x>enlarge.offsetWidth-tool.offsetWidth) {
        // 图片放大工具到图片左端最大距离
        x=enlarge.offsetWidth-tool.offsetWidth;
      }
      if (y>enlarge.offsetHeight-tool.offsetHeight){
        // 图片放大工具到图片顶端最大距离
        y=enlarge.offsetHeight-tool.offsetHeight;
      }
    //   放大镜工具定位
      tool.style.left = x + 'px';
      tool.style.top = y + 'px';
    //   放大图片定位
      bigimg.style.left = -x*2+'px';
      bigimg.style.top = -y*2+'px';
    },
    setIndex: function (index) {
    //   设置缩略图索引
      this.n=index;
    }
  }
}
</script>

<template>
  <div class="clearfixLeft" id="clearcontent">
    <div class="box">
      <div class="enlarge" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @mousemove="mouseMove">
        <img :src="bigImgUrl[n]" title="细节展示放大镜特效">
        <span class="tool"></span>
        <div class="bigbox">
          <img :src="bigImgUrl[n]" class="bigimg">
        </div>
      </div>
      <ul class="tb-thumb" id="thumblist">
        <li :class="{selected:n == index}" v-for="(item,index) in smallImgUrl" :key="index"
            @mouseover="setIndex(index)">
          <div class="tb-pic tb-s40">
            <a href="javascript:void(0)"><img :src="item"></a>
          </div>
        </li>
      </ul>
    </div>
    <div class="clear"></div>
  </div>
</template>

<style src="@/assets/css/optstyle.css" scoped></style>
<style src="@/assets/css/infoStyle.css" scoped></style>
<style scoped>
  .enlarge{
    border: 1px solid #CDCDCD;
    position: relative;
    width: 400px;
    height: 400px;
  }
  .tool{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background: goldenrod;
    opacity: 0.6;
    cursor: move;
  }
  .bigbox{
    width: 400px;
    height: 400px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 410px;
    z-index: 1;
    display: none;
  }
  .bigbox img{
    width: 800px;
    height: 800px;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>