<script>

export default {

    data() {
        return {
            loginForm: {
                username: 'admin',
                password: '123456'


            },
            loginFormRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                ]



            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');



            // this.$refs.LoginFormRef.validate( async valid=>{
            // if (!valid)  return
            // const {data:res}=this.$http.post('login',this.loginForm)

            // });
        },
        reset() {
            console.log('reset');
            console.log(this.axio);
            this.$refs.LoginFormRef.resetFields();
            // if(refs.meta.stauts!==200)return this.$message.error("登录失败") 
            // this.$message.susses("登录成功")
        }
    }
}

</script>

<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 图片 -->

            <div class="logo_box">
                <img src="/src/assets/newLogo1.png" alt="">
            </div>

            <!-- 表单 -->

            <div class="input">
                <el-form ref="LoginFormRef" :rules="loginFormRules" :model="loginForm" label-width="10px">
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input v-model="loginForm.password" type="password"
                            prefix-icon="el-icon-s-promotion"></el-input>
                    </el-form-item>

                    <el-form-item style="margin-left: 32px;">
                        <el-button type="primary" @click="onSubmit">登录</el-button>
                        <el-button type="warning" @click="reset">注册</el-button>
                    </el-form-item>
                </el-form>
                <div class="ret">
                    <router-link to="/">返回首页</router-link>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
body {
    height: 678px;
}

.login_container {
    background-image: url('@/assets/bgURL.jpg') !important;
    background-attachment: fixed;
    background-size: cover;
    height: 678px;
}

.login_box {
    background-color: white;
    border-radius: 10px;
    width: 450px;
    height: 300px;
    position: absolute;
    border: 2px solid rgb(162, 187, 233);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.input {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 30px;
    width: 100%;
    height: 300px;
}

.logo_box {
    width: 110px;
    height: 110px;
    border: 1px solid rgb(0, 128, 94);
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;




}

.img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
}

.ret {
    position: absolute;
    bottom: 5px;
    right: 10px;
}
</style>
