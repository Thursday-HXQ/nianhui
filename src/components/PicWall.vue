<template>
    <div class="picwall-wra">
         <transition-group name="wall" tag="p" style="height:100%">
            <span v-for="item in showList" :key="item.id" class="wall-item">
                <div class="person">
                    <div class="head">
                        <img :src="item.headPic">
                    </div>
                    <div class="name">
                        <p>{{ item.name }}</p>
                    </div>
                    <div class="type">
                        <p>{{ item.type }}</p>
                    </div>
                </div>
            </span>
        </transition-group>
        <button @click="addPerson">add</button>
    </div>
</template>
<script>
export default {

    data(){
        return {
            show:false,
            showList:[
                {id:1,name:'张三',type:'随行人员',headPic:require('../assets/test.jpg')}
            ]
        }
    },
    methods:{
        addPerson(){
            this.showList.push(
                {id:Math.floor(Math.random()+100),name:'张三',type:'随行人员',headPic:require('../assets/test.jpg')}
            )
        }
 
    },
}
</script>

<style scoped>
.picwall-wra{
    height:400px;
    width:100%;
    height:100%;
    border:1px solid #000; 
    display: flex;
    align-items: center;
    justify-content: center; 
}
.wall-item{

}
.wall-leave{
    opacity: 0;
    transform: translateY(-100px);
}
.person{
    width:30%;
    height:100%;
    background-image:url(../assets/person-bg.png);
    background-size:100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.person > .head{
    width:100%;
    height:50px;
    text-align: center;
}
.head img{
    width:40%;
    border-radius: 50%;
}
.wall-item {
  width:100%;
  height:100%;
  border:1px solid #000; 
  display: flex;
  align-items: center;
  justify-content: center; 
}
.wall-enter-active, .wall-leave-active {
  transition: all 1s;
}
.wall-enter, .wall-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

