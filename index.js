import express from 'express';
import mysql from 'mysql2';

const app = express();
const port = 3000;

// 创建数据库连接
const db = mysql.createConnection({
  host: 'compose-mysql', //'localhost', // 你的数据库主机
  user: 'root',      // 数据库用户名
  password: 'node-express-ec2',  // 数据库密码
  database: 'node-express-database' // 数据库名称
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.message);
  } else {
    console.log('Database connected');
  }
});

// 创建一个路由来获取用户数据
app.get('/data', (req, res) => {
  // 查询数据库中的数据
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error querying database: ' + err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // 将查询结果作为 JSON 发送给前端
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
