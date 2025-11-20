// src/api/query.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
});

export interface SmomRow {
  id: number;
  barcode: string;
  status: string;
  create_time: string;
}

export const querySmom = (barcode: string) => 
  api.post<{ success: boolean; data: SmomRow[] }>('/query/smom', { barcode });