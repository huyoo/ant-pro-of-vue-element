<template>
  <div class="page-layout">
    <div class="head">
      <breadcrumb-pro/>
      <h1 class="title">{{title}}</h1>
      <span v-if="description" class="description">{{description}}</span>
    </div>
    <div class="content">
      <router-view ref="content"/>
    </div>
    <page-footer/>
  </div>
</template>

<script>
	import {PageFooter, BreadcrumbPro} from "@/components";

	export default {
		name: "PageLayout",
		components: {
			PageFooter,
			BreadcrumbPro
		},
		data() {
			return {
				description: null,
				title: ''
			}
		},
		mounted() {
			this.getPageMeta();
		},
		updated() {
			this.getPageMeta();
		},
		methods: {
			getPageMeta() {
				const content = this.$refs.content;

				this.description = content.description || null;
				this.title = this.$route.meta.title;
			},
		}
	}
</script>

<style scoped lang="less">
  .page-layout {
    .head {
      background-color: white;
      padding: 16px 24px 6px 24px;
    }

    .title {
      margin-top: 10px;
      color: rgba(0, 0, 0, .85);
      font-weight: 600;
      font-size: 20px;
      line-height: 1.4;
    }

    .description{
      color: rgba(0,0,0,.65);
    }

    .content {
      margin: 22px;
      background-color: white;
    }
  }
</style>
