/**
 * 权限拦截验证
 * create by hy ON 2019/9/26
 */
import router from './index'
import store from '@/store/store'
import {asyncRouterMap} from '@/router/router.config'

const defaultRoutePath = '/dashboard/analysis'

router.beforeEach((to, from, next) => {
  // store没有token 则校验localStorage是否有刚登陆过的用户，如仍然没有就跳转到登录页
  if (!store.state.login.token) {
    let userInfo = localStorage.getItem('userInfo')

    if (userInfo) {
      userInfo = JSON.parse(userInfo)

      if (userInfo.token && userInfo.lastLoginTime) {
        // TODO 根据当前登录用户查询最后登录时间等信息(单点登录)，替换现有不安全的校验方式
        // 最后登录时间不能超过1小时
        if (new Date().getTime() - userInfo.lastLoginTime < 3600000) {
          store.dispatch('setInfo', userInfo).then(() => {
            next({path: defaultRoutePath})
          })
        } else {
          localStorage.removeItem('userInfo')
          next({path: '/login'})
        }

        return
      }
    }

    if (to.path === '/login') {
      next()
    } else {
      next({path: '/login'})
    }
    return
  }

  if (store.state.permission.addRouters.length === 0) {
    store.dispatch('GenerateRoutes')
      .then(() => {
        next({path: defaultRoutePath})
        router.addRoutes(asyncRouterMap)
      })
  } else {
    next()
  }
})
