<template>
<div id="head">
    <button class="home">首页</button>
    <h2 class="title">Movie</h2>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#head{
    height: 1rem;
    background-color: rgb(33,150,243);
    position: fixed;
    width: 100%;
    line-height: 1rem;
}
.home{
    color: white;
}
.title{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    color: white;
}

</style>
