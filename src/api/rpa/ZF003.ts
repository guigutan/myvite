import { api } from '@/api/config'

// RPA 预付查询
export interface ZF003Row {
  id: number;
  order_no: string;
  amount: number;
  status: string;
  create_time: string;
}
export const queryZF003 = (params: {
  orderNo?: string;
  startDate?: string;
  endDate?: string;
}) => api.post<{ success: boolean; data: ZF003Row[] }>('/rpa/ZF003', params);