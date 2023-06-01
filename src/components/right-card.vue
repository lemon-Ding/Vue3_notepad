<template>
    <el-col :span="12" class="right-card">
        <el-input v-model="title" maxlength="8" placeholder="请输入标题" show-word-limit type="text" />
        <div style="margin: 20px 0" />
        <el-input v-model="content" class="textarea" :autosize="{ minRows: 14, maxRows: 20 }" type="textarea" />
        <el-button v-if="!id" type="primary" @click="add">新增</el-button>
        <el-button v-else type="success" @click="save">保存</el-button>
        <el-button type="warning" @click="reset">重置</el-button>
    </el-col>
</template>
<script setup>
import { onUpdated } from 'vue'
import useRecord from '@/stores/record';
import { storeToRefs } from 'pinia';
import { ElMessage } from 'element-plus'

const recordStore = useRecord()
const { id, title, content, v } = storeToRefs(recordStore)

const emit = defineEmits(["insertlist"], ["savehandle"])
const props = defineProps({
    record: {
        type: Object,
        default: () => ({
            id: "",
            title: "",
            content: "",
            v: true
        })
    },
})

onUpdated(() => {
    recordStore.id = props.record.id
    recordStore.title = props.record.title
    recordStore.content = props.record.content
    // console.log(props.record.id)
})


const add = () => {
    emit("insertlist", {
        id: Date.now(),
        title: recordStore.title,
        content: recordStore.content,
        v: true
    })
    ElMessage({
        message: '新增成功',
        type: 'success',
    })
}

const save = () => {
    emit("savehandle", Object.assign({}, recordStore))
    ElMessage({
        message: '保存成功',
        type: 'success',
    })
}

const reset = () => {
    recordStore.id = ""
    recordStore.title = ""
    recordStore.content = ""
}

</script>
<style lang='less' scoped>
.right-card {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 2em;
}

.textarea {
    margin-bottom: 1em;
}

</style>