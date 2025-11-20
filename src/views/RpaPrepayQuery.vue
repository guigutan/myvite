<template>
  <div class="query-page">
    <h2>RPA到付流程</h2>
    
    <!-- 你原来的查询条件区 -->
    <table class="query-table">
      <tbody>
      <tr>
        <td>条码：</td>
        <td><input v-model="barcode" /></td>
        <td>
          <button @click="query" type="button" name="button2" class="sc-button">
            查询
          </button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- 查询结果区 -->
    <div class="sc-right">
      <div v-if="loading">查询中...</div>
      <div v-else-if="result.length === 0">暂无数据</div>
      <table v-else border="1" width="100%">
        <thead><tr><th>ID</th><th>条码</th><th>状态</th></tr></thead>
        <tbody>
          <tr v-for="item in result" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.barcode }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const barcode = ref('')
const result = ref<any[]>([])
const loading = ref(false)

const query = async () => {
  if (!barcode.value) return alert('请输入条码')
  loading.value = true
  try {
    const res = await axios.post('http://localhost:3000/api/smom', { barcode: barcode.value })
    result.value = res.data.data
  } catch (e) {
    alert('查询失败')
    console.error(e)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.sc-button { background: #409eff; color: white; padding: 8px 20px; border: none; border-radius: 4px; cursor: pointer; }
.sc-right { margin-top: 20px; border: 1px solid #ddd; padding: 15px; min-height: 300px; background: #fafafa; }
</style>