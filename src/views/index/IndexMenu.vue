<template>
  <div>
    <!--侧边导航-->
    <div id="nav" class="navfull">
      <div class="area clearfix">
        <div class="category-content" id="guide_2">
          <div class="category">
            <ul class="category-list" id="js_climit_li">
              <li class="appliance js_toggle relative" v-for="(v,i) in data"
                  :key="i" @mouseover="mouseOver(i)" @mouseout="mouseOut(i)">
                <div class="category-info">
                  <h3 class="category-name b-category-name"><i><img :src="v.url" alt="">
                  </i><a class="ml-22" :title="v.bigtype">{{v.bigtype}}</a></h3>
                  <em></em>
                </div>
                <div class="menu-item menu-in top">
                  <div class="area-in">
                    <div class="area-bg">
                      <div class="menu-srot">
                        <div class="sort-side">
                          <dl class="dl-sort" v-for="v in v.smalltype" :key="v">
                            <dt><span>{{v.name}}</span></dt>
                            <dd v-for="v in v.goods" :key="v"><a href="javascript:void(0)">
                              <span>{{v}}</span>
                            </a></dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <b class="arrow"></b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--小导航-->
    <div class="mr-g mr-g-fixed smallnav">
      <div class="mr-u-sm-3">
        <a href="javascript:void(0)"><img src="@/assets/images/navsmall.jpg" alt=""/>
          <div class="title">商品分类</div>
        </a>
      </div>
      <div class="mr-u-sm-3">
        <a href="javascript:void(0)"><img src="@/assets/images/huismall.jpg" alt=""/>
        <div class="title">大聚惠</div>
        </a>
      </div>
      <div class="mr-u-sm-3">
        <a href="javascript:void(0)"><img src="@/assets/images/mansmall.jpg" alt=""/>
          <div class="mr-u-sm-3">个人中心</div></a>
      </div>
      <div class="mr-u-sm-3">
        <a href="javascript:void(0)"><img src="@/assets/images/moneysmall.jpg" alt=""/>
          <div class="title">投资理财</div>
        </a>
      </div>
    </div>

    <!--走马灯-->
    <div class="marqueen">
      <span class="marqueen-title">商城头条</span>
      <div class="demo">
        <ul>
          <div class="mod-vip">
            <div class="m-baseinfo">
              <a href="javascript:void(0)">
                <img src="@/assets/images/getAvatar.do.jpg" />
              </a>

              <em>
                <a href="javascript:void(0)"><p>点击更多优惠活动</p></a>
              </em>
            </div>
            <div class="member-logout">
              <a class="mr-btn-warning btn" href="javascript:void(0)" @click="show('login')">登录</a>
              <a class="mr-btn-warning btn" href="javascript:void(0)" @click="show('register')">注册</a>
            </div>
            <div class="member-login">
              <a href="javascript:void(0)"><strong>0</strong>待收货</a>
              <a href="javascript:void(0)"><strong>0</strong>待发货</a>
              <a href="javascript:void(0)"><strong>0</strong>待付款</a>
              <a href="javascript:void(0)"><strong>0</strong>待评价</a>
            </div>
            <div class="clear"></div>
          </div>
          <li class="title-first"><a href="javascript:void(0)">
            <span>[特惠]</span>精选好物你值得拥有</a>
          </li>
          <li class="title-first"><a target="_blank" href="javascript:void(0)">
            <span>[公告]</span>吃货狂欢爆款限量买一送一</a>
          </li>
          <li><a target="_blank" href="javascript:void(0)"><span>[特惠]</span>智能家具开启精致生活</a></li>
          <li><a target="_blank" href="javascript:void(0)"><span>[公告]</span>以旧换新至高立减1000元</a></li>
          <li><a target="_blank" href="javascript:void(0)"><span>[特惠]</span>手机电脑数码超级品类日</a></li>
        </ul>
        <img src="@/assets/images/advTip.jpg"/>
      </div>
    </div>
    <div class="clear"/>
  </div>
</template>

<script>
import data from "@/assets/js/data.js";
export default {
  name: 'IndexMenu',
  data:function () {
    return {
      data:data
    }
  },
  methods: {
    mouseOver: function (i) {
      var obj = document.getElementsByClassName('appliance')[i];
      obj.className="appliance js_toggle relative hover";
      var menu = obj.childNodes;
      menu[1].style.display='block';
    },
    mouseOut:function (i){
      var obj = document.getElementsByClassName('appliance')[i];
      obj.className="appliance js_toggle relative";
      var menu = obj.childNodes;
      menu[1].style.display='none';
    },
      show:function (value){
      this.$router.push({name:value})
      }
  }
}
</script>

<style>

</style>