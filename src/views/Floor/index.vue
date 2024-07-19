<script setup>
import { ref } from 'vue'

const list1 = ref([
    { path: '/', name: ' 京东商城' },
    { path: '/', name: ' 天猫商城' },
])

const list2 = ref([
    { path: '/', name: ' 创想云' },
    { path: '/', name: ' 论坛' },
    { path: '/', name: ' 建模师入驻' },
    { path: '/', name: ' 合作者入驻' },
])

const list3 = ref([
    { path: '/', name: ' 服务政策' },
    { path: '/', name: ' 联系我们' },
    { path: '/', name: ' 常见问题' },
    { path: '/', name: ' 固件下载' },
])

const list4 = ref([
    { path: '/', name: ' 关于创想' },
    { path: '/', name: ' 新闻动态' },
    { path: '/', name: ' 社会责任' },
    { path: '/', name: ' 品牌来由' },
    { path: '/', name: ' 社会责任报告' },
])
</script>

<template>
    <div class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>官方商城</h4>
                        <ul>
                            <li v-for="(route, index) in list1" :key="index" class="ion-ios-arrow-forward"><router-link
                                    :to="route.path">
                                    {{ route.name }}</router-link></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>社区</h4>
                        <ul>
                            <li v-for="(route, index) in list2" :key="index" class="ion-ios-arrow-forward"><router-link
                                    :to="route.path">
                                    {{ route.name }}</router-link></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>服务支持</h4>
                        <ul>
                            <li v-for="(route, index) in list3" :key="index" class="ion-ios-arrow-forward"><router-link
                                    :to="route.path">
                                    {{ route.name }}</router-link></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>服务支持</h4>
                        <ul>
                            <li v-for="(route, index) in list4" :key="index" class="ion-ios-arrow-forward"><router-link
                                    :to="route.path">
                                    {{ route.name }}</router-link></li>
                        </ul>
                    </div>

                    <div class="box"></div>

                    <div class="col-lg-3x col-md-6 footer-newsletter">
                        <h4>Subscription|订阅</h4>
                        <p>感谢您选择我们！我们始终致力于为客户提供最优质的服务和产品。如有任何疑问或建议，请随时与我们联系。您的支持是我们前进的动力！</p>
                        <form action="" method="post">
                            <input type="email" name="email"><input type="submit" value="订阅">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.box {
    height: 120px;
    width: 0;
    margin: 50px 70px;
    border: 1px solid #ccc;
}

.col-lg-3 {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 15%;
}

.col-lg-3x {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
}

/* @media (min-width: 992px) {
    .col-lg-3 {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 15%;
    }

    .col-lg-3x {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
} */
</style>