import { api } from '@/api/config'

// RPA 预付查询
export interface RpaPrepayRow {
  id: number;
  order_no: string;
  amount: number;
  status: string;
  create_time: string;
}
export const queryRpaPrepay = (params: {
  orderNo?: string;
  startDate?: string;
  endDate?: string;
}) => api.post<{ success: boolean; data: RpaPrepayRow[] }>('/rpa/ZF003', params);