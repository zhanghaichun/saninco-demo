<template>
    <div id="app">
       <!-- <ForDirective></ForDirective>  -->
       <VueComponent></VueComponent>
    </div>
</template>

<script>

    import ForDirective from './components/ForDirective.vue'
    import VueComponent from './components/VueComponent.vue'

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        },

        
        methods: {

          
        },
        components: {
            ForDirective,
            VueComponent,
        }
        
        

    }
</script>

<style>

</style>
