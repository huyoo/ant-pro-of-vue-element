<template>
  <div>
    <List :config="this.testConfigProps" :propA="testConfigProps.propA"></List>
    <Show/>
    <TextArea/>
  </div>
</template>

<script>
    import Show from "@/pages/feature/eventBus/Show";
    import List from "@/pages/feature/eventBus/List";
    import TextArea from "@/pages/feature/eventBus/TextArea";
    export default {
        name: "EventBusParent",
        components: {TextArea, List, Show},
        data(){
            return {
                testConfigProps: {
                    propA: 124,
                    propB: [1,2,3],
                    propC: () => {
                        console.log(this)
                    },
                    propD: function () {
                        console.log(this)
                    },
                    propE: {
                        aa: 1,
                        bb: 2
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
