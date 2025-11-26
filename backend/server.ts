// backend/server.ts
import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// 创建连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Aa111111',      // ← 改成你自己的密码
  database: 'myvite_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// codeKSMES 查询接口
app.post('/api/mes/codeKSMES', async (req, res) => {
  const { barcode } = req.body as { barcode?: string };  // 断言解决 any

  try {
    const [rows] = await pool.query(
      'SELECT * FROM smom_trace WHERE barcode LIKE ? LIMIT 100',
      [`%${barcode || ''}%`]
    );
    res.json({ success: true, data: rows });
  } catch (err: any) {
    console.error('查询错误:', err);
    res.status(500).json({ success: false, message: err.message || '查询失败' });
  }
});

// RPA 预付流程查询接口
app.post('/api/rpa/ZF003', async (req, res) => {
  const { orderNo, startDate, endDate } = req.body as { 
    orderNo?: string;
    startDate?: string;
    endDate?: string;
  };

  try {
    let sql = 'SELECT * FROM rpa_prepay WHERE 1=1';
    const params: any[] = [];

    if (orderNo) {
      sql += ' AND order_no LIKE ?';
      params.push(`%${orderNo}%`);
    }
    if (startDate) {
      sql += ' AND create_time >= ?';
      params.push(startDate);
    }
    if (endDate) {
      sql += ' AND create_time < DATE(? ) + INTERVAL 1 DAY';
      params.push(endDate);
    }

    const [rows] = await pool.query(sql + ' ORDER BY create_time DESC LIMIT 200', params);

    // ←←←← 新增这三行，解决所有数字问题！ ←←←←
    const formattedRows = (rows as any[]).map(row => ({
      ...row,
      amount: parseFloat(row.amount as string) || 0
    }));

    res.json({ success: true, data: formattedRows });
  } catch (err: any) {
    console.error('RPA预付查询失败:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});



app.listen(3000, () => {
  console.log('后端运行在 http://localhost:3000');
});
