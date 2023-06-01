<template>
    <el-row class="my-search">
        <el-col>
            <div>
                <el-input placeholder="请输入搜索内容" v-model="inputValue" @input="searchIput" :prefix-icon="Search" />
            </div>
        </el-col>
    </el-row>
    <el-row class="main">
        <LeftCard :listData="list.filter(item => item.v)" @removeItem="delItem" @removebatch="delItemBatch"
            @edithandle="editItem"></LeftCard>
        <RightCard :record="selectedItem" @insertlist="addItem" @savehandle="updateItem"></RightCard>
    </el-row>
</template>
<script setup>
import { Edit, Delete, Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

import LeftCard from './left-card'
import RightCard from './right-card.vue'

const list = ref([
    {
        id: 1,
        title: "one",
        content: "事项1事项1事项1",
        v: true
    },
    {
        id: 2,
        title: "two",
        content: "事项2事项2事项2",
        v: true
    },
    {
        id: 3,
        title: "three",
        content: "事项3事项3事项3",
        v: true
    },

])
const inputValue = ref("")

const selectedItem = ref({})

// 不等于当前删除的Id的过滤出来,形成一个新数组
const delItem = id => list.value = list.value.filter(v => v.id !== id)
const editItem = item => {
    selectedItem.value = Object.assign({}, item)
    console.log(selectedItem);
}
const delItemBatch = delarr => {
    list.value = list.value.filter(v => delarr.indexOf(v.id) < 0 ? true : false)
}

const searchIput = e => {
    // console.log(e)

    list.value = list.value.map(item => {
        if (item.title.indexOf(e) >= 0 || item.content.indexOf(e) >= 0) {
            sessionStorage.setItem("key", e)
            item.v = true
            inputValue.value = sessionStorage.getItem("key")
        } else {
            item.v = false
        }
        return item
    })

}

const addItem = item => list.value.push(item)
const updateItem = newItem => {
    list.value = list.value.map(item => {
        if (item.id === newItem.id) {
            return newItem
        } else {
            return item
        }
    })
}


</script>
<style lang='less' scoped>
.main {
    background: rgb(244, 245, 252);
    height: calc((((100vh - 5em) - 2em) - 3em) - 2em);
    padding: 1.5em 1em;
    box-sizing: border-box;
}

.my-search {
    padding: 1.5em 1em;
}
</style>