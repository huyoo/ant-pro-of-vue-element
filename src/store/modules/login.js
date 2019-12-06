/**
 * create by hy ON 2019/10/9
 */
import Vue from 'vue'
import {login, logout} from '@/api/login'

const ACCESS_TOKEN = 'Access-Token'

export default {
  state: {
    token: '',
    // name: '',
    welcome: '',
    // avatar: '',
    roles: [],
    info: {}

    // avatar: "https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png",
    // createTime: 1497160610259,
    // creatorId: "admin",
    // deleted: 0,
    // id: "cdCe4745-4eF7-5C8c-F2cf-89d30FCEB174",
    // lang: "zh-CN",
    // lastLoginIp: "27.154.74.117",
    // lastLoginTime: 1534837621348,
    // name: "Charles Walker",
    // password: "",
    // roleId: "admin",
    // status: 1,
    // telephone: "",
    // token: "4291d7da9005377ec9aec4a71ea837f",
    // username: "admin"
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, {name, welcome}) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },
  actions: {
    // 登录
    Login ({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          console.log(response)

          const result = response.result
          Vue.ls.set(ACCESS_TOKEN, result.token, 60 * 60 * 1000)

          commit('SET_TOKEN', result.token)
          commit('SET_ROLES', result.roleId)
          localStorage.setItem('userInfo', JSON.stringify(response.result))
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    setInfo ({commit}, userInfo) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', userInfo.token)
        commit('SET_ROLES', userInfo.roleId)
        resolve()
      })
    },

    // 获取用户信息
    // GetInfo ({commit}) {
    //   return new Promise((resolve, reject) => {
    //     getInfo().then(response => {
    //       console.log('getInfo', response)
    //       const result = response.result
    //
    //       if (result.role && result.role.permissions.length > 0) {
    //         const role = result.role
    //         role.permissions = result.role.permissions
    //         role.permissions.map(per => {
    //           if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
    //             const action = per.actionEntitySet.map(action => {
    //               return action.action
    //             })
    //             per.actionList = action
    //           }
    //         })
    //         role.permissionList = role.permissions.map(permission => {
    //           return permission.permissionId
    //         })
    //         commit('SET_ROLES', result.role)
    //         commit('SET_INFO', result)
    //       } else {
    //         reject(new Error('getInfo: roles must be a non-null array !'))
    //       }
    //
    //       commit('SET_NAME', {name: result.name, welcome: welcome()})
    //       commit('SET_AVATAR', result.avatar)
    //
    //       resolve(response)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    Logout ({commit, state}) {
      return new Promise((resolve) => {
        logout(state.token).then(() => {
          resolve()
        }).catch(() => {
          resolve()
        }).finally(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          Vue.ls.remove(ACCESS_TOKEN)
        })
      })
    }
  }
}
