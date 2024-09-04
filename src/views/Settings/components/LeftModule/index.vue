<script setup>
import { ref } from "vue";

const list1 = ref([
    { imgpath: "/src/assets/Settings/user.png", name: "基本信息", id: 1, path: "/home/settings/baseMessage" },
    { imgpath: "/src/assets/Settings/star.png", name: "我的收藏", id: 2 },
    { imgpath: "/src/assets/Settings/periscope.png", name: "收货地址", id: 3 },
    { imgpath: "/src/assets/Settings/ad-1.png", name: "发票信息", id: 4 },
    { imgpath: "/src/assets/Settings/电子票.png", name: "申请电子票", id: 5 },
]);
const list2 = ref([
    { imgpath: "/src/assets/Settings/订单.png", name: "我的订单", id: 6, path: "/home/settings/trade" },
    { imgpath: "/src/assets/Settings/购物车.png", name: "购物车", id: 7, path: "/home/settings/shopping" },
]);
const list3 = ref([
    { imgpath: "/src/assets/Settings/yv_shejishi.png", name: "设计师信息", id: 8 },
    { imgpath: "/src/assets/Settings/我的需求.png", name: "我的需求", id: 9 },
]);
const curIdx = ref(1);
const actIdx = ref(1);
const isIndexActive = (index) => {
    return index === curIdx.value || index === actIdx.value;
};
</script>
<template>
    <div class="left">
        <!-- 注意此页面是网上模仿商业官网，后续需要更改 -->
        <div class="dl">
            <div class="dt">个人中心</div>
            <router-link v-for="route in list1" :key="route.id" to="/home/settings"
                :class="{ active: isIndexActive(route.id) }" class="dd" style="display: block; color: gray"
                @mouseenter="curIdx = route.id" @mouseout="curIdx = -1" @click="actIdx = route.id">
                <img :src="route.imgpath" alt="" width="15" height="15" style="margin-bottom: 3px" />
                {{ route.name }}
            </router-link>
        </div>
        <div class="dl">
            <div class="dt">订单中心</div>
            <router-link v-for="route in list2" :key="route.id" :to="route.path"
                :class="{ active: isIndexActive(route.id) }" class="dd" style="display: block; color: gray"
                @mouseenter="curIdx = route.id" @mouseout="curIdx = -1" @click="actIdx = route.id">
                <img :src="route.imgpath" alt="" width="15" height="15" style="margin-bottom: 3px" />
                {{ route.name }}
            </router-link>
        </div>
        <div class="dl">
            <div class="dt">设计</div>
            <router-link v-for="route in list3" :key="route.id" to="/home/settings"
                :class="{ active: isIndexActive(route.id) }" class="dd" style="display: block; color: gray"
                @mouseenter="curIdx = route.id" @mouseout="curIdx = -1" @click="actIdx = route.id">
                <img :src="route.imgpath" alt="" width="15" height="15" style="margin-bottom: 3px" />
                {{ route.name }}
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.left {
    /* display: inline-block; */
    padding-top: 30px;
    width: 250px;
    height: 536px;
}

.dl {
    margin: 0;
    padding-top: 10px;
    border-bottom: 1px solid rgb(222, 227, 232);
}

.dl:last-child {
    border: 0px;
}

.dd {
    display: block;
    color: gray;
    border-radius: 7px;
    height: 30px;
    padding-top: 4px;
    padding-left: 10px;
    font-size: 14px;

}

.dt {
    font-size: 12px;
    margin-bottom: 10px;
    padding-left: 10px;
}

.active {
    background-color: #d8d8d8cb;
    font-weight: bold;
}
</style>