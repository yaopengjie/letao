<template>
    <div class="home_container">

        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in lubotuData" :key="item.img">
                <img :src="item.img" />
            </van-swipe-item>
        </van-swipe>

        <van-grid :column-num="4">
            <van-grid-item icon="photo-o" text="文字">
                <img class="img" src="../assets/images/menu10.png" alt />
                <div>数码电器</div>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字">
                <img class="img" src="../assets/images/menu12.png" alt />
                <div>9.9拼单</div>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字">
                <img class="img" src="../assets/images/menu13.png" alt />
                <div>乐淘超市</div>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字">
                <img class="img" src="../assets/images/menu15.png" alt />
                <div>乐淘服饰</div>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字">
                <img class="img" src="../assets/images/menu16.png" alt />
                <div>物流查询</div>
            </van-grid-item>
            <van-grid-item  to="/newslist" icon="photo-o" text="文字">
                <img class="img" src="../assets/images/menu19.png" alt />
                <div>乐淘头条</div>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字">
                <img class="img" src="../assets/images/menu18.png" alt />
                <div>美图欣赏</div>
            </van-grid-item>
            <van-grid-item icon="photo-o" text="文字">
                <img class="img" src="../assets/images/menu17.png" alt />
                <div>全部</div>
            </van-grid-item>
        </van-grid>
        <van-divider
            :style="{ color: '#333', borderColor: '#545e6c', padding: '2px' }"
        >
            为你推荐
        </van-divider>

        <div class="goodList">
            <div class="item" v-for="item in recommendData" :key="item.id">
                <img v-lazy="item.img_url" alt="" />
                <div class="text">
                    <div class="ititle">
                        {{ item.title }}
                    </div>
                    <div class="fotter">
                        <span class="price">￥{{ item.sell_price }}</span>
                        <span class="buy">{{ item.buy }}已购买</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem, Grid, GridItem, Divider } from 'vant'
import { getLunBoData, getRecommendData } from '@/api/index.js'
export default {
  name: 'home',
  data () {
    return {
      lubotuData: [],
      recommendData: []
    }
  },
  methods: {
    async getlubotu () {
      //   var res = await this.$api.get('http://api.w0824.com/api/getlunbo')
      //   this.lubotuData = res.data.message
      //   console.log(this.lubotuData)
      var res = await getLunBoData()
      this.lubotuData = res.message
    },
    async getRecommend () {
      var res = await getRecommendData()
      this.recommendData = res.message
    }
  },
  created () {
    this.getlubotu()
    this.getRecommend()
  },
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
    'van-grid': Grid,
    'van-grid-item': GridItem,
    'van-divider': Divider
  }
}
</script>

<style lang="scss" scoped>
.home_container {
    background-color: #eeeeee;
    .my-swipe {
        .van-swipe__track {
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .van-grid {
        .van-grid-item {
            .van-grid-item__content {
                .img {
                    width: 50%;
                }
            }
        }
    }
    .van-divider {
        font-size: 16px;
    }
    .goodList {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .item {
            width: 46%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: 10px;
            background-color: #fff;
            overflow: hidden;
            margin: 6px;
            img {
                width: 100%;
            }
            .text {
                margin-top: 10px;
                display: flex;

                flex-direction: column;
                .ititle {
                    font-size: 12px;
                    color: #333;
                }
                .fotter {
                    display: flex;
                    align-items: center;
                    padding: 0px 5px;
                    margin-top: 5px;
                    .price {
                        font-size: 14px;
                        color: #f50;
                    }
                    .buy {
                        margin-left: 12px;
                        font-size: 12px;
                        color: #999;
                    }
                }
            }
        }
    }
}
</style>
