<template>
  <div style="width: 300px;margin-left: 30px;margin-top: 10px;">
    <text-area :value="targetName + age"></text-area>
  </div>
</template>

<script>
    import eventBus from "@/pages/feature/eventBus/eventBus";
    import {Input} from 'ant-design-vue'

    export default {
        name: "TextArea",
        components:{
            'text-area': Input.TextArea
        },
        data(){
            return {
                targetName:'',
                age: ''
            }
        },
        created() {
            eventBus.$on('clickTarget', value => {
            this.targetName = value.name;
            this.age = value.age;
        })
        }
    }
</script>

<style scoped>

</style>
