<template>
    <div id="app">
       <ForDirective></ForDirective> 
    </div>
</template>

<script>

    import ForDirective from './components/ForDirective.vue'

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
            ForDirective
        }
        
        

    }
</script>

<style>

</style>
