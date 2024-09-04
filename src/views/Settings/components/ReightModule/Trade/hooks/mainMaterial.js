import { ref, reactive } from 'vue'

export default function mainMaterial() {
    //定义主耗材
    const MainMater = reactive([
        { id: 1, name: 'PLA' },
        { id: 2, name: 'PETG' },
        { id: 3, name: 'PETG-LS', ch1: '亮光', ch2: '优', ch3: '低', ch4: '强', ch5: '优', ch6: '45', ch7: '0.25' },
        { id: 4, name: 'PC', ch1: '极亮光', ch2: '中', ch3: '高', ch4: '极强', ch5: '优', ch6: '105', ch7: '0.45' },
    ])

    const ShowMainMater = ref(-1)

    return { MainMater, ShowMainMater }
}