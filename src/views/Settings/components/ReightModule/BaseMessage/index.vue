<script setup>
import Login from "@/views/Login/index.vue";

</script>

<template>
    <div class="right">
        <div class="sonbox">
            <div class="title">基本信息</div>
            <div class="inputbox">
                <b>昵称: </b>
                <input class="input" type="text" />
            </div>

            <div class="inputbox">
                <b>性别：</b>
                <span class="radio1">
                    <input class="radio2" type="radio" name="age" checked />男
                </span>

                <span class="radio1">
                    <input class="radio2" type="radio" name="age" />女
                </span>
            </div>
            <div class="inputbox">
                <b>生日：</b>
                <select class="select_bir">
                    <option selected>年份</option>
                    <option v-for="i in (1990, 2025)">{{ i }}</option>
                </select>
                <select class="select_bir">
                    <option selected>月份</option>
                    <option v-for="i in 12" :key="i">{{ i }}</option>
                </select>
                <select class="select_bir">
                    <option selected>日期</option>
                    <option v-for="i in 31" :key="i">{{ i }}</option>
                </select>
            </div>
            <div class="inputbox">
                <b>邮箱: </b>
                <input class="input" type="text" />
            </div>
            <button class="button">保存</button>
            <div class="title">账号设置</div>
            <div class="inputbox yhm">
                <b class="yhm">用户名：</b>
                <b>135xxxx3641</b>
            </div>
            <div class="inputbox">
                <b class="sjh"> 手机号：</b>
                <b>135xxxx3641</b>
                <b><a href="">更换手机号</a></b>
            </div>
            <div class="inputbox">
                <b class="mm">密码：</b>
                <b>********</b>
                <b class="xgmm"><a href="">修改密码</a></b>
            </div>
            <div class="inputbox">
                <b class="qq">绑定qq账号：</b>
                <b>暂无绑定</b>
                <b class="bd"><a href="">点击绑定</a></b>
            </div>
            <div class="inputbox">
                <b class="vx">绑定微信账号：</b>
                <b>暂无绑定</b>
                <b class="bd"><a href="">点击绑定</a></b>
            </div>
            <div class="inputbox">
                <b class="vx zh">账号状况：</b>
                <b class="wdl">未登录</b>
                <Login></Login>
            </div>
        </div>
    </div>
</template>

<style scoped>
.right {
    /* display: inline-block; */
    width: 990px;
    height: 1000px;
    background-color: #fff;
    margin-left: 25px;
}

.sonbox {
    margin-top: 20px;
    margin: 0 auto;
    padding-left: 50px;
    padding-top: 30px;
}

.title {
    width: 1000px;
    margin-top: 50px;
    border-bottom: 1px solid rgb(222, 227, 232);
    font-size: 30px;
    color: black;
    margin-bottom: 15px;
    padding-bottom: 10px;

    &:first-child {
        margin-top: 0;
    }
}

b {
    font-size: 15px;
    margin-right: 50px;
    color: gray;
}

.input {
    padding-left: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f6f8fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s, box-shadow 0.3s;
    height: 40px;
    width: 300px;

    :focus {
        background-color: white;
        border: 1px solid #0969da;
    }
}

.inputbox {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

.radio1 {
    margin-right: 100px;
}

.radio2 {
    margin-right: 5px;
}

.select_bir {
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f6f8fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s, box-shadow 0.3s;
    height: 40px;
    width: 150px;
    margin-right: 50px;
    margin-left: 0px;
    padding-left: 10px;
}

.bt2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 30px;
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

.submit {
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

.button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    /* 设置相对定位 */
    overflow: hidden;
    /* 防止涟漪效果超出按钮边界 */
    transition: background-color 0.3s, transform 0.1s;
    /* 设置过渡效果 */
}

.button::after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.5s;
    /* 设置涟漪效果的过渡时间 */
}

/* 涟漪效果的动画 */
@keyframes rippleEffect {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
    }

    100% {
        transform: translate(-50%, -50%) scale(100);
        opacity: 0;
    }
}

.button:hover::after {
    content: "";
    animation: rippleEffect 1s forwards;
    /* 应用涟漪效果动画 */
}

.button:hover {
    background-color: #45a049;
    /* 悬停时背景颜色变深 */
    transform: scale(1.05);
    /* 悬停时按钮放大 */
}

.ret {
    position: absolute;
    bottom: 5px;
    right: 10px;
}

.yhm {
    margin-right: 70px;
}

.sjh {
    margin-right: 70px;
}

.mm {
    margin-right: 89px;
}

.qq {
    margin-right: 40px;
}

.vx {
    margin-right: 27px;
}

.xgmm {
    margin-left: 40px;
}

.bd {
    margin-left: 28px;
}

.zh {
    margin-right: 55px;
}

.wdl {
    margin-right: 80px;
}
</style>