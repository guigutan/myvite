<template>
  <div class="query-container">
    <h2>条码追溯（SMOM）</h2>
    
    <div class="query-form">
      <input v-model="barcode" placeholder="输入条码（支持模糊查询）" @keyup.enter="query" />
      <button @click="query" class="sc-button">查询</button>
    </div>

    <div class="sc-right">
      <div v-if="loading">查询中...</div>
      <div v-else-if="!data.length" class="empty">暂无数据</div>
      <table v-else border="1" cellpadding="8" cellspacing="0" width="100%">
        <thead style="background:#f5f7fa">
          <tr><th>ID</th><th>条码</th><th>状态</th><th>创建时间</th></tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.barcode }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.create_time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { querySmom, type SmomRow } from '@/api/query';

const barcode = ref('');
const data = ref<SmomRow[]>([]);
const loading = ref(false);

const query = async () => {
  loading.value = true;
  try {
    const res = await querySmom(barcode.value);
    if (res.data.success) {
      data.value = res.data.data;
    } else {
      alert('查询失败');
    }
  } catch (e) {
    alert('网络错误');
    console.error(e);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.query-form { margin: 20px 0; }
.query-form input { padding: 10px; width: 300px; margin-right: 10px; }
.sc-button {
  background: #409eff; color: white; border: none; padding: 10px 30px; 
  border-radius: 4px; cursor: pointer; font-size: 16px;
}
.sc-button:hover { background: #66b1ff; }
.sc-right { background: #fafafa; padding: 20px; min-height: 400px; }
.empty { color: #999; text-align: center; padding: 50px; }
</style>