// backend/server.ts   ← 完整修正版，直接复制覆盖
import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// ↓↓↓ 改成下面这种写法，就永远不会再报错了 ↓↓↓
app.post('/api/query/smom', async (req, res) => {
  const { barcode } = req.body as { barcode?: string };

  try {
    const [rows] = await pool.query(
      'SELECT * FROM smom_trace WHERE barcode LIKE ? LIMIT 100',
      [`%${barcode || ''}%`]
    );
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: '查询失败' });
  }
});

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Aa111111',   // ← 改成你自己的
  database: 'myvite_db',
  waitForConnections: true,
  connectionLimit: 10,
});

app.listen(3000, () => {
  console.log('后端运行在 http://localhost:3000');
});