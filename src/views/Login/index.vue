<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import { userInfoState } from '@/stores/user'
import { ElMessage } from 'element-plus'

//正常登录
const formLabelWidth = '140px'

const form = reactive({
    username: '',
    password: ''
})
const rules = {
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};
const formRef = ref(null);

const router = useRouter();
const userStore = userInfoState();
const doLogin = () => {
    const { username, password } = form
    //调用实例方法
    formRef.value.validate(async (valid) => {
        if (valid) {
            await userStore.getToken({ username, password })
            await userStore.getUserInfo()
            const isLogin = sessionStorage.getItem("isLogin") === "true"
            if (isLogin) {
                // 1.提示用户
                ElMessage({ type: 'success', message: '登陆成功' })
                // 2.跳转首页
                router.replace({ path: '/' })
                setTimeout(() => kannoFn(), 2000)
                dialogFormVisible.value = false
            }
            else {
                ElMessage({ type: 'error', message: '账号或密码错误' })
            }
        }
    })
}

// const isLogin = sessionStorage.getItem("isLogin") === "true"

function kannoFn() {
    location.reload();
}
const Cancel = () => {
    dialogFormVisible.value = false
    ElMessage({
        message: "已取消",
        type: "info",
        plain: true,
    });
};

//处理和其他组件的关系
const dialogFormVisible = defineModel()
</script>
<template>
    <!-- <div class="unlogin" v-show="!isLogin"> -->
    <div class="unlogin">
        <el-button @click=" dialogFormVisible = true" class="nav_login">
            登录
        </el-button>
        <el-dialog v-model="dialogFormVisible" title="欢迎登录！" width="500">
            <el-form ref="formRef" :model="form" :rules="rules">
                <el-form-item label="用户名：" prop="username" :label-width="formLabelWidth">
                    <el-input v-model="form.username" autocomplete="off" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item label="密码：" prop="password" :label-width="formLabelWidth">
                    <el-input v-model="form.password" type="password" show-password autocomplete="off"
                        placeholder="请输入密码" />
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="Cancel">取消</el-button>
                    <el-button type="primary" @click="doLogin">
                        登录
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<style scoped>
.example-showcase .el-dropdown+.el-dropdown {
    margin-left: 15px;
}

.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}

.nav_login {
    float: right;
    height: 40px;
    margin: 10px;
    padding: 0 30px;
    color: #fff;
    background-color: #436EFF;
    line-height: 40px;
    border-radius: 5px;
}
</style>