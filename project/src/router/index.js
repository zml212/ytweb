// 路由的核心配置
import VueRouter from 'vue-router'

// 引入要展示的组件
import index from '../pages/index'
import denglu from '../pages/denglu'
import zhuce from '../pages/zhuce'
import user from '../pages/user'
import commodity from '../pages/commodity'
import release from '../pages/release'
import releaseList from '../pages/releasedList'
import releasePage from '../pages/releasePage'
import releaseHistory from '../pages/releaseHistory'
import shoppingCar from '../pages/shoppingCar'
import basicShow from '../pages/basicShow'
import updatePassword from '../pages/updatePassword'
import soldOut from '../pages/soldOut'
import orderHistroy from '../pages/orderHistroy'

export default new VueRouter({
  routes: [
    {
      name: 'index',
      path: '/',
      component: index,
      children: [
        {
          name: 'denglu',
          path: 'denglu',
          component: denglu,
        },
        {
          name: 'zhuce',
          path: 'zhuce',
          component: zhuce,
        }
      ]
    },
    {
      path: '/user',
      component: user,
      children: [
        {
          name: 'basicShow',
          path: '/',   //path设置为 "/",默认显示该页面
          component: basicShow
        },
        {
          path: 'updatePwd',
          component: updatePassword
        }, {
          path: 'soldOut',
          component: soldOut
        }, {
          path: 'orderHistroy',
          component: orderHistroy
        }
      ]
    },
    {
      path: '/commodity',
      component: commodity
    },
    {
      path: "/release",
      component: release,
      children: [
        {
          name: 'releasePage',
          path: '/',
          component: releasePage
        },
        {
          name: 'releaseList',
          path: 'releaseList',
          component: releaseList,
          children: [{
            name: 'releaseHistory',
            path: 'releaseHistory',
            component: releaseHistory,
          }]
        }
      ]
    },
    {
      path: '/shoppingCar',
      component: shoppingCar
    }
  ],
  mode: 'history'   //mode 设置为history，去掉地址栏上的#号
})
