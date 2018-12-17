<template>
    <div class="picwall-wra">
      <div class="animate-pic-wra">
          <transition-group name="list" class="list">
            <div v-for="item in showList" :key="item.id" class="item" v-if="item.id">
              <div class="person">
                <img :src="item.headPic" class="headPic">
                <p>{{ item.name }}</p>
                <p>{{ item.type }}</p>
              </div>
            </div>
          </transition-group>
      </div>
      <!-- <button @click="enter">enter</button>
      <button @click="empty">empty</button> -->
    </div>
</template>
<script>
export default {

    data(){
        return {
            show:false,
            showList:[
               {}
            ]
        }
    },
    created(){
      setInterval(() => {
        this.enter()
      }, 2500);
    },
    methods:{
        enter(){
          this.showList.splice(0,1)
          setTimeout(()=>{
             this.showList.push(
                {id:Math.floor(Math.random()+100),name:'张三',type:'随行人员',headPic:require('../../assets/test.jpg')}
            )
          },750)       
        },
        empty(){
          this.showList.splice(0,1)
          setTimeout(()=>{
             this.showList.push({})
          },750)       
        },
    },
}
</script>

<style scoped>
.picwall-wra{
  width:100%;
  height:100%;
  /* background:antiquewhite; */
  background-image:url(../../assets/bg.jpg) ;
  background-size:cover;
  color:#fff;
  font-weight: bold;
  font-size:25px;
}
.animate-pic-wra{
  width:100%;
  height:50%;
  /* border:1px solid #000; */
}
.list{
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
}
.item{
  width:300px;
  height:100%;
  display: inline-block;
  position:relative;
}
.person{
  width:100%;
  height:100%;
  background-image: url(../../assets/person-bg.png);
  background-size:100% 100%;
  position:absolute;

  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top:50px;
  box-sizing: border-box;
}
.headPic{
  width:40%;
  border-radius: 50%;
}
.person > p{
  margin-top:20px;
  height:50px;
  text-align: center;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(400px);
}
.list-leave-to{
  opacity: 0;
  transform: translateX(-400px);
}

</style>
