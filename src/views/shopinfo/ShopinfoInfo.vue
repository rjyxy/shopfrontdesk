<script>
import ShopinfoEnlarge from "@/views/shopinfo/ShopinfoEnlarge.vue";
import {mapState,mapActions} from "vuex";

export default {
  components: {ShopinfoEnlarge},
  data: function(){
    return {
      // 商品数量
      number: 1,
      // 商品基本信息
      goodsInfo: {
        img: require("@/assets/images/01.jpg"),
        name: "OPPO Reno9 新品拍照游戏手机",
        num: 0,
        unitPrice: 2699,
        isSelect: true
      }
    }
  },
  computed: {
    ...mapState([
        // this.user 映射为 this.$sore.state.user
        'user'
    ])
  },
  watch:{
    number: function (newVal,oldVal){
      if (isNaN(newVal) || newVal == 0){
      //   输入的是非数字或0
      //   数量为原来的值
        this.number = oldVal;
      }
    }
  },
  methods: {
    ...mapActions([
        // this.getListAction() 映射为 this.$store.dispatch('getListAction')
        'getListAction'
    ]),
    show: function (){
      if (this.user == null) {
        alert('亲，请登录！');
        // 跳转到登录页面
        this.$router.push({name:'login'});
      }else {
        this.getListAction({
        //   执行方法并传递参数
          goodsInfo: this.goodsInfo,
          number: parseInt(this.number)
        });
        // 跳转到购物车页面
        this.$router.push({name:'shopcart'});
      }
    },
    reduce: function (){
      if (this.number >= 2){
        // 商品数量减1
        this.number--;
      }
    },
    add: function (){
      // 商品数量加1
      this.number++;
    }
  }
}
</script>

