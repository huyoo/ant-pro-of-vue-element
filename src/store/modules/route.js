/**
 * 路有校验
 * create by hy ON 2019/10/10
 */
import {asyncRouterMap, constantRouterMap} from '@/router/router.config'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({commit}, data) {
      const {role} = data
      const routes = filterRoutesByRole(role)

      return new Promise(resolve => {
        commit('SET_ROUTERS', routes)
        resolve(routes)
      })
    }
  }
}

export default permission

/**
 * 使用登录用户的角色roleId 匹配路由配置的role
 * @param role
 * @param routerConfig
 * @returns {Array}
 */
function filterRoutesByRole (role, routerConfig = asyncRouterMap) {
  let routes = []

  routerConfig.forEach(item => {
    if (item.children) {
      // 递归检查 子组件的权限
      const routerChildren = filterRoutesByRole(role, item.children)
      if (routerChildren.length > 0) {
        item.children = routerChildren
        routes.push(item) // 将子路由替换成递归后的结果
      }
    } else {
      if (item.meta && item.meta.role && role.includes(item.meta.role)) {
        routes.push(item)
      } else {
        if (!item.meta || !item.meta.role) {
          routes.push(item) // 如果页面没有配置meta  默认该页面无需检查权限，所有人都可用
        }
      }
    }
  })

  return routes
}
