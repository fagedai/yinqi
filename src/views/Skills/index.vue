<script setup>
</script>

<template>
  <div class="skills mt-100">
    <div class="container">
      <div class="section-header animate__animated animate__fadeInUp">
        <h2>3D打印服务价格表</h2>
        <p>
          本价格表详细列出了各种耗材类型及其特性、价格以及可选增值服务。包括PLA、PETG、PC等多种材料，每种材料都有其独特的特性和适用范围。价格根据材料的种类和特性有所不同，从0.25元/克到0.45元/克不等。此外，还提供了指定颜色、模型文件处理、模型后处理、加急和校内送货等增值服务，以满足不同客户的需求。
        </p>
      </div>
    </div>
    <table class="firstTable">
      <tr>
        <th>耗材类型</th>
        <th>光泽度</th>
        <th>平整度</th>
        <th>硬度</th>
        <th>抗冲击</th>
        <th>耐候性</th>
        <th>耐温 ℃</th>
        <th>元/克</th>
      </tr>
      <tr class="firstR">
        <td rowspan="4">
          <div style="float: left; width: 50%;">
            <h4 style="color: #000;">PLA</h4>
          </div>
          <div style="float: right; width: 50%;">
            <ul>
              <li>普通</li>
              <li>丝绸</li>
              <li>哑光</li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td>光滑</td>
        <td>极佳</td>
        <td>高</td>
        <td>中</td>
        <td>中</td>
        <td>40-45</td>
        <td>0.25</td>
      </tr>
      <tr>
        <td>金属感</td>
        <td>极佳</td>
        <td>较高</td>
        <td>弱</td>
        <td>中</td>
        <td>40-45</td>
        <td>0.35</td>
      </tr>
      <tr>
        <td>丝滑</td>
        <td>极佳</td>
        <td>较高</td>
        <td>较弱</td>
        <td>中</td>
        <td>40-45</td>
        <td>0.35</td>
      </tr>
      <tr class="firstR">
        <td rowspan="3">
          <div style="float: left; width: 50%;">
            <h4 style="color: #000; line-height: 68px;">PETG</h4>
          </div>
          <div style="float: right; width: 50%;">
            <ul>
              <li>普通</li>
              <li>特种</li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td>亮光</td>
        <td>优</td>
        <td>中</td>
        <td>较强</td>
        <td>优</td>
        <td>60</td>
        <td>0.25</td>
      </tr>
      <tr>
        <td>半亮光</td>
        <td>极佳</td>
        <td>中</td>
        <td>较弱</td>
        <td>优</td>
        <td>70</td>
        <td>0.35</td>
      </tr>
      <tr>
        <td style="font-size: 21px; background-color: #e3e2e2;">PETG-LS</td>
        <td>亮光</td>
        <td>优</td>
        <td>低</td>
        <td>强</td>
        <td>优</td>
        <td>45</td>
        <td>0.25</td>
      </tr>
      <tr>
        <td style="font-size: 21px; background-color: #e3e2e2;">PC</td>
        <td>极亮光</td>
        <td>中</td>
        <td>高</td>
        <td>极强</td>
        <td>优</td>
        <td>105</td>
        <td>0.45</td>
      </tr>
    </table>

    <div style="margin: 0 auto; width: 760px;">
      <p style="padding-top: 30px; color: #7aa6d8">以下为可选的增值服务：</p>
      <table class="secondTable">
        <tr>
          <th>服务类型</th>
          <th>指定颜色</th>
          <th>模型文件处理</th>
          <th>模型后处理</th>
          <th>加急</th>
          <th>校内送货</th>
        </tr>
        <tr>
          <td style="background-color: #e3e2e2; padding: 10px 0;">加收费（率）</td>
          <td>0.05元 / 克</td>
          <td>依工作量定</td>
          <td>依工作量定</td>
          <td>10% - 30%</td>
          <td>10% - 30%</td>
        </tr>
      </table>
    </div>

  </div>

</template>

<style scoped>
.firstTable {
  text-align: center;
  margin: 0 auto;
  color: #000;

  th {
    background-color: #b0cae8;
    padding: 10px 20px;

    &:first-child {
      padding: 10px 50px;
    }
  }

  tr {
    border-bottom: 1px solid #ccc;
  }
}

.firstR {
  background-color: #e3e2e2;

  td {
    border-bottom: 1px solid #ccc;
  }

  h4 {
    line-height: 98px;
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;

    li {
      padding: 5px 10px;
      border-bottom: 1px solid #ccc;

      &:last-child {
        border-bottom: none;
      }
    }
  }
}

.secondTable {
  text-align: center;
  color: #000;

  th {
    background-color: #b0cae8;
    padding: 10px 30px;
  }

  tr {
    border-bottom: 1px solid #ccc;
  }
}
</style>