<template>
  <div class="query-container">
    <h2>RPA 预付流程查询ZF003</h2>
    
    <div class="query-form">
      <input v-model="orderNo" placeholder="订单号（支持模糊）" />
      <input v-model="startDate" type="date" placeholder="开始日期" />
      <input v-model="endDate" type="date" placeholder="结束日期" />
      <button @click="query" class="sc-button">查询</button>
    </div>

    <div class="sc-right">
      <div v-if="loading">查询中...</div>
      <div v-else-if="!data.length" class="empty">暂无数据</div>
      <table v-else border="1" cellpadding="8" cellspacing="0" width="100%">
        <thead style="background:#f0f5ff">
          <tr>
            <th>ID</th><th>订单号</th><th>金额</th><th>状态</th><th>创建时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.order_no }}</td>
            <td>¥{{ item.amount.toFixed(2) }}</td>
            <td><span :class="item.status === '已预付' ? 'status-success' : 'status-pending'">{{ item.status }}</span></td>
            <td>{{ item.create_time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { queryZF003, type ZF003Row } from '@/api/rpa/ZF003';

const orderNo = ref('');
const startDate = ref('');
const endDate = ref('');
const data = ref<ZF003Row[]>([]);
const loading = ref(false);

const query = async () => {
  loading.value = true;
  try {
    const res = await queryZF003({
      orderNo: orderNo.value,
      startDate: startDate.value,
      endDate: endDate.value
    });
    if (res.data.success) {
      data.value = res.data.data;
    }
  } catch (e) {
    alert('查询失败');
    console.error(e);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.query-form { margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; }
.query-form input { padding: 10px; width: 200px; }
.sc-button { background: #ff6b35; color: white; border: none; padding: 10px 30px; border-radius: 4px; cursor: pointer; }
.sc-right { background: #fafafa; padding: 20px; min-height: 400px; }
.empty { text-align: center; padding: 50px; color: #999; }
.status-success { color: green; font-weight: bold; }
.status-pending { color: orange; font-weight: bold; }
</style>