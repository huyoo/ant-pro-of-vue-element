<template>
  <div  style="margin-left: 30px">名称/年龄：{{this.targetName}} / {{this.age}}</div>
</template>

<script>
    import eventBus from "@/pages/feature/eventBus/eventBus";

    export default {
        name: "Show",
        data(){
            return {
                targetName: '--',
                age: '--'
            }
        },
        created() {
            eventBus.$on('clickTarget', value => {
                this.targetName = value.name;
                this.age = value.age;
                // console.log(this, value)
            })
        }
    }
</script>

<style scoped>

</style>
