
import { api } from '@/api/config'

// RPA 预付查询
export interface ZF004Row {
  id: number;
  order_no: string;
  amount: number;
  status: string;
  create_time: string;
}
export const queryZF004 = (params: {
  orderNo?: string;
  startDate?: string;
  endDate?: string;
}) => api.post<{ success: boolean; data: ZF004Row[] }>('/rpa/ZF004', params);