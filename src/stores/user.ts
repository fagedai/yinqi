import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface LoginResponse {
    token?: String
}

interface UserInfoResponse {
    username?: String;
    password?: String;
}

export const userInfoState = defineStore('user', () => {
    //1.定义响应式数据
    const userInfo = reactive<{
        username: string | null;
        password: string | null;
    }>({
        username: null,
        password: null
    })

    //方法因为还没有定义，后续再说
    //2.定义方法
    // const getToken = async ({username, password}: {username: string, password: string}): Promise<void> => {
    //     const res: LoginResponse = await 
    // }
})