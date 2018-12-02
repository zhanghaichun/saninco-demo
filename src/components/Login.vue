<template>

    <div class="vue-component">
        用户登录组件
        
    </div>
    
</template>

<script>

    import Vue from 'vue'

    


    
    export default {
        data() {
            return {
                msg: 'hi! vuejs',
                lovingVue: false
            }
        },
        methods: {
            logData() {
                console.warn(this.$parent);
                // console.warn(this);
            }
        },


    }
</script>

<style scoped>

</style>