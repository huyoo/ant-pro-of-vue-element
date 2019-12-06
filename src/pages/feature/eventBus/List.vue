<template>
  <div>
    <span @click="modifyProp">修改propA</span>
    <ul v-for="item of list">
      <li :value="item.age" @click.stop.prevent="handleClick">{{item.name}}</li>
    </ul>

  </div>
</template>

<script>
    import eventBus from "@/pages/feature/eventBus/eventBus";

    export default {
        name: "List",
        props:{
            config:{
                propTypes: Object,
                required: true
            },
            propA: {
                propTypes: Number
            }
        },
        data(){
            return {
                list: [{
                    name: '张三',
                    age: 11
                }, {
                    name: '李四',
                    age: 21
                }, {
                    name: '王五',
                    age: 31
                }]
            }
        },
        methods:{
            handleClick(ev){
                eventBus.$emit('clickTarget', {
                    name: ev.target.textContent,
                    age: ev.target.value
                });

                console.log(this.config.listA);
                this.config.listA = '0';
                console.log(this.config.listA);

                console.log('以下是function');
                this.config.propC();
                this.config.propD();

                console.log('以下是call');
                this.config.propC.call(this);
                this.config.propD.call(this);

            },
            modifyProp(){
                console.log('before' + this.propA);
                this.propA = 'modify';
                console.log('after' + this.propA);
                console.log('props', this.config);
            }
        }
    }
</script>

<style scoped>

</style>
