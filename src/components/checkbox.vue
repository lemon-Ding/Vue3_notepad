<template>
    <el-checkbox @change="handle" size="large" />
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
    itemId: {
        type: Number,
    },
})
const emit = defineEmits(["mchandle"])

const handle = (e) => {
    // console.log(props.itemId,e)
    emit("mchandle", {
        id: props.itemId,
        checked: e
    })
}
</script>

<style lang='less' scoped>
.el-checkbox .el-checkbox--large .el-checkbox__label {
    font-size: 12px !important;
}

.el-checkbox.el-checkbox--large {
    float: left !important;
}

input{
    float: left;
}
</style>