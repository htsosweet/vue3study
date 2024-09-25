<template>
        <!-- <div class="container">
            <input  v-model="text">
            <span class="reust">{{ text }}</span>
        </div> -->

        <!-- 以下代码等价于上面代码 -->
        <!-- <div class="container">
            <input  :vlaue="text" @input="handleupdata">
            <span class="reust">{{ text }}</span>
        </div> -->

        <!-- 通过自定义ref实现 -->
        <div class="container">
            <input  v-model="text">
            <span class="reust">{{ text }}</span>
        </div>


</template>
    
<script setup name="Preventjitter">
    import {  ref } from "vue";
    // const text = ref('')

    // 简单实现了防抖,但是还可以进一步优化
    // let timer;
    // const handleupdata=(e)=>{
    //     clearTimeout(timer)
    //     timer=setTimeout(()=>{
    //         text.value=e.target.value
    //     },3000)
    // };


    // 简易封装一下防抖函数
    // import  {usedebonce}  from '../usedebonce'
    // const updata=(e)=>{text.value=e.target.value}
    // const handleupdata = usedebonce(updata,1000)


    // 通过自定义ref封装防抖
    import  {usedebonceRef}  from '../myref'
    const text = usedebonceRef('')
</script>
    
<style scoped>
.container{
    margin: 0 auto ;
    width: 300px;
    height: 400px;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
input{
    margin: 0 auto;
    /* transform: translate(0, 50px); */
    display: block;

}
.reust{
    background-color: rgb(255, 0, 0);
    height: 30px;
}
    
</style>