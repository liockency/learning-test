import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/movie/movielist'
    },
     {
      path:'/movie',
      name:'Movie',
      component: Movie,
      children:[
        {
          path:'movielist',
          component:MovieList
        },{
          path:'moviedetail',
          component:MovieDetail
        }
      ]
    }
  ]
})
