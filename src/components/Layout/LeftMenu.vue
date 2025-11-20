<template>
  <div class="left-menu">
    <h3>查询系统</h3>
    <ul>
      <li><router-link to="/smom">条码追溯（SMOM）</router-link></li>
      <li><router-link to="/rpa-prepay">RPA 预付流程</router-link></li>
      <li><router-link to="/rpa-cod">RPA 到付流程</router-link></li>
      <!-- 以后继续加 -->
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.left-menu { width: 220px; background: #001529; color: white; padding: 20px; }
ul { list-style: none; padding: 0; }
li { margin: 15px 0; }
a { color: white; text-decoration: none; font-size: 16px; }
.router-link-active { color: #409eff; font-weight: bold; }
</style>