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
      <div class="bottom-animate-pic-wra">
        <transition-group name="bottom" class="bottom">
            <div v-for="item in enterList" class="item-bottom" v-if="item.id" :style="{top:item.top ,left:item.left,animationDelay: item.delay}" :key="item.id">
              <div class="enterPerson">
                <img :src="item.headPic" class="enter-item">
              </div>
            </div>
          </transition-group>
      </div>
      <!-- <button @click="enter">enter</button>
      <button @click="empty">empty</button> -->
      <div class="content">
          <p>欢迎参加博航</p>
          <p>2018</p>
          <p>人工智能年年会</p>
        </div>
    </div>
</template>
<script>
export default {

    data(){
        return {
            show:false,
            showList:[
               {}
            ],
            enterList:[
            ],
            randomTopStart:3,
            randomTopEnd:70,
            randomLeftStart:6,
            randomLeftEnd:78
        }
    },
    created(){
      setInterval(() => {
        this.enter()
      }, 2500);
    },
    methods:{
        enter(){
          // if(this.showList.splice(0,1)[0].name){

          // }
          let curEnter = this.showList.splice(0,1)[0]
          let len = this.enterList.length
          let flag = Math.random() - 0.5
          // if(this.enterList.length <= 10){

          //   curEnter.top = (Math.random()*20) + '%';
          //   curEnter.left = (30  +Math.random()*30) + '%';

          // }else if(this.enterList.length > 10 && this.enterList.length <= 30){

          //   curEnter.top = (15 + Math.random()*10) + '%';
          //   curEnter.left = (10 + Math.random()*50)+ '%';

          // }else if(this.enterList.length > 30 && this.enterList.length < 60){

          //   curEnter.top = (20 + Math.random()*10)+ '%';
          //   curEnter.left = (10 + Math.random()*50)+ '%';
          // }

          // curEnter.dur = (Math.random()*1000 + 750) +'ms'

          curEnter.top = (this.randomTopStart + Math.random()*this.randomTopEnd )+ '%';
          curEnter.left = (this.randomLeftStart + Math.random()*this.randomLeftEnd)+ '%';

          curEnter.delay = (Math.random()*1000).toFixed(2) +'ms'

          this.enterList.push(curEnter);

          setTimeout(()=>{
             this.showList.push(
                {id:(Math.random()+100).toFixed(2),name:'张三'+Math.ceil(Math.random()*100),type:'随行人员',headPic:require('../../assets/test.jpg')}
            )
          },570 + Math.random()*500)       
        },
        // empty(){
        //   this.showList.splice(0,1)
        //   setTimeout(()=>{
        //      this.showList.push({})
        //   },750)       
        // },
    },
}
</script>

<style scoped>
.picwall-wra{
  position: relative;
  width:100%;
  height:100%;
  /* background:antiquewhite; */
  background-image:url(../../assets/bg.jpg) ;
  background-size:cover;
  color:#fff;
  font-weight: bold;
  font-size:25px;
  overflow: hidden;
}
.animate-pic-wra{
  width:100%;
  height:50%;
  /* border:1px solid #000; */
}
.bottom-animate-pic-wra{
  width:100%;
  height:50%;
  position: relative;
  overflow: hidden;
  z-index: 99;
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
.item-bottom{
  display: inline-block;
  position:absolute;
  animation: shake 1.25s ease-in-out infinite;
  
}
@keyframes shake{
  0%{
    margin-top:0px;
  }50%{
    margin-top:30px;
  }
  100%{
    margin-top:0px;
  }
}
.bottom-enter-active, .bottom-leave-active {
  transition: all 1s;
}
.bottom-enter
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(400px);
}
.bottom-leave-to{
  opacity: 0;
  transform: translateY(-400px);
}
.enterPerson{
  width:50px;
  height:50px;
}
.enter-item{
  width:100%;
  height:100%;
  border-radius: 50%;
}
.content{
  width:100%;
  height:50%;
  position:absolute;
  bottom: 1%;
  display: flex;
  flex-direction: column;
  padding-top:5%;
  /* align-items: center; */
  
}
.content p{
  display:inline-block;
  position: relative;
  height:30%;
  text-align: center;
  font-size:50px;
  letter-spacing: 5px;

}
</style>
