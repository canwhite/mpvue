<template>
  <div  class="container" @click="clickHandle('test click', $event)">

    <div v-if="page==0">
      <div class="usermotto">
        <div class="user-motto">
          <card :text="motto"></card>
        </div>
      </div>

      <form class="form-container">
        <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
        <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
      </form>
      <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
      <a href="/pages/hellovue/main" class="hello">hello vue test</a>

    </div>



    <div v-if="page==1">
      <count></count>
    </div>


    <div v-if="page==2">
      <mine></mine>
    </div>




    <div class="tabs">

      <ul>
        <li @click="goPage(0)">
          <div><img style="width:20px;height:20px;" src='../../../static/images/nav_manage.png'></div>
          <div>首页</div>
        </li>
        <li @click="goPage(1)">
          <div><img style="width:20px;height:20px;" src='../../../static/images/nav_manage.png'></div>
          <div>计数</div>
        </li>
        <li @click="goPage(2)">
          <div><img style="width:20px;height:20px;" src='../../../static/images/nav_manage.png'></div>
          <div>我的</div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import count from '@/components/MyCount'
import mine from '@/components/AboutMe'


export default {
  data () {
    return {
      motto: 'Hello World',
      page:0,
      userInfo: {},
    }
  },

  components: {
    card,
    count,
    mine

  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    goPage(i){
      this.page = i
      console.log(this.page)
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
  },

}
</script>

<style scoped>

.usermotto {
  margin-top: 50px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

.hello {
  border:1px solid blue;
  margin:10 px auto;
  padding:5px 10px;
  color:blue;
}



.tabs{
  position:fixed;
  bottom:0;
  left:0;
  background-color:#fff;
  box-shadow: 0 2px 4px #000;
  width: 100%;
}
ul{
  display: table;
  width: 100%;
}
ul>li{
  text-align: center;
  font-size: 10px;
  display: table-cell;
  padding: 8px 12px;
}


</style>
