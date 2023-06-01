import { onMounted, ref } from 'vue'
import { dayjs } from 'element-plus'


export default function useTime() {
    const temp = dayjs().format('YYYY年MM月DD日 HH:mm:ss')
    const time = ref(temp)

    onMounted(() => {
        setInterval(() => {
            time.value =  dayjs().format('YYYY年MM月DD日 HH:mm:ss')
        }, 1000);
    })

    return {
        time
    }

}