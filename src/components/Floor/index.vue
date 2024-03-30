<script setup>
import { ref } from 'vue'

const list1 = ref([
    { path: '/', name: 'Home' },
    { path: '/', name: 'About us' },
    { path: '/', name: 'Our services' },
    { path: '/', name: 'Terms & condition' },
    { path: '/', name: 'Privacy policy' },
])

const list2 = ref([
    { path: '/', name: 'Lorem ipsum' },
    { path: '/', name: 'Pellentesque' },
    { path: '/', name: 'Suspendisse egestas' },
    { path: '/', name: 'Nulla tristique' },
    { path: '/', name: 'Phasellus leo' },
])
</script>

<template>
    <div class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>About Us</h4>
                        <ul>
                            <li v-for="(route, index) in list1" :key="index" class="ion-ios-arrow-forward"><router-link
                                    :to="route.path">
                                    {{ route.name }}</router-link></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li v-for="(route, index) in list2" :key="index" class="ion-ios-arrow-forward"><router-link
                                    :to="route.path">
                                    {{ route.name }}</router-link></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-contact">
                        <h4>Contact Us</h4>
                        <p>

                            深圳市坪山区石井街道<br>
                            田头社区竹韵花园3栋201<br>
                            <strong>Phone:</strong> 189 2566 3090<br>
                            <strong>Email:</strong> 202200703041@stumailsztu.edu.cn<br>
                        </p>

                        <div class="social-links">
                            <a href="#"><i class="ion-logo-twitter"></i></a>
                            <a href="#"><i class="ion-logo-facebook"></i></a>
                            <a href="#"><i class="ion-logo-linkedin"></i></a>
                            <a href="#"><i class="ion-logo-instagram"></i></a>
                            <a href="#"><i class="ion-logo-googleplus"></i></a>
                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6 footer-newsletter">
                        <h4>Subscription|订阅</h4>
                        <p>感谢您选择我们！我们始终致力于为客户提供最优质的服务和产品。如有任何疑问或建议，请随时与我们联系。您的支持是我们前进的动力！</p>
                        <form action="" method="post">
                            <input type="email" name="email"><input type="submit" value="Subscribe">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
