<template>
<div>
</div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return {
            movieList:[]
        }
    },
    mounted(){
        Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=0")
            .then((res)=>{
                console.log(res);
            })
                .catch()
    }
}
</script>
<style scoped>

</style>
 