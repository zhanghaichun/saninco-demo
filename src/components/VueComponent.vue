<template>

    <div class="vue-component">

        
     <base-checkbox v-bind.sync="doc"></base-checkbox>

    
    Blog Title: {{doc.blogTitle}}

    <br>

    User Name: {{ doc.username }}
    </div>
    
</template>

<script>

  import Vue from 'vue'

  Vue.component('base-checkbox', {
    
    
    props: ['blogTitle', 'username'],
    template: `<div>
      <input type="text" :value="blogTitle">
      <button @click="changePValue">change parent value</button>
    </div>`,


    methods: {
      changePValue() {
        // this.value = 'vuejs'

        this.$emit("update:blogTitle", 'vuejs');
        this.$emit("update:username", 'zhang');
      }
    }
  });
    
    export default {
        data() {
            return {
                
                doc: {
                  blogTitle: 'Hello Vuejs',
                  username: 'username'
                },
               
               lovingVue: 'h'

            }
        },
        methods: {
            onFocus(e) {
                console.log(this.lovingVue);
            },

            onFocusTwo() {

              console.log(this.blogTitle);
            }

           
        },

        computed: 
        {
           
        },

        components: {
        }
    }
</script>

<style scoped>

    .is-active {
        color: red;
        border: 1px solid transparent;
        height: 30px;
        background-color: lightblue;
    }
    .small-font {
        color: blue;
    }

    .vue-component {
        background-color: red;
    }

    .focus-checkbox {
      border: 1px blue solid;
    }
</style>