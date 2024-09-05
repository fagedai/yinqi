<script setup lang="ts">
import useItem from './hooks/useItem'

const { multipleTableRef, tableData, toggleSelection, handleSelectionChange, multipleSelection } = useItem()
</script>
<template>
    <div class="base">
        <h3>购物车</h3>
        <div class="title"></div>
        <div class="list">
            <el-table ref="multipleTableRef" :data="tableData" style="width: 100%"
                @selection-change="handleSelectionChange" :header-cell-style="{ background: '#f5f7fa' }">
                <el-table-column type="selection" width="55" />
                <el-table-column property="material" label="耗材" width="120" />
                <el-table-column property="date" label="预计发货日期" width="200" />
                <el-table-column property="univate" label="单价" width="120" />
                <el-table-column property="number" label="数量" width="120" />
                <el-table-column property="count" label="总价" width="120" />
                <el-table-column label="操作">
                    <template #default="{ row }" style="display: flex; justify-content: center; align-items: center">
                        <el-button type="text" size="small" @click="handleEdit(row)">修改</el-button>
                        <el-button type="text" size="small" @click="handleDelete(row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <div class="shoppingCart_footer">
                <p>已选择 {{ multipleSelection.length }} 个商品</p>
                <el-button @click="toggleSelection([tableData[1], tableData[2]])">
                    批量删除
                </el-button>
                <el-button @click="toggleSelection()">全部删除</el-button>
            </div>
            <p class="countPrice">合计：<i>0元</i></p>
        </div>
        <el-button type="primary" class="pay">立即支付</el-button>
    </div>
</template>
<style scoped>
.base {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;

    h3 {
        display: flex;
        align-items: center;
        padding: 10px;
        width: 100%;
        color: #000;
    }
}

.title {
    padding: 3px;
    background-color: #ccc;
    font-weight: 600;
    color: #000;
}

.list {
    margin-top: 30px;

    /deep/ .cell {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        height: 50px;

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

    .shoppingCart_footer {
        display: flex;
        align-items: center;
        padding: 10px;
        margin-top: 10px;
        background-color: #fff;

        p {
            margin: 0 10px;
            color: #000;
        }

        button {
            padding: 5px 10px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
            outline: none;
        }
    }

    .countPrice {
        float: right;
        margin: -35px 20px 10px 0;
        background-color: #fff;
        font-size: 16px;
        font-weight: 600;
        color: #000;

        i {
            color: red;
        }
    }
}

.pay {
    float: right;
    margin: 20px;
}
</style>