<template>
    <div>
        <transition-group name="wall" >
            <div class="wall-item" v-for="item in showList" :key="item.id">
                <div class="person">
                    <div class="head">
                        <img :src="item.headPic" />
                    </div>
                    <div class="name">
                        <p>{{ item.name }}</p>
                    </div>
                    <div class="type">
                        <p>{{ item.type }}</p>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>
<script>
export default {

    data(){
        return {
            show:false,
            showList:[
                {id:1,name:'张三',type:'随行人员',headPic:'../assets/test.jpg'}
            ]
        }
    },
    methods:{

    },
}
</script>

<style scoped>
.wall-item{
    width:100%;
    height:200px;
    border:1px solid #000; 
    display: flex;
    align-items: center;
    justify-content: center; 
}
.person{
    width:40%;
    height:150px;
    background:antiquewhite;
}
</style>

