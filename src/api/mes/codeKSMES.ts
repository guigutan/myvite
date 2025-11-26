import { api } from '@/api/config'

// SMOM 接口相关类型（和接口放一起）
export interface SmomRow {
  id: number;
  barcode: string;
  status: string;
  create_time: string;
}

// SMOM 条码查询接口
export const querySmom = (barcode: string) => 
  api.post<{ success: boolean; data: SmomRow[] }>('/mes/codeKSMES', { barcode });