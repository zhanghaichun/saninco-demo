<template>
    <div id="app">
        <button @click="getData">获取数据</button>
        <div>
            <h3>显示数据</h3>
            {{ value }}
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';


    import qs from 'qs'

    export default {

        // 在 Vuex 中这里的数据被称为
        // state.
        data () {
            return {
                item: '',
                items: [
                    {id: 1, text: 'Apple'},
                    {id: 2, text: 'Cherry'}
                ],
                value: {}
            }
        },


        props: {

        },

        // 这里的数据被称为 actions.
        methods: {
            getData () {
              
              let requestBody = qs.stringify({
                userId: 10,
                title: 'This is a good one',
                body: '300px'
              })
              
              /*this.$http.post('http://jsonplaceholder.typicode.com/posts', {
                userId: 10,
                title: 'This is a good one',
                body: '300px'
              })*/
              this.$http.post('http://jsonplaceholder.typicode.com/posts',{
                userId: 10,
                title: 'This is a good one',
                body: '300px'
              }, {
                transformRequest: [
                  data => {
                    let requestBodyNew = '';
                    for (var i in data) {
                      requestBodyNew += i + '=' + data[i] + '&'
                    }
                    return requestBodyNew
                  }
                ]
              })
              .then(res => {
                // self.comment = Object.assign({}, self.comment, res[0])
                this.value = { ...res.data }
                console.warn(res)
              })
              .catch(err => {
                // console.warn(err)
              })
            },

            addItem() {

                if (this.item && this.item !== '') {
                    this.items.push({id: this.itemCount ++, text: this.item});
                    this.item = '';
                }
            },
            doc: function () {
                this.id = event.currentTarget.id;
                alert(this.id)
            }


        },

        watch: {
            message(newVal, oldVal) {
                console.warn('Old message is %s, new message is %s.', oldVal, newVal);
            }
        }


    }
</script>

<style scoped lang="less">

    .link-active {
        font-size: 30px;
        color: orange;
        text-decoration: none;
        background-color: #1B6D85;
    }




</style>