<template>
  <div>
    <ol class="mr-breadcrumb mr-breadcrumb-slash">
      <li><a href="javascript:void(0)">首页</a> </li>
      <li><a href="javascript:void(0)">分类</a></li>
      <li class="mr-active">内容</li>
    </ol>

    <div class="scoll">
      <section class="slider">
        <div class="flexslider">
          <ul class="slides">
            <li>
              <img src="@/assets/images/01.jpg" title="pic">
            </li>
            <li>
              <img src="@/assets/images/02.jpg">
            </li>
            <li>
              <img src="@/assets/images/03.jpg">
            </li>
          </ul>
        </div>
      </section>
    </div>

    <!--放大镜-->
    <div class="item-inform">
      <ShopinfoEnlarge/>

      <div class="clearfixRight">
      <!--规格属性 -->
        <!--名称 -->
        <div class="tb-detail-hd">
          <h1>
            {{goodsInfo.name}}
          </h1>
        </div>
        <div class="tb-detail-list">
          <!-- 价格-->
          <div class="tb-detail-price">
            <li class="price iteminfo_price">
              <dt>促销价</dt>
              <dd><em>￥</em><b class="sys_item_price">{{goodsInfo.unitPrice.toFixed(2)}}</b></dd>
            </li>
            <li class="price iteminfo_mktprice">
              <dt>原价</dt>
              <dd><em>￥</em><b class="sys_item_price">2799.00</b></dd>
            </li>
            <div class="clear"></div>
          </div>

          <!--地址-->
          <dl class="iteminfo_parameter freight">
            <dt>配送至</dt>
            <div class="iteminfo_freprice">
              <div class="mr-form-content address">
                <select data-mr-selected>
                  <option value="a">吉林省</option>
                  <option value="b">吉林省</option>
                </select>
                <select data-mr-selected>
                  <option value="a">长春市</option>
                  <option value="b">长春市</option>
                </select>
                <select data-mr-selected>
                  <option value="a">朝阳区</option>
                  <option value="b">高新区</option>
                </select>
              </div>
              <div class="pay-logis">
                免基础运费
              </div>
            </div>
          </dl>
          <div class="clear"></div>

          <!--销量-->
          <ul class="tm-ind-panel">
            <li class="tm-ind-item tm-ind-sellCount canClick">
              <div class="tm-indcon"><span class="tm-label">月销量</span>
              <span class="tm-count">1015</span></div>
            </li>
            <li class="tm-ind-item tm-ind-sumCount canClick">
              <div class="tm-indcon"><span class="tm-label">累计销量</span>
                <span class="tm-count">6015</span></div>
            </li>
            <li class="tm-ind-item tm-ind-reviewCount canClick tm-line3">
              <div class="tm-indcon"><span class="tm-label">累计评价</span>
                <span class="tm-count">640</span></div>
            </li>
          </ul>
          <div class="clear"></div>

        <!--各种规格 -->
          <dl class="iteminfo_parameter sys_item_specpara">
            <dt class="theme-login">
              <div class="cart-title">可选规格<span class="mr-icon-angle-right"></span></div>
            </dt>
            <dd>
            <!--操作页面-->
              <div class="theme-popover-mask"></div>

              <div class="theme-popover">
                <div class="theme-span"></div>
                <div class="theme-poptit">
                  <a href="javascript:;" title="关闭" class="close">x</a>
                </div>
                <div class="theme-popbod dform">
                  <form class="theme-signin" name="loginform" action="" method="post">
                    <div class="theme-signin-left">
                      <div class="theme-options">
                        <div class="cart-title">颜色</div>
                        <ul>
                          <li class="sku-line selected">明日金<i></i></li>
                          <li class="sku-line">皓月黑<i></i></li>
                          <li class="sku-line">微醺<i></i></li>
                        </ul>
                      </div>
                      <div class="theme-options">
                        <div class="cart-title">套装</div>
                        <ul>
                          <li class="sku-line selected">优惠套装1<i></i></li>
                          <li class="sku-line">优惠套装2<i></i></li>
                        </ul>
                      </div>
                      <div class="theme-options">
                        <div class="cart-title number">数量</div>
                        <dd>
                          <input id="min" class="mr-btn mr-btn-default" @click="reduce" type="button" value="-"/>
                          <input id="text_box" type="text" v-model="number" style="width: 30px;"/>
                          <input id="add" class="mr-btn mr-btn-default" @click="add" type="button" value="+"/>
                          <span id="Stock" class="tb-hidden">库存<span class="stock">1000</span>件</span>
                        </dd>
                      </div>
                      <div class="clear"></div>

                      <div class="btn-op">
                        <div class="btn mr-btn mr-btn-warning">确认</div>
                        <div class="btn close mr-btn mr-btn-warning">取消</div>
                      </div>
                    </div>
                    <div class="theme-signin-right">
                      <div class="img-info">
                        <img src=""/>
                      </div>
                      <div class="text-info">
                        <span class="J_Price price-now">￥39.00</span>
                        <span id="Stock" class="tb-hidden">库存
                        <span class="stock">1000</span>件</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </dd>
          </dl>
          <div class="clear"></div>
          <!--活动-->
            <div class="shopPromotion gold">
              <div class="hot">
                <dt class="tb-metatit">店铺优惠</dt>
                <div class="gold-list">
                  <p>满20减10，满999减50</p>
                </div>
              </div>
              <div class="clear"></div>
            </div>
          </div>

          <div class="pay">
            <div class="pay-out">
              <a href="index.html">
                <span class="mr-icon-home mr-icon-fw">首页</span>
              </a>
              <a>
                <span class="mr-icon-heart mr-icon-fw">收藏</span>
              </a>
            </div>
            <li>
              <div class="clearfix tb-btn tb-btn-buy theme-login">
                <a id="LikBuy" title="点此按钮到下一步确认购买信息" @click="show">立即购买</a>
              </div>
            </li>
            <li>
              <div class="clearfix tb-btn tb-btn-basket theme-login">
                <a id="LikBuy" title="加入购物车" @click="show"><i></i>加入购物车</a>
              </div>
            </li>
          </div>
        </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<style src="@/assets/css/optstyle.css" scoped></style>
<style src="@/assets/css/infoStyle.css" scoped></style>