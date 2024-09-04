<script setup>
import { ref, reactive, watch, watchEffect } from 'vue'
import mainMaterial from './hooks/mainMaterial'
import losserMaterial from './hooks/losserMaterial'

//定义主耗材
const { MainMater, ShowMainMater } = mainMaterial()

//定义PLA的次要耗材
const { PLALosser, ShowPLALosser, PETGLosser, ShowPETGLosser } = losserMaterial()

//显示的特性
const showMaterial = ref(null)
watch(() => ShowMainMater, (oldValue, newValue) => {
    if (oldValue !== newValue) {
        ShowPLALosser.value = -1
        showMaterial.value = null
    }
})
watchEffect(() => {
    if (ShowMainMater.value === 1 && ShowPLALosser.value === 1) {
        showMaterial.value = PLALosser[0]
    } else if (ShowMainMater.value === 1 && ShowPLALosser.value === 2) {
        showMaterial.value = PLALosser[1]
    } else if (ShowMainMater.value === 1 && ShowPLALosser.value === 3) {
        showMaterial.value = PLALosser[2]
    } else if (ShowMainMater.value === 2 && ShowPETGLosser.value === 1) {
        showMaterial.value = PETGLosser[0]
    } else if (ShowMainMater.value === 2 && ShowPETGLosser.value === 2) {
        showMaterial.value = PETGLosser[1]
    } else if (ShowMainMater.value === 3) {
        showMaterial.value = MainMater[2]
    } else if (ShowMainMater.value === 4) {
        showMaterial.value = MainMater[3]
    }
})

//选择服务
const selectedService = reactive([false, false, false, false, false])

//备注
//指定颜色（如果选择了此服务）
const input = ref('')
//加急程度（如果选择了此服务）
const radio = ref(1)
//其他备注
const textarea = ref('')
</script>

<template>
    <div class="base">
        <div class="head">
            <h5>3D打印下单平台</h5>
            <a href="javascript:;">新手下单指引<i> ></i></a>
            <a href="javascript:;">制作打印及其规范<i> ></i></a>
        </div>
        <div class="material">
            <div class="title">请选择你需要的材料</div>
            <h5 style="margin: 10px;">主材料：</h5>
            <div class="mainMaterial">
                <el-radio-group v-model="ShowMainMater">
                    <el-radio v-for="item in MainMater" :key="item.id" :value="item.id" border>
                        {{ item.name }}
                    </el-radio>
                </el-radio-group>
            </div>
            <h5 style="margin: 10px;">次材料：</h5>
            <div class="mainMaterial">
                <ul>
                    <el-radio-group v-model="ShowPLALosser" v-show="ShowMainMater === 1">
                        <el-radio v-for="item in PLALosser" :key="item.id" :value="item.id" border>
                            {{ item.name }}
                        </el-radio>
                    </el-radio-group>
                    <el-radio-group v-model="ShowPETGLosser" v-show="ShowMainMater === 2">
                        <el-radio v-for="item in PETGLosser" :key="item.id" :value="item.id" border>
                            {{ item.name }}
                        </el-radio>
                    </el-radio-group>
                    <li v-show="ShowMainMater === 3 || ShowMainMater === 4">
                        <h6>无次要材料</h6>
                    </li>
                    <li v-show="ShowMainMater === -1">
                        <h6>请选主材料</h6>
                    </li>
                </ul>
            </div>
            <h5 style="margin: 10px;">材料特性：</h5>
            <div style="color: #000;">
                <ul v-if="showMaterial !== null">
                    <li>光泽度：{{ showMaterial.ch1 }}</li>
                    <li>平整度：{{ showMaterial.ch2 }}</li>
                    <li>硬度：{{ showMaterial.ch3 }}</li>
                    <li>抗冲击：{{ showMaterial.ch4 }}</li>
                    <li>耐候性：{{ showMaterial.ch5 }}</li>
                    <li>耐温℃：{{ showMaterial.ch6 }}</li>
                    <li>元/克：{{ showMaterial.ch7 }}</li>
                </ul>
                <div v-else style="margin: 20px; color: #000">请选择材料</div>
            </div>
        </div>
        <div class="provide_service">
            <div class="title">可选服务添加</div>
            <div class="selectService">
                <el-checkbox v-model="selectedService[0]" label="指定颜色" size="large" border />
                <el-checkbox v-model="selectedService[1]" label="模型文件处理" size="large" border />
                <el-checkbox v-model="selectedService[2]" label="模型后处理" size="large" border />
                <el-checkbox v-model="selectedService[3]" label="加急" size="large" border />
                <el-checkbox v-model="selectedService[4]" label="校内送货" size="large" border />
            </div>
        </div>
        <div class="attation">
            <div class="title">备注</div>
            <el-input v-model="input" v-show="selectedService[0] === true" style="width: 240px" class="selected"
                placeholder="请输入您需要的颜色" />
            <div class="select_urgent" v-show="selectedService[3] === true">
                <p>请选择您需要加急的情况：</p>
                <el-radio-group v-model="radio">
                    <el-radio :value="1">普通(10%)</el-radio>
                    <el-radio :value="2">加急(20%)</el-radio>
                    <el-radio :value="3">特急(30%)</el-radio>
                </el-radio-group>
            </div>
            <el-input v-model="input" style="width: 240px" class="selected" placeholder="请输入您预计模型的重量(g)" />
            <el-input v-model="textarea" style="width: 950px; margin: 20px;" :autosize="{ minRows: 4, maxRows: 4 }"
                type="textarea" placeholder="请输入您需要让我们注意的地方" />
        </div>
        <div class="total">
            <div class="title">总计金额</div>
            <p>您模型的金额为(选择耗材单价x重量)：</p>
            <i>50￥</i>
            <br>
            <p>您选择服务的金额为(根据选择的服务和模型的大小比例)：</p>
            <i>50￥</i>
            <br>
            <p>总计金额为：</p>
            <i style="font-size: large;">100￥</i>
        </div>
        <el-button type="primary" style="margin-left: 40%; margin: 55px 0 20px 40%;">保存并放至购物车</el-button>
    </div>
</template>

<style scoped>
.base {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
}

.head {
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;

    h5 {
        float: left;
        color: #000;
    }

    a {
        margin-left: 10px;
        border: 0;
        font-size: small;
    }
}

.title {
    padding: 5px 10px;
    background-color: #ccc;
    font-size: 12px;
    font-weight: 600;
    color: #000;
}

.material {
    .mainMaterial {
        padding: 10px;
        height: 56px;

        ul {
            display: flex;
            align-items: center;
            padding: 0;
            margin: 0;

            li {
                margin: 0 10px;
            }
        }
    }

    h5,
    h6 {
        color: #000;
    }

    button {
        padding: 5px 10px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        cursor: pointer;
        outline: none;

        &:hover {
            background-color: #ccc;
        }
    }
}

.provide_service {
    .selectService {
        margin: 20px
    }
}

.attation {
    .select_urgent {
        display: flex;
        align-items: center;
        margin: 20px 0 0 20px;
    }

    label {
        margin-bottom: 0 !important;
    }

    .selected {
        margin: 20px 0 0 20px;
    }
}

.total {
    color: #000;

    p {
        margin: 20px;
    }

    i {
        float: right;
        color: red;
        margin-right: 20px
    }
}
</style>