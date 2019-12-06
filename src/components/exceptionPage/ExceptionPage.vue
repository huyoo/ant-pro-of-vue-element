<template>
  <div>
    <div class="exception">
      <div class="exception-img">
        <div :style="this.getImgUrl" :alt="this.type"></div>
      </div>
      <div class="tips">
        <h1>{{this.type}}</h1>
        <h2>{{this.config[type].desc}}</h2>
        <a-button type="primary" @click="this.goHome">返回首页</a-button>
      </div>
    </div>
    <page-footer/>
  </div>
</template>

<script>
	import PageFooter from '../pageFooter/PageFooter'
	import config from './typeConfig'

	export default {
		name: "ExceptionPage",
		data() {
			return {
				config: config
			}
		},
		props: {
			type: {
				propTypes: String,
				required: true,
			}
		},
		components: {
			PageFooter
		},
		computed: {
			getImgUrl() {
				return `background-image: url(${config[this.type].img})`
			}
		},
		methods: {
			goHome() {
				window.location.href = '/#/form/basicForm'
			}
		}
	}
</script>

<style scoped lang="less">
  .exception {
    display: flex;
    align-items: center;
    margin: 24px;
    min-height: 500px;

    .exception-img {
      min-height: 360px;
      flex: 0 0 60%;

      div {
        height: 360px;
        width: 100%;
        background: no-repeat 50% 50%;
        background-size: contain;
      }
    }

    .tips {
      margin-left: 60px;

      h1 {
        margin-bottom: 24px;
        color: #434e59;
        font-weight: 600;
        font-size: 72px;
        line-height: 72px;
      }

      h2 {
        margin-bottom: 16px;
        color: rgba(0, 0, 0, .45);
        font-size: 20px;
        line-height: 28px;
      }
    }
  }

  @media screen and (max-width: 576px) {
    .exception {
      display: block;
      text-align: center;

      .exception-img {
        width: 70%;
        margin: auto;
      }

      .tips {
        margin-left: 0;
      }
    }
  }
</style>