import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import api from './api/1.0/util/api.js'
import db from './api/1.0/model/db.js';
import users from './api/1.0/routes/users.route.js';


config();

const app = express();
const port = process.env.NODE_EXPRESS_PORT || 3001; //從環境變量讀取端口，若無設置則使用預設值 3001

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Dev!");
});

app.use("/", api);
// app.use('/users', users);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// // 创建一个路由来获取用户数据
// app.get('/data', (req, res) => {
//   // 查询数据库中的数据
//   db.query('SELECT * FROM users', (err, results) => {
//     if (err) {
//       console.error('Error querying database: ' + err.message);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       // 将查询结果作为 JSON 发送给 http://localhost:3001/data
//       res.json(results);
//     }
//   });
// });