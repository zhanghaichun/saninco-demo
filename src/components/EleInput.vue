<template>
    <div class="demo-input-suffix">
        <el-row :gutter="15">
            <el-col :span="4"> <label for="" class="input-label">属性方式： </label></el-col>

            <el-col :span="10">
                <el-input
                    placeholder="请选择日期"
                    suffix-icon="el-icon-date"
                    v-model="input2">
                </el-input>
            </el-col>

            <el-col :span="10">
                <el-input
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input21">
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'eleInput',

        data() {
            return {
                input21: '',
                input2: '',
            }
        }
    }
</script>

<style scoped>
    .input-label {
        display: inline-block;
        padding-top: 10px;
        font-weight: bold;
    }
</style>