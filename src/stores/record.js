import { defineStore } from "pinia";

const useRecord = defineStore("record", {
    state: () => ({
        id: "",
        title: "",
        content: "",
        v: true
    })


})

export default useRecord