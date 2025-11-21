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

// SMOM 查询接口
app.post('/api/query/smom', async (req, res) => {
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

app.listen(3000, () => {
  console.log('后端运行在 http://localhost:3000');
});