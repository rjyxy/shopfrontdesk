<template>
  <div class="banner">
    <div class="mr-slider mr-slider-default scoll" data-mr-flexslider id="demo-slider-0">
      <div id="box">
        <ul id="imagesUI" class="list">
          <transition-group name="fade" tag="div">
            <li v-for="(v,i) in banners" :key="v" v-show="(i+1)==index ? true:false"><img :src="v"></li>
          </transition-group>
        </ul>
        <ul id="btnUI" class="count">
          <li v-for="num in 4" :key="num" @mouseover='change(num)' :class='{current:num==index}'>
            {{num}}
          </li>
        </ul>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name:'IndexBanner',
  data: function (){
    return {
      banners :[//广告图片数组
          require('@/assets/images/ad1.png'),
          require('@/assets/images/ad2.png'),
          require('@/assets/images/ad3.png'),
          require('@/assets/images/ad4.png')
      ],
      index:1, //图片索引
      flag:true,
      timer: '',  //计时器
    }
  },
  methods:{
    next:function (){
    //   下一张图片，图片索引为4时返回第一张
      this.index = this.index+1 == 5 ? 1 :this.index+1;
    },
    change : function (num) {
    //   鼠标一如按钮切换到对应照片
      if(this.flag) {
        this.flag = false;
      //   过一秒后再次一如按钮切换图片
        setTimeout(()=>{
          this.flag = true;
        },1000);
        // 切换选中的图片
        this.index = num;
        // 取消定时器
        clearTimeout(this.timer);
      //   过三秒图片轮换
        this.timer = setInterval(this.next,3000);
      }
    }
  },
  mounted :function (){
  //   过3秒图片轮换
    this.timer = setInterval(this.next,3000);
  }
}
</script>

<style lang="scss" scoped>
  #box {
    position: relative;/*相对定位*/
    width: 100%;/*宽度*/
    height: 455px;/*高度*/
    background: #fff;/*背景*/
    border-radius: 5px;/*圆角边框*/
  }
  #box.list{
    position: relative;/*相对定位*/
    height: 455px;/*高度*/
  }
  @media only screen and (min-width: 1450px){
    #box.list li {
      width: 50%;/*宽度*/
      height: 50%;/*高度*/
      margin: auto;/*外边距*/
      margin-top: 0;/*上外边距*/
      position: absolute;/*绝对定位*/
      top:0;/*父元素顶端的距离*/
      left: 0;/*父左*/
      bottom: 0;/*父底*/
      right: 0;/*父右*/
    }
    #box.count{
      position: absolute;/*相对定位*/
      left: 900px;/*父左*/
      bottom: 5px;/*父底*/
    }
  }
  @media screen and (min-width: 800px) and (max-width: 1450px) {
    #box.list li {
      width: 50%;/*宽度*/
      height: 50%;/*高度*/
      margin: auto;/*外边距*/
      margin-top: 0;/*上外边距*/
      position: absolute;/*绝对定位*/
      top:0;/*父元素顶端的距离*/
      left: -100px;/*父左*/
      bottom: 0;/*父底*/
      right: 0;/*父右*/
    }
    #box.list.li img{
      width: 120%;/*宽度*/
    }
    #box.count{
      position: absolute;/*相对定位*/
      left: 700px;/*父左*/
      bottom: 5px;/*父底*/
    }
  }
  @media screen and (max-width: 400px){
    #box{
      display: none;/*设置元素隐藏*/
    }
  }
  #box.list.li.current {
    opacity: 1;/*元素完全不透明*/
  }
  #box.count.li {
    color: #fff;/*字体颜色*/
    float: left;/*左浮动*/
    width: 20px;/*宽度*/
    height: 20px;/*高度*/
    line-height: 20px;/*行高*/
    text-align: center;/*文本居中*/
    cursor: pointer;/*鼠标光标显示*/
    margin-right: 5px;/*右边距*/
    overflow: hidden;/*溢出部分隐藏*/
    background: #6D6B6A;
    opacity: 0.7;/*不透明度*/
    border-radius: 20px;/*圆角边框*/
  }
  #box.list.li.current {
    color: #fff;/*字体颜色*/
    opacity: 0.7;/*元素完全不透明*/
    font-weight: 700;/*文字粗细*/
    background: #f60;
    transition: all .6s ease;/*过渡效果*/
  }
  /*过渡属性*/
  .fade-enter-active, .fade-enter-active{
    transition: all 1s;
  }
  .fade-enter,.fade-leave-to{
    opacity: 0;
  }
</style>