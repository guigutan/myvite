# myvite

npm install vue-router@4 pinia axios

如果你要用 element-plus 或 ant-design-vue 表格也可以装，我这里用原生 + naive-ui 举例也行

---

后端MariaDB 示例（新建 backend 文件夹）（Node.js + Express + mysql2）

cd ..
mkdir backend && cd backend
npm init -y
npm install <mark>express</mark> <mark>mysql2</mark> <mark>cors</mark> <mark>dotenv</mark>

启动后端：node server.js

---



MaraDB数据库

```sql
CREATE DATABASE myvite_db CHARACTER SET utf8mb4;
USE myvite_db;

CREATE TABLE smom_trace (
  id INT AUTO_INCREMENT PRIMARY KEY,
  barcode VARCHAR(50),
  status VARCHAR(20),
  create_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO smom_trace (barcode, status) VALUES 
('BC001234', '已入库'),
('BC005678', '已发货');

SELECT * FROM smom_trace
```