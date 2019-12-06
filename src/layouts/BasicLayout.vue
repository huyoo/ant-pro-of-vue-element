<template>
  <div class="basic-layout">
    <div class="menu" :style="sideMenuStyle">
      <side-menu :is-mobile="isMobile" :collapse="collapse"/>
    </div>
    <div class="content">
      <page-header :is-mobile="isMobile" :collapse="collapse" @changeMenu="this.toggleMenu"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import {PageHeader, SideMenu} from '@/components'

  export default {
    name: 'BasicLayout',
    data () {
      return {
        // isSideMenu: true,
        // isMobile: false,
        // collapse: false,
        // sideMenuStyle: {
        // 	flex: '0 0 256px',
        // }
        isMobile: true,
        collapse: true,
        sideMenuStyle: {flex: '0 0 80px'}
      }
    },
    components: {
      SideMenu,
      PageHeader
    },
    computed: {},
    watch: {},
    methods: {
      dealClientWidth () {
        const clientWidth = document.documentElement.clientWidth
        if (clientWidth > 1200) {
          this.isMobile = false
          this.collapse = false
          this.sideMenuStyle = {
            flex: '0 0 256px'
          }
        } else if (clientWidth <= 1200 && clientWidth >= 576) {
          this.isMobile = false
          this.collapse = true
          this.sideMenuStyle = {flex: '0 0 80px'}
        } else if (clientWidth < 576) {
          this.isMobile = true
          this.collapse = true
          this.sideMenuStyle = {flex: '0 0 80px'}
        }
      },
      toggleMenu () {
        this.collapse = !this.collapse
        this.sideMenuStyle = {flex: `0 0 ${this.collapse ? '80px' : '256px'}`}
      }
    },
    created () {
      // this.dealClientWidth();
    },
    mounted () {
      let _this = this
      window.onresize = () => {
        // _this.dealClientWidth();
      }
    }
  }
</script>

<style scoped lang="less">
  .basic-layout {
    display: flex;
    flex-flow: row;

    .menu {
      position: relative;
      z-index: 10;
      box-shadow: 2px 0 6px rgba(0, 0, 0, 0.4);
      transition: all .2s;
      background: #001529;
    }

    .content {
      display: flex;
      flex: auto;
      flex-direction: column;
      min-height: 100vh;
      background-color: #f0f2f5;
    }
  }
</style>
