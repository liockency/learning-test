<template>
  <div>
      <h1>计数器：{{$store.state.count}}</h1>
      <button @click="$store.commit('add')">add</button>
      <button @click="$store.commit('reduce')">reduce</button>
  </div>
</template>
<script>
    import store from '@/vuex/store'
    export default {
        data(){
            return {};
        },
        store
    }
</script>