const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '你的密码',
  database: '你的数据库名'
})

// 示例：条码追溯查询
app.post('/api/smom', (req, res) => {
  const { barcode } = req.body
  const sql = `SELECT * FROM smom_trace WHERE barcode LIKE ? LIMIT 50`
  db.query(sql, [`%${barcode}%`], (err, results) => {
    if (err) return res.status(500).json({ error: err.message })
    res.json({ data: results })
  })
})

// 你可以继续加 /api/rpa-prepay 等接口

app.listen(3000, () => {
  console.log('后端运行在 http://localhost:3000')
})