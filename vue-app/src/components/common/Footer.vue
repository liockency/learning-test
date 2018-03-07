<template>
  <div>
      <ul class="footer">
          <li>电影</li>
          <li>音乐</li>
          <li>书籍</li>
          <li>图片</li>
      </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.footer{
    height: 1rem;
    background-color: rgb(33,150,243);
    position: fixed;
    width: 100%;
    line-height: 1rem;
    display: flex;
    position: fixed;
    bottom: 0;
}
.footer li{
    flex-grow: 1;
    text-align: center;
    color: white;

}
</style>
