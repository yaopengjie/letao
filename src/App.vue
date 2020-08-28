<template>
    <div id="app_container">
        <!-- 头部 -->
        <slot name="header">
            <van-sticky>
                <div class="header">
                    <img src="./assets/images/logo.png" alt="" />
                    <van-search placeholder="请输入搜索关键词" />
                </div>
            </van-sticky>
        </slot>

        <!-- 中间 -->
        <router-view></router-view>
        <!-- 底部 -->
        <div class="footer">
            <van-tabbar v-model="active">
                <van-tabbar-item to="/home" icon="wap-home-o"
                    >首页</van-tabbar-item
                >
                <van-tabbar-item to="/mycar" icon="cart-o" badge="2"
                    >购物车</van-tabbar-item
                >
                <van-tabbar-item to="/user" icon="user-o" dot
                    >我的乐淘</van-tabbar-item
                >
            </van-tabbar>
        </div>
    </div>
</template>

<script>
import { Search, Tabbar, TabbarItem, Sticky } from 'vant'
export default {
  data () {
    return {
      active: 0
    }
  },
  components: {
    'van-search': Search,
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem,
    'van-sticky': Sticky
  }
}
</script>

<style lang="scss">
#app_container {
    min-width: 320px;
    max-width: 750px;
    margin: 0px auto;
    padding-bottom: 50px;
    .header {
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2px;
        margin: 0px auto;
        img {
            width: 44px;
        }
        .van-search {
            flex: 1;
        }
    }
}
</style>
