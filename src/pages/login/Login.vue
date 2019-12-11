<template>
  <div class="main">
    <div class="login-head">
      <div class="head">Ant Design</div>
      <div class="tips">Ant Design 是西湖区最具影响力的 Web 设计规范</div>
    </div>
    <div class="user-layout-login">
      <el-form ref="form" :model="form" :rules="rules">
        <el-tabs>
          <el-tab-pane>
            <span style="padding: 10px 40px;" slot="label">账号密码登录</span>
            <el-form-item prop="username">
              <el-input  v-model="form.username"
                         placeholder="账户: admin">
                <i slot="prefix" class="el-icon-user"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="form.password"
                        placeholder="密码: admin or ant.design"
                        show-password>
                <i slot="prefix" class="el-icon-lock"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox label="自动登录"></el-checkbox>
              <span class="forget-password">忘记密码</span>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width: 100%" @click="onSubmit" :disabled="disableLoginBtn">登  录</el-button>
            </el-form-item>
          </el-tab-pane>

          <el-tab-pane>
            <span style="padding: 10px  45px" slot="label">手机号登录</span>
            <span>待开发</span>
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <div class="login-footer">
        <page-footer></page-footer>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import {mapActions} from 'vuex'
import PageFooter from '@/components/pageFooter/PageFooter'

export default {
  name: 'Login',
  components: {PageFooter},
  data () {
    const handleUsernameOrEmail = (rule, value, callback) => {
      const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/

      if (regex.test(value)) {
        this.loginType = 0
      } else {
        this.loginType = 1
      }
      callback()
    }

    return {
      form: {
        username: 'admin',
        password: 'ant.design'
      },
      rules: {
        username: [
          { required: true, message: '请输入帐户名或邮箱地址', trigger: 'blur' },
          {validator: handleUsernameOrEmail, trigger: 'onchange'}
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      disableLoginBtn: false,
      loginType: 1// login type: 0 email, 1 username, 2 telephone
    }
  },
  methods: {
    ...mapActions(['Login', 'Logout']),
    onSubmit () {
      this.$refs.form.validate((validate) => {
        if (!validate) return

        const loginParams = {...this.form}
        delete loginParams.username

        loginParams[this.form.loginType ? 'email' : 'username'] = this.form.username
        loginParams.password = md5(this.form.password)
        this.disableLoginBtn = true

        this.Login(loginParams)
          .then((res) => this.loginSuccess(res))
          .catch(err => {
            this.requestFailed(err)
          })
          .finally(() => {
            this.disableLoginBtn = false
          })
      })
    },
    loginSuccess () {
      this.$router.replace('/')
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notify({
          title: '欢迎',
          message: 'admin，欢迎回来'
        })
      }, 1000)
    },
    requestFailed (err) {
      this.$notify({
        title: '登录失败',
        message: err.message
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .main {
    min-height: 100vh;
    background: #f0f2f5;
  }

  @media screen and (min-width: 768px) {
    .main {
      background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
      background-repeat: no-repeat;
      background-position: center 110px;
      background-size: 100%;
    }
  }

  .login-head{
    padding-top: 30px;
    text-align: center;
    .head{
      position: relative;
      top: 2px;
      color: rgba(0,0,0,.85);
      font-weight: 600;
      font-size: 33px;
      font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
    }
    .tips{
      margin-top: 12px;
      margin-bottom: 40px;
      color: rgba(0,0,0,.45);
      font-size: 14px;
    }
  }

  .user-layout-login {
    width: 370px;
    margin: 0 auto;
    .forget-password{
      float: right;
      cursor: pointer;
      color: #1890ff;
    }
    .login-footer{
      position: absolute;
      bottom: 10px;
      text-align: center;
      width: inherit;
    }
  }
</style>
