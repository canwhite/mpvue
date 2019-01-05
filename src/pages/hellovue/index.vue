<template>

  <div class="container" @click="clickHandle">


    <div class="weui-grids">
        <block v-for="item in grids" :key="index">
          <navigator url="" class="weui-grid" hover-class="weui-grid_active">
            <image class="weui-grid__icon" :src="item.src" />
            <div class="weui-grid__label">{{item.name}}</div>
          </navigator>
        </block>
    </div>


    <div class="message" :style="{backgroundImage: 'url(' + (avatar || '') + ')'}"> {{msg}} </div>

  </div>


</template>

<script>
import Fly from "flyio/dist/npm/wx";
export default {

  data () {
    return {
      msg:'hello',
      grids: [
        { src: '../../../static/images/nav_manage.png', name: 'Button' },
        { src: '../../../static/images/nav_manage.png', name: 'Cell' },
        { src: '../../../static/images/nav_manage.png', name: 'Toast' },
        { src: '../../../static/images/nav_manage.png', name: 'Dialog' },
        { src: '../../../static/images/nav_manage.png', name: 'Progress' },
        { src: '../../../static/images/nav_manage.png', name: 'Msg' },
        { src: '../../../static/images/nav_manage.png', name: 'Article' },
        { src: '../../../static/images/nav_manage.png', name: 'ActionSheet' },
        { src: '../../../static/images/nav_manage.png', name: 'Icons' }
      ],
      avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
    }
  },
  create(){



  },
  mounted(){

    let fly = new Fly;
    let HostUrl = "http://192.168.1.37:8080/buildsx/api/isFaceImg";
    let paras = {
      "id":"18a89e90877541f68a65f45eb40e5b9d",
      "type":"0"

    };
    //发起请求
    fly.post(HostUrl,paras)
    .then(function(response){
      console.log(response)
      /*
      data:后边是我们要的结果
      */
      console.log(response.data)


    }).catch(function(error){
      console.log(response)

    });

  },

  methods: {
    clickHandle(){
    this.msg = 'clicked!!!'

    }
  }
}

</script>

<style scoped>
.message {
  color: blue;
  padding: 10px;
  text-align: center;
}
</style>

