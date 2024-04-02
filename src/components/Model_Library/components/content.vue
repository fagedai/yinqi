<script setup>
import { ref } from 'vue'



const images = ref([
    {src: '/src/assets/model1.png' },
    {src: '/src/assets/model2.png' },
    {src: '/src/assets/model3.png' },
    {src: '/src/assets/model4.png' },
    {src: '/src/assets/model5.png' },
    {src: '/src/assets/model6.png' },
    {src: '/src/assets/model7.png' },
    {src: '/src/assets/model8.png' },
    
])

</script>


<!-- import 'lib/jquery/jquery-migrate.min.js';
import 'lib/bootstrap/js/bootstrap.bundle.min.js';
import 'lib/easing/easing.min.js';
import 'lib/waypoints/waypoints.min.js';
import 'lib/counterup/counterup.min.js';
import 'lib/owlcarousel/owl.carousel.min.js';
import 'lib/lightbox/js/lightbox.min.js';
import 'js/main.js'; -->

<template>
    


    <div class="portfolio mt-100">
            <div class="container">
                <div class="section-header">
                    <h2>Our Model Library</h2>
                    <p>
                        携手深圳技术大学等高校进行校企合作，致力于建立一个类似中国知网的数字建模作业、毕设数据库。此举旨在为学生和教师提供一个便捷、高效的数字建模作品存储和分享平台，促进教育资源的整合与优化，推动 3D 打印技术在教育领域的应用，满足不同层次用户的需求。
                    </p>
                </div>

                <div class="row portfolio-container">


                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <div class="portfolio-img">
                            <img src="/src/assets/model1.png" class="img-fluid" alt="Portfolio">
                            <a href="/src/assets/model1.png" data-lightbox="portfolio" data-title="Lorem ipsum dolor" class="link-preview" title="Preview"><i class="ion-md-eye"></i></a>
                            <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>

                        <div class="portfolio-info">
                            <h3>Lorem ipsum dolor</h3>
                            <p>model1</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <div class="portfolio-img">
                            <img src="/src/assets/model2.png" class="img-fluid" alt="Portfolio">
                            <a href="/src/assets/model2.png" class="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i class="ion-md-eye"></i></a>
                            <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>

                        <div class="portfolio-info">
                            <h3>Nulla ullamcorper pharetra</h3>
                            <p>model1</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <div class="portfolio-img">
                            <img src="/src/assets/model3.png" class="img-fluid" alt="Portfolio">
                            <a href="/src/assets/model3.png" class="link-preview" data-lightbox="portfolio" data-title="Phasellus eget dictum" title="Preview"><i class="ion-md-eye"></i></a>
                            <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>

                        <div class="portfolio-info">
                            <h3>Phasellus eget dictum</h3>
                            <p>model3</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <div class="portfolio-img">
                            <img src="/src/assets/model4.png" class="img-fluid" alt="Portfolio">
                            <a href="/src/assets/model4.png" data-lightbox="portfolio" data-title="Lorem ipsum dolor" class="link-preview" title="Preview"><i class="ion-md-eye"></i></a>
                            <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>

                        <div class="portfolio-info">
                            <h3>Donec mattis vestibulum</h3>
                            <p>model4</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <div class="portfolio-img">
                            <img src="/src/assets/model5.png" class="img-fluid" alt="Portfolio">
                            <a href="/src/assets/model5.png" class="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i class="ion-md-eye"></i></a>
                            <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>

                        <div class="portfolio-info">
                            <h3>Pellentesque ullamcorper</h3>
                            <p>model5</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <div class="portfolio-img">
                            <img src="/src/assets/model6.png" class="img-fluid" alt="Portfolio">
                            <a href="/src/assets/model6.png" class="link-preview" data-lightbox="portfolio" data-title="Phasellus eget dictum" title="Preview"><i class="ion-md-eye"></i></a>
                            <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>

                        <div class="portfolio-info">
                            <h3>Sed pretium sapien</h3>
                            <p>model6</p>
                        </div>
                    </div>

                   
                        <div class="col-lg-4 col-md-6 portfolio-item">
                            <div class="portfolio-img">
                                <img src="/src/assets/model7.png" class="img-fluid" alt="Portfolio">
                                <a href="/src/assets/model7.png" data-lightbox="portfolio" data-title="Lorem ipsum dolor" class="link-preview" title="Preview"><i class="ion-md-eye"></i></a>
                                <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                            </div>
    
                            <div class="portfolio-info">
                                <h3>Lorem ipsum dolor</h3>
                                <p>model7</p>
                            </div>
                        </div>
    
                    <div class="col-lg-4 col-md-6 portfolio-item">
                            <div class="portfolio-img">
                                <img src="/src/assets/model8.png" class="img-fluid" alt="Portfolio">
                                <a href="/src/assets/model8.png" class="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i class="ion-md-eye"></i></a>
                                <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>
    
                        <div class="portfolio-info">
                                <h3>Nulla ullamcorper pharetra</h3>
                                <p>model8</p>
                            </div>
                        </div>
    
                        <div class="col-lg-4 col-md-6 portfolio-item">
                        <div class="portfolio-img">
                            <img src="/src/assets/model1.png" class="img-fluid" alt="Portfolio">
                            <a href="/src/assets/model1.png" data-lightbox="portfolio" data-title="Lorem ipsum dolor" class="link-preview" title="Preview"><i class="ion-md-eye"></i></a>
                            <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>

                        <div class="portfolio-info">
                            <h3>Lorem ipsum dolor</h3>
                            <p>model1</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <div class="portfolio-img">
                            <img src="/src/assets/model2.png" class="img-fluid" alt="Portfolio">
                            <a href="/src/assets/model2.png" class="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i class="ion-md-eye"></i></a>
                            <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>

                        <div class="portfolio-info">
                            <h3>Nulla ullamcorper pharetra</h3>
                            <p>model1</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <div class="portfolio-img">
                            <img src="/src/assets/model3.png" class="img-fluid" alt="Portfolio">
                            <a href="/src/assets/model3.png" class="link-preview" data-lightbox="portfolio" data-title="Phasellus eget dictum" title="Preview"><i class="ion-md-eye"></i></a>
                            <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>

                        <div class="portfolio-info">
                            <h3>Phasellus eget dictum</h3>
                            <p>model3</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <div class="portfolio-img">
                            <img src="/src/assets/model4.png" class="img-fluid" alt="Portfolio">
                            <a href="/src/assets/model4.png" data-lightbox="portfolio" data-title="Lorem ipsum dolor" class="link-preview" title="Preview"><i class="ion-md-eye"></i></a>
                            <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>

                        <div class="portfolio-info">
                            <h3>Donec mattis vestibulum</h3>
                            <p>model4</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <div class="portfolio-img">
                            <img src="/src/assets/model5.png" class="img-fluid" alt="Portfolio">
                            <a href="/src/assets/model5.png" class="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i class="ion-md-eye"></i></a>
                            <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>

                        <div class="portfolio-info">
                            <h3>Pellentesque ullamcorper</h3>
                            <p>model5</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <div class="portfolio-img">
                            <img src="/src/assets/model6.png" class="img-fluid" alt="Portfolio">
                            <a href="/src/assets/model6.png" class="link-preview" data-lightbox="portfolio" data-title="Phasellus eget dictum" title="Preview"><i class="ion-md-eye"></i></a>
                            <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>

                        <div class="portfolio-info">
                            <h3>Sed pretium sapien</h3>
                            <p>model6</p>
                        </div>
                    </div>

                   
                        <div class="col-lg-4 col-md-6 portfolio-item">
                            <div class="portfolio-img">
                                <img src="/src/assets/model7.png" class="img-fluid" alt="Portfolio">
                                <a href="/src/assets/model7.png" data-lightbox="portfolio" data-title="Lorem ipsum dolor" class="link-preview" title="Preview"><i class="ion-md-eye"></i></a>
                                <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                            </div>
    
                            <div class="portfolio-info">
                                <h3>Lorem ipsum dolor</h3>
                                <p>model7</p>
                            </div>
                        </div>
    
                    <div class="col-lg-4 col-md-6 portfolio-item">
                            <div class="portfolio-img">
                                <img src="/src/assets/model8.png" class="img-fluid" alt="Portfolio">
                                <a href="/src/assets/model8.png" class="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i class="ion-md-eye"></i></a>
                                <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
                        </div>
    
                        <div class="portfolio-info">
                                <h3>Nulla ullamcorper pharetra</h3>
                                <p>model8</p>
                            </div>
                        </div>
    
                   

                       
        

                </div>
            </div>
        </div>

</template>