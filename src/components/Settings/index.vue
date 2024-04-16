<script setup>
import { ref } from "vue";

const list1 = ref([
  { imgpath: "/src/assets/Settings/user.png", name: "基本信息", id: 1 },
  { imgpath: "/src/assets/Settings/ticket.png", name: "我的代金券", id: 2 },
  { imgpath: "/src/assets/Settings/star.png", name: "我的收藏", id: 3 },
  { imgpath: "/src/assets/Settings/积分.png", name: "我的积分", id: 4 },
  { imgpath: "/src/assets/Settings/periscope.png", name: "收货地址", id: 5 },
  { imgpath: "/src/assets/Settings/link-2.png", name: "个人推广", id: 6 },
  { imgpath: "/src/assets/Settings/提成管理.png", name: "推广提成", id: 7 },
  { imgpath: "/src/assets/Settings/ad-1.png", name: "发票信息", id: 8 },
  { imgpath: "/src/assets/Settings/电子票.png", name: "申请电子票", id: 9 },
  { imgpath: "/src/assets/Settings/月结.png", name: "月结申请", id: 10 },
]);
const list2 = ref([
  { imgpath: "/src/assets/Settings/订单.png", name: "我的订单",id:11 },
  { imgpath: "/src/assets/Settings/兑换订单.png", name: "兑换订单",id:12 },
]);
const list3 = ref([
  { imgpath: "/src/assets/Settings/yv_shejishi.png", name: "设计师信息",id:13 },
  { imgpath: "/src/assets/Settings/我的需求.png", name: "我的需求" ,id:14},
]);
const curIdx = ref(1);
const actIdx = ref(1);
const menushow = ref(false);
const isIndexActive = (index) => {
  return index === curIdx.value || index === actIdx.value;
};
</script>

<template>
  <div class="background">
    <div class="box">
      <div class="left">
        <!-- 注意此页面是网上模仿商业官网，后续需要更改 -->
        <div class="dl">
          <div class="dt">个人中心</div>

          <!-- <router-link to="/" v-for="id in list1" :key="id">{id}</router-link> -->
          <router-link
            v-for="route in list1"
            :key="route.id"
            to="/home/settings"
            :class="{ active: isIndexActive(route.id) }"
            class="dd"
            style="display: block; color: gray"
            @mouseenter="curIdx = route.id"
            @mouseout="curIdx = -1"
            @click="actIdx = route.id"
          >
            <img
              :src="route.imgpath"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            {{ route.name }}
          </router-link>
        </div>
        <div class="dl">
          <div class="dt">订单中心</div>

          <!-- <router-link to="/" v-for="id in list1" :key="id">{id}</router-link> -->
          <router-link
            v-for="route in list2"
            :key="route.id"
            to="/home/settings"
            :class="{ active: isIndexActive(route.id) }"
            class="dd"
            style="display: block; color: gray"
            @mouseenter="curIdx = route.id"
            @mouseout="curIdx = -1"
            @click="actIdx = route.id"
          >
            <img
              :src="route.imgpath"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            {{ route.name }}
          </router-link>
        </div>
        <div class="dl">
          <div class="dt">设计</div>

          <!-- <router-link to="/" v-for="id in list1" :key="id">{id}</router-link> -->
          <router-link
            v-for="route in list3"
            :key="route.id"
            to="/home/settings"
            :class="{ active: isIndexActive(route.id) }"
            class="dd"
            style="display: block; color: gray"
            @mouseenter="curIdx = route.id"
            @mouseout="curIdx = -1"
            @click="actIdx = route.id"
          >
            <img
              :src="route.imgpath"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            {{ route.name }}
          </router-link>
        </div>
        <!-- <div class="dl">
          
          <div
            class="dd { active: isActive }"
            @mouseenter="isActive = ture"
            @mouseleave="isActive = false"
            @click="isActive = true"
          >
            <img
              src="@/assets/Settings/user.png"
              alt=""
              
            />
            基本信息
          </div>
          <div
            class="dd { active: isActive }"
            @mouseover="isActive = true"
            @mouseleave="isActive = false"
            @click="isActive = true"
          >
            <img
              src="@/assets/Settings/ticket.png"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            我的代金券
          </div>
          <div
            class="dd { active: isActive }"
            @mouseover="isActive = true"
            @mouseleave="isActive = false"
            @click="isActive = true"
          >
            <img
              src="@/assets/Settings/star.png"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            我的收藏
          </div>
          <div
            class="dd { active: isActive }"
            @mouseover="isActive = true"
            @mouseleave="isActive = false"
            @click="isActive = true"
          >
            <img
              src="@/assets/Settings/积分.png"
              alt=""
              width="12"
              height="12"
              style="margin-bottom: 3px; margin-left: 2px; margin-right: 1px"
            />
            我的积分
          </div>
          <div
            class="dd { active: isActive }"
            @mouseover="isActive = true"
            @mouseleave="isActive = false"
            @click="isActive = true"
          >
            <img
              src="@/assets/Settings/periscope.png"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            收货地址
          </div>
          <div
            class="dd { active: isActive }"
            @mouseover="isActive = true"
            @mouseleave="isActive = false"
            @click="isActive = true"
          >
            <img
              src="@/assets/Settings/link-2.png"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            个人推广
          </div>
          <div
            class="dd { active: isActive }"
            @mouseover="isActive = true"
            @mouseleave="isActive = false"
            @click="isActive = true"
          >
            <img
              src="@/assets/Settings/提成管理.png"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            推广提成
          </div>
          <div
            class="dd { active: isActive }"
            @mouseover="isActive = true"
            @mouseleave="isActive = false"
            @click="isActive = true"
          >
            <img
              src="@/assets/Settings/ad-1.png"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            发票信息
          </div>
          <div
            class="dd { active: isActive }"
            @mouseover="isActive = true"
            @mouseleave="isActive = false"
            @click="isActive = true"
          >
            <img
              src="@/assets/Settings/电子票.png"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            申请电子票
          </div>
          <div
            class="dd { active: isActive }"
            @mouseover="isActive = true"
            @mouseleave="isActive = false"
            @click="isActive = true"
          >
            <img
              src="@/assets/Settings/月结.png"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            月结申请
          </div>
        </div> -->
        <!-- <div class="dl">
          <div class="dt">订单中心</div>
          <div class="dd">
            <img
              src="@/assets/Settings/订单.png"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            我的订单
          </div>
          <div class="dd">
            <img
              src="@/assets/Settings/兑换订单.png"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            兑换订单
          </div>
        </div> -->
        <!-- <div class="dl">
          <div class="dt">设计</div>
          <div class="dd">
            <img
              src="@/assets/Settings/yv_shejishi.png"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            设计师信息
          </div>
          <div class="dd">
            <img
              src="@/assets/Settings/我的需求.png"
              alt=""
              width="15"
              height="15"
              style="margin-bottom: 3px"
            />
            我的需求
          </div>
        </div> -->
      </div>
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
          <div class="birthday inputbox">
            <b>生日：</b>
            <select class="select_bir">
              <option selected>年份</option>
              <option>1990</option>
              <option>1991</option>
              <option>1992</option>
              <option>1993</option>
              <option>1994</option>
              <option>1995</option>
              <option>1996</option>
              <option>1997</option>
              <option>1998</option>
              <option>1999</option>
              <option>2000</option>
              <option>2001</option>
              <option>2002</option>
              <option>2003</option>
              <option>2004</option>
              <option>2005</option>
              <option>2006</option>
              <option>2007</option>
              <option>2008</option>
              <option>2009</option>
              <option>2010</option>
              <option>2011</option>
              <option>2012</option>
              <option>2013</option>
              <option>2014</option>
              <option>2015</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
            </select>
            <select class="select_bir">
              <option selected>月份</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <select class="select_bir">
              <option selected>日期</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
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
            
            <button class="button loginbutton">点击登录</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-color: #f4f4f4;
  margin-top: 100px;
}
.box {
  display: flex;
  width: 1500px;
  font-family: "Arial", "Microsoft YaHei", sans-serif;
  margin: 0 auto;
}
.left {
  /* display: inline-block; */
  padding-top: 30px;
  width: 250px;
  height: 536px;
}
.right {
  /* display: inline-block; */
  width: 1225px;
  height: 1000px;
  background-color: #fff;
  margin-left: 25px;
}

/* 以下为右边组件的css */

.dl {
  margin: 0;
  padding-top: 10px;
  border-bottom: 1px solid rgb(222, 227, 232);
}
.dl:last-child {
  border: 0px;
}
.dd {
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
.sonbox {
  margin-top: 20px;
  margin: 0 auto;
  padding-left: 50px;
  padding-top: 30px;
}
.title:first-child {
  margin-top: 0;
}
.title {
  width: 1000px;
  margin-top: 50px;
  border-bottom: 1px solid rgb(222, 227, 232);
  font-size: 30px;
  color: black;
  margin-bottom: 15px;
  padding-bottom: 10px;
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
}
.input :focus {
  background-color: white;
  border: 1px solid #0969da;
}
.inputbox {
  margin-bottom: 30px;
}
.ridio1 {
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
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  position: relative; /* 设置相对定位 */
  overflow: hidden; /* 防止涟漪效果超出按钮边界 */
  transition: background-color 0.3s, transform 0.1s; /* 设置过渡效果 */
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
  transition: all 0.5s; /* 设置涟漪效果的过渡时间 */
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
  animation: rippleEffect 1s forwards; /* 应用涟漪效果动画 */
}

.button:hover {
  background-color: #45a049; /* 悬停时背景颜色变深 */
  transform: scale(1.05); /* 悬停时按钮放大 */
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
.loginbutton {
  background-color: #03ade1;
}
.loginbutton:hover {
  background-color: #067097; /* 悬停时背景颜色变深 */
  transform: scale(1.05); /* 悬停时按钮放大 */
}
</style>