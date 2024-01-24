import express from 'express';
import { signupHandler } from '../controllers/signup.controller.js';

const users = express.Router();

// isJson middleware 中間件
function isJson(req, res, next) {
  if (req.headers['content-type'] === 'application/json') {
    try {
    //   JSON.parse(req.body);  // 嘗試解析請求體以確認它是有效的 JSON
      next();  // JSON 有效，繼續下一個中間件或路由處理函數
    } catch (e) {
      res.status(400).json({ error: 'Invalid JSON' });  // 返回錯誤響應
    }
  } else {
    res.status(400).json({ error: 'Content-Type must be application/json' });  // 返回錯誤響應
  }
}

// 註冊路由
users.post('/signup',isJson, signupHandler);

export default users;
