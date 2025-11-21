# myvite

npm install vue-router@4 pinia axios

如果你要用 element-plus 或 ant-design-vue 表格也可以装，我这里用原生 + naive-ui 举例也行

---

后端MariaDB 示例（新建 backend 文件夹）（Node.js + Express + mysql2）

cd ..
mkdir backend && cd backend
npm init -y
npm install <mark>express</mark> <mark>mysql2</mark> <mark>cors</mark> <mark>dotenv</mark>

---

cd D:\www\myvite\backend

1. 先卸载有问题的类型包（很多人装了它才出问题）

npm uninstall <mark>@types/express</mark> <mark>@types/cors</mark>

2. 确保这些依赖装好了

npm install express mysql2 cors
npm install -D typescript ts-node

启动

npx ts-node server.ts

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

---

### TypeScript 类型检查

在 backend 目录下单独建一个 tsconfig.json

```ts
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "noImplicitAny": false               // ← 这行关掉 any 报错（最舒服）
  },
  "include": ["server.ts"]
}
```

安装必要的类型包（只运行一次）

cd D:\www\myvite\backend

npm install express mysql2 cors
npm install -D typescript ts-node @types/express @types/cors @types/node

----