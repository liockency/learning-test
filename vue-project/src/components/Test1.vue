<template>
<div>
    <div id="xx">this is a test1</div>
    <h1>name: {{$route.params.name}}  age: {{$route.params.age}}</h1>
</div>
  
</template>
<script>
export default {
  
}
</script>
<style scoped>
    #xx{
        background-color: green;
    }
</style>
