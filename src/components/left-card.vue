<template>
    <el-col :span="12" class="left-card">
        <el-row>
            <div style="height:50px;">
                <el-button v-if="delBtnShow" :icon="Delete" type="danger" @click="delBatch">批量删除</el-button>
            </div>
        </el-row>
        <el-row>
            <Listitem v-for="item in listData" :key="item.id">
                <template v-slot:left>
                    <MyCheckbox @mchandle="changeCheckedList" :itemId="item.id" :checkedParam="checkedList"></MyCheckbox>
                    <div class="list">
                        <span style="font-weight:bold;">{{ item.title }}</span>
                        <span style="font-size:13px;">{{ item.content.substring(0, 14) + "..." }}</span>
                    </div>
                </template>
                <template v-slot:right>
                    <el-button type="primary" :icon="Edit" @click="edit(item)">修改</el-button>
                    <el-button type="danger" :icon="Delete" @click="del(item.id)">删除</el-button>
                </template>
                <template v-slot:bottom>
                    <el-divider>
                        <el-icon><star-filled /></el-icon>
                    </el-divider>
                </template>
            </Listitem>
        </el-row>
    </el-col>
</template>
<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { Edit, Delete, StarFilled } from '@element-plus/icons-vue'
import Listitem from './list-item.vue'
import MyCheckbox from './checkbox.vue'
import { ref, watchEffect } from 'vue'

const checkedList = ref([])
const delBtnShow = ref(false)

defineProps({
    listData: {
        type: Array,
        default: () => ([])
    },
})
const emit = defineEmits(["removeItem"], ["edithandle"], ["removebatch"])

const edit = item => {
    emit("edithandle", item)
}

const del = (id) => {
    ElMessageBox.confirm(
        '您确定要删除吗',
        'Warning',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
            draggable: true,
        }
    ).then(() => {
        ElMessage({
            type: 'success',
            message: 'Delete completed',
        })
        emit("removeItem", id)
    }).catch(() => {
        ElMessage({
            type: 'info',
            message: 'Delete canceled',
        })
    })
}

const delBatch = () => {
    ElMessageBox.confirm(
        '您确定要批量删除吗',
        'Warning',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
            draggable: true,
        }
    ).then(() => {
        ElMessage({
            type: 'success',
            message: 'Delete completed',
        })
        emit("removebatch", checkedList.value)
    }).catch(() => {
        ElMessage({
            type: 'info',
            message: 'Delete canceled',
        })
    })
}


watchEffect(() => {
    // console.log(checkedList.value)
    if (checkedList.value.length > 1) {
        delBtnShow.value = true
    } else {
        delBtnShow.value = false
    }
})

const changeCheckedList = obj => {
    // console.log(obj)
    if (obj.checked) {
        checkedList.value.push(obj.id)
    } else {
        checkedList.value = checkedList.value.filter(v => v !== obj.id)
    }
}


</script>
<style lang='less' scoped>
.left-card {
    padding-left: 10px;
    padding-right: 10px;
    height: 480px;
    overflow-y: auto;
}


.list {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    float: left;
}


.card-item {
    height: 50px;
}
.el-divider--horizontal{
    margin: 12px 0;
}
</style>   