<template>
  <div id="youLike" class="mr-tab-panel">
    <div class="like">
      <ul class="mr-avg-sm-2 mr-avg-md-3 mr-avg-lg-4 boxes">
        <li>
          <div class="i-pic limit">
            <img src="@/assets/images/phone3.jpg">
            <p>华为Mate 50 直屏旗舰 128GB曜金黑华为鸿蒙手机</p>
            <p class="price fl">
              <b>￥</b>
              <strong>4999.00</strong>
            </p>
          </div>
        </li>
        <li>
          <div class="i-pic limit">
            <img src="@/assets/images/phone2.jpg">
            <p>小米13 12GB+256GB 徕卡光学镜头 黑色 5G手机</p>
            <p class="price fl">
              <b>￥</b>
              <strong>4299.00</strong>
            </p>
          </div>
        </li>
        <li>
          <div class="i-pic limit">
            <img src="@/assets/images/phone4.jpg">
            <p>荣耀80 8GB+256GB 1.6亿像素超清主摄 5G手机</p>
            <p class="price fl">
              <b>￥</b>
              <strong>2799.00</strong>
            </p>
          </div>
        </li>
        <li>
          <div class="i-pic limit">
            <img src="@/assets/images/phone7.jpg" alt="">
            <p>OPPO K10x 8GB+128GB 高通骁龙695 拍照 5G手机</p>
            <p class="price fl">
              <b>￥</b>
              <strong>1399.00</strong>
            </p>
          </div>
        </li>
        <li>
          <div class="i-pic limit">
            <img src="@/assets/images/shopcartImg.jpg">
            <p>OPPO Find N2 12GB+256GB 表黑 折叠屏手机</p>
            <p class="price fl">
              <b>￥</b>
              <strong>7999.00</strong>
            </p>
          </div>
        </li>
        <li>
          <div class="i-pic limit">
            <img src="@/assets/images/shopcartImg.jpg">
            <p>OPPO Find N2 12GB+256GB 表黑 折叠屏手机</p>
            <p class="price fl">
              <b>￥</b>
              <strong>7999.00</strong>
            </p>
          </div>
        </li>
        <li>
          <div class="i-pic limit">
            <img src="@/assets/images/shopcartImg.jpg">
            <p>OPPO Find N2 12GB+256GB 表黑 折叠屏手机</p>
            <p class="price fl">
              <b>￥</b>
              <strong>7999.00</strong>
            </p>
          </div>
        </li>
        <li>
          <div class="i-pic limit">
            <img src="@/assets/images/shopcartImg.jpg">
            <p>OPPO Find N2 12GB+256GB 表黑 折叠屏手机</p>
            <p class="price fl">
              <b>￥</b>
              <strong>7999.00</strong>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="clear"></div>
    <!--分页-->
    <ul class="mr-pagination mr-pagination-right">
      <li :class="{'mr-disabled':curentPage==1}" @click="jump(curentPage-1)">
        <a href="javascript:void(0)">«</a></li>
      <li :class="{'mr-active':curentPage==n}" v-for="n in pages" :key="n" @click="jump(n)">
        <a href="javascript:void(0)">{{n}}</a></li>
      <li :class="{'mr-disabled':curentPage==pages}" @click="jump(curentPage+1)">
        <a href="javascript:void(0)">»</a></li>
    </ul>
    <div class="clear"></div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        items: [],
        //每页显示个数
        eachNum: 4,
        //当前页数
        curentPage: 1
      }
    },
    mounted: function () {
      //获取所有元素
      this.items = document.querySelectorAll('.like li');
      for (var i = 0;i<this.items.length;i++) {
        if (i<this.eachNum) {
          //显示第一页内容
          this.items[i].style.display = 'block';
        }else {
          //隐藏其他页内容
          this.items[i].style.display = 'none';
        }
      }
    },
    computed: {
      count: function () {
        //元素总数
        return this.items.length;
      },
      pages: function () {
        //总页数
        return Math.ceil(this.count/this.eachNum);
      }
    },
    methods: {
      jump: function (n) {
        this.curentPage = n;
        if (this.curentPage < 1) {
          //页数最小值
          this.curentPage = 1;
        }
        if (this.curentPage > this.pages) {
          //页数最大值
          this.curentPage = this.pages;
        }
        for (var i = 0;i < this.items.length;i++) {
          //隐藏所有元素
          this.items[i].style.display = 'none';
        }
        //每页第一个元素索引
        var start = (this.curentPage -1)*this.eachNum;
        //每页最后一个元素索引
        var end = start + this.eachNum;
        //尾页最后一个元素索引
        end = end > this.count ? this.count : end;
        for (var j=start;j<end;j++) {
          //当前页元素显示
          this.items[j].style.display='block';
        }
      }
    }
  }
</script>
<style src="@/assets/css/optstyle.css" scoped></style>
<style src="@/assets/css/infoStyle.css" scoped></style>

