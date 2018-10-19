<template>

    <div class="vue-component">
        <base-input v-model="msg" @focus="onFocus"></base-input>

        <base-checkbox v-model="lovingVue"></base-checkbox>

        <form action="#" method="get">
            
            <input type="text" name="name" value="zhang">

            <input type="checkbox" name="loving" value="yes" v-model="lovingVue">

            <button>Submit</button>
        </form>
    </div>
    
</template>

<script>

    import Vue from 'vue'

    // 自定义一个基础的 input 输入框组件，自定义组件中
    // 绑定 v-model 是通过 value 特性 和 input 事件来实现的。 
    Vue.component('base-input', {
        props: ['value'],
        template: '<input :value="value" \
            @input="$emit(\'input\', $event.target.value)">\
             <button @click="printAttr"></button>   \
            ',
        methods: {
            printAttr() {
                console.log();
            }
        }
    });

    // 自定义一个 checkbox
    // 自定义 v-model 的时候， 也能够利用组件中的 model 选项，
    // 改变绑定特性和绑定事件类型
    Vue.component('base-checkbox', {
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            checked: Boolean
        },
        template: '<input type="checkbox" \
                :checked="checked"\
            @change="$emit(\'change\', $event.target.checked)">'
    });


    
    export default {
        data() {
            return {
                msg: 'hi! vuejs',
                lovingVue: false
            }
        },
        methods: {
            onFocus(e) {
                console.log(e.target.value);
            }
        }
    }
</script>

<style scoped>

</style>