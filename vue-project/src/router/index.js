import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import TestUrl from '@/components/TestUrl'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
     }, 
    {
      path:'/test',
      name:'Test',
      component:Test,
      children:[{
        path:'/test/test1',
        name:'test1',
        component:Test1
      }, {
        path:'/test/test2',
        name:'test2',
        component:Test2
      }, {
        path:'/test/testUrl/:userID(\\d+)/:userName',
        name:'testu',
        component:TestUrl
      }
      ]
    }
  ]
})
