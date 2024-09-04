import { ref, reactive } from 'vue'

export default function losserMaterial() {
    //定义损耗材料
    const PLALosser = reactive([
        { id: 1, name: '普通', ch1: '光滑', ch2: '极佳', ch3: '高', ch4: '中', ch5: '中', ch6: '40-45', ch7: '0.25' },
        { id: 2, name: '丝绸', ch1: '金属感', ch2: '极佳', ch3: '较高', ch4: '弱', ch5: '中', ch6: '40-45', ch7: '0.35' },
        { id: 3, name: '哑光', ch1: '丝滑', ch2: '极佳', ch3: '较高', ch4: '较弱', ch5: '中', ch6: '40-45', ch7: '0.35' },
    ])
    //显示PLA选定的耗材类型
    const ShowPLALosser = ref(-1)

    //定义PETG的次要耗材
    const PETGLosser = reactive([
        { id: 1, name: '普通', ch1: '亮光', ch2: '优', ch3: '中', ch4: '较强', ch5: '优', ch6: '60', ch7: '0.25' },
        { id: 2, name: '特种', ch1: '半亮光', ch2: '极佳', ch3: '中', ch4: '较弱', ch5: '优', ch6: '70', ch7: '0.35' },
    ])
    //显示PETG选定的耗材类型
    const ShowPETGLosser = ref(-1)


    return { PLALosser, ShowPLALosser, PETGLosser, ShowPETGLosser }
}