<template>

    <div class="for-directive">          
        <!-- v-for 指令可以接收的四个参数类型 Array, Object, Number, String 
            1, 除了 Object, 其他类型都可以接受两个参数， value , index
            2, Object 类型的数据可以接受三个参数 key, value, index
            
            多种 v-for 指令的例子。

        -->

        <EleInput></EleInput>

        <h4>字符串的遍历</h4>
        <h5>原字符串： {{msg2}}</h5>
        <ul>
            <li v-for="(item, index) in msg2">
                {{item}} - {{index}}
            </li>
        </ul>

        <h4>v-for指令值是对象</h4>
        <ul>
            <li v-for="(value, key, index) in person"> {{key}} - {{value}} - {{index}} </li>
        </ul>

        <h4>就地复用, 勾选删除</h4>
        <ul>
            <li v-for="(value,index) in arr" :key="value.id" >
                <input type="checkbox" 
                :checked="value.isCanDel" 
                
                v-model="value.isCanDel">
                
                <!-- 这种情况下不会产生就地复用 -->
                <!-- <input type="checkbox" :key="value.id" @click="value.isCanDel == false ?(value.isCanDel = true) : (value.isCanDel = false)"> -->
                
                <!-- 以下两种情况都会 "就地复用"
                    
                    <input type="checkbox" @click="value.isCanDel == false ?(value.isCanDel = true) : (value.isCanDel = false)">

                    <input type="checkbox" :key="index" @click="value.isCanDel == false ?(value.isCanDel = true) : (value.isCanDel = false)">

                 -->
                <span> {{value.text}} </span>

                <button @click="deleteItem(index)">delete</button>
            </li>
        </ul>

        <h4>就地复用, 勾选删除, 使用 element ui.</h4>
       
           <el-row :gutter="15" v-for="(value,index) in arr" :key="value.id">

                <!-- <el-col :span="4"><input type="checkbox" :checked="value.isCanDel" :key="value.id" @click="value.isCanDel == false ?(value.isCanDel = true) : (value.isCanDel = false)"></el-col> -->

                <el-col :span="4">
                    <el-checkbox
                        :checked="value.isCanDel"
                        v-model="value.isCanDel"
                        
                        ></el-checkbox>
                </el-col>
          
               <el-col :span="8">
                   <span> {{value.text}} </span>
               </el-col>
               
               <el-col :span="8">
                   <el-button type="danger" size="small" @click="deleteItem(index)">delete</el-button>
               </el-col>

           </el-row>
        

        <h4>批量删除和全选</h4>

        <input type="text" @keydown.enter="addBookItem" v-model="bookItemsText" placeholder="Input One Item Name">
        <el-button @click="addBookItem" type="primary">Add One</el-button>
        
        <input type="checkbox" v-model="checkAllBooks" @click="toggleCheckAll"> 全选

        <input type="checkbox" @click="reverseSelect" v-model="reverseSelectBook"> 反选
        <ul>
            <li v-for="(value,index) in bookArr">
                <input 
                    type="checkbox" 
                    :value="index" 
                    key="value.id"
                    v-model="bookIds">
                
               
                <span> {{value.text}} </span>

            </li>
        </ul>
    
        <el-button type="danger" @click="deleteItems">delete</el-button>

    </div>
</template>

<script>

    import { getArrayIndexs } from '../helpers/index.js'
    import EleInput from './EleInput.vue'

    export default {
        data() {

            return {
                msg: 'First App',
                person: {
                    name: 'zhang',
                    age: 17
                },
                msg2: 'Today is a sunny day.',

                arr: [
                    {id: 1, isCanDel: false, text: 'apple'},
                    {id: 2, isCanDel: false, text: 'orange'},
                    {id: 3, isCanDel: false, text: 'banana'},
                    {id: 4, isCanDel: false, text: 'cherry'}
                ],

                bookArr: [
                    {id: 1, text: 'Vue.js 实战'},
                    {id: 2, text: 'javascript 语言精粹'},
                    {id: 3, text: 'CSS权威指南'},
                    {id: 4, text: 'Java编程思想'}
                ],

                checkAllBooks: false, // 全选复选框的状态。

                reverseSelectBook: false,

                bookIds: [], // 选中项

                bookItemsText: '',
            }
            
        },

        methods: {

            addBookItem() {

                if (this.bookArr) {

                    this.bookArr.push({id: this.bookArr.length + 1, text: this.bookItemsText });
                    this.bookItemsText = '';
                }
            },

            /*单个删除按钮*/
            deleteItem(index) {

                if ( this.arr[index].isCanDel == true ) {

                    this.arr.splice(index, 1);

                }
                
                
            },

            /*批量删除选项*/
            deleteItems() {

                // 过滤出未被选中的项。
                let newArr = this.bookArr.filter( (value, index) => {
                    return this.bookIds.indexOf( index ) < 0;
                });

                // let newArr = this.arr2.filter( function(value, index) {
                //     return this.fruitIds.indexOf( index ) < 0;
                // }, this);
                
                this.bookArr = newArr;
                this.bookIds = [];

                // 还原全选和反选复选框的状态
                
                if (this.reverseSelectBook) this.reverseSelectBook = false;
                if (this.checkAllBooks) this.checkAllBooks = false;
            },

            /*全选按钮的功能。*/
            toggleCheckAll(e) {

                this.$nextTick( () => { // 等待 DOM / 数据属性更新完成之后在执行

                    if ( this.checkAllBooks ) {

                        /*this.bookArr.forEach( (value, index) => {
                            this.bookIds.push( index );
                        } );*/

                        getArrayIndexs(this.bookArr, this.bookIds);


                    } else {
                        this.bookIds = [];
                    }

                });
                
                
            },

            /*反选按钮执行的操作*/
            reverseSelect() {


                let arrayOfIndex = []; // Object.keys( this.bookArr ) -- 这个方法会把数组中的索引都转换为 字符串类型，在使用 indexOf 方法进行索引的时候需要注意

               /* this.bookArr.forEach( (value, index) => {
                    arrayOfIndex.push(index);
                } );*/

                getArrayIndexs(this.bookArr, arrayOfIndex);

                // indexOf() 方法当索引 数组的时候， 是不能够将字符串转换的。因此 "1" & 1 是不相同的。


               this.bookIds = arrayOfIndex.filter( (value, index) => {

                    return this.bookIds.indexOf(index) < 0;
                } );


                
            }
        },

        created() {

            console.log( Object.keys( this.bookArr ) );
        },

        components: {
            EleInput
        }
    }
</script>

<style>
    
</style>