<template>
    <el-row class="header">
        <el-col class="bg-blue">
            <span>Vue3 - 记事本 </span>
            <span>{{ time }}</span>
        </el-col>
    </el-row>
</template>
<script setup>
import useTime from '../hooks/useTime'
const {time} = useTime()


</script>
<style lang='less' scoped>
.bg-blue {
    background: rgb(115, 133, 231);
    border-radius: 4px;
    min-height: 5em;
    // align-items: center;
    display: flex;
    color: white;
    padding-left: 1.5em;
    flex-direction: column;
    padding-top: 1em;
}

span:first-child {
    font-size: 1.5em;
}

span:last-child {
    padding-top: 3px;
    text-indent: 1em;
    font-size: 10px;
}
</style>