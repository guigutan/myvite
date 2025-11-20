// backend/server.js  (改成 ESM 写法)
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Aa111111',
  database: 'myvite_db',
  waitForConnections: true,
  connectionLimit: 10,
});

app.post('/api/query/smom', (req, res) => {
  const { barcode } = req.body;
  const sql = 'SELECT * FROM smom_trace WHERE barcode LIKE ? LIMIT 100';
  pool.query(sql, [`%${barcode || ''}%`], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: '查询失败' });
    }
    res.json({ success: true, data: results });
  });
});

app.listen(3000, () => {
  console.log('后端运行在 http://localhost:3000');
});