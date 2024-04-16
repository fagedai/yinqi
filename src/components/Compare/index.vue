<template>
    <div class="skills mt-100">
        <div class="container">
            <div class="section-header animate__animated animate__fadeInUp">
                <h2>3D打印能力比较</h2>
            </div>
        </div>
        <div class="vertical-table">
            <div class="table-row" v-for="(row, rowIndex) in tableData" :key="rowIndex">
                <div class="table-cell" v-for="(cell, key, cellIndex) in row" :key="cellIndex"
                    :class="{ 'last-column': key === 'other' }">
                    <span class="cell-label" v-if="rowIndex === 0">{{ cell }}</span>
                    <span class="cell-value" v-else>{{ cell }}</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
    {
        name: '零件名称',
        time: '交付时间',
        volume: '制造体积',
        layer: '层厚度',
        size: '最小特征尺寸',
        errand: '公差',
        descride: '描述说明',
        other: '更多'
    },
    {
        name: 'SLA',
        time: '3天',
        volume: '最大 736 x 635 x 533 毫米',
        layer: '最小 0.02 毫米',
        size: ' 0.1 毫米',
        errand: '±0.2%（± 0.2 毫米）',
        descride: '此种技术能够生产极其精确的高分辨率部件。',
        other: '阅读有关 SLA 的更多内容'
    },
    {
        name: 'MJF',
        time: '3 天',
        volume: '最大 380 x 284 x 380 毫米；但通常建议最大尺寸为 356 x 280 x 356 毫米',
        layer: '约 0.08 毫米',
        size: '最小 0.5 毫米，建议 0.7 毫米',
        errand: '±0.3%（± 0.2 毫米）',
        descride: '此种技术能够快速地生产高度精确的耐用部件，特别是与其他粉末床熔融技术相比。',
        other: '阅读有关 MJF 的更多内容'
    },
    {
        name: 'SLS',
        time: '3 天',
        volume: '最大 340 x 340 x 605 毫米；但通常建议最大尺寸为 320 x 320 x 580 毫米',
        layer: '约 0.1 毫米；对于不透水部件，壁厚度较高时，为 1.5 毫米',
        size: '最小 0.5 毫米，建议 0.75 毫米',
        errand: '±0.3% (± 0.3 毫米)',
        descride: '用于工业 3D 打印最常见、成本最低的技术之一。',
        other: '阅读有关 SLS 的更多内容'
    },
    {
        name: 'FDM',
        time: '3 天',
        volume: '最大 914 x 610 x 914 毫米',
        layer: '约 0.05–0.3 毫米',
        size: '最大 0.2 毫米',
        errand: '±0.3%（± 0.3 毫米）',
        descride: '由于提供多种材料选择，精确度高，能够打印大型部件，因而广为人知。',
        other: '阅读有关 FDM 的更多内容'
    },
    {
        name: 'SLM',
        time: '5 天',
        volume: '最大 119 x 189 x 300 毫米；建议尺寸：100 x 100 x 150 mm 毫米以内',
        layer: '约 0.1 毫米',
        size: '建议最小 1 毫米',
        errand: '±0.1%（± 0.1 毫米）。但是，在新设计中进行第一次尝试时，不能保证公差',
        descride: '金属 3D 打印技术。有选择地熔融铝或不锈钢的细小金属粉末。',
        other: '阅读有关 SLM 的更多内容'
    },
])
</script>

<style>
.vertical-table {
    border-collapse: collapse;
    width: 100%;
}

.table-row {
    display: flex;
    border-bottom: 1px solid #ddd;
    color: #000;
}

.table-cell {
    flex: 1;
    padding: 8px;
    border-right: 1px solid #ddd;
    text-align: center;
}

.table-cell:last-child {
    border-right: none;
}

.last-column .cell-value {
    color: #0E6AED;
    cursor: pointer;
}

.cell-label {
    font-weight: bold;
    text-align: center;
}

.cell-value {
    text-align: center;
}
</style>