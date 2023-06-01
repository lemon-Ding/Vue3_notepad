<template>
    <el-col class="card-item" :span="12">
        <slot name="left"></slot>
    </el-col>
    <el-col class="card-item options" :span="12" >
        <slot name="right"></slot>
    </el-col>
    <slot name="bottom"></slot>
</template>
<script setup>

</script>
<style lang='less' scoped>
.options {
    text-align: right;
    padding-top: 5px;
}

.card-item {
    height: 50px;
}</style>