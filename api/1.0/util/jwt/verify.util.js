import pkg from 'jsonwebtoken';
const { verify } = pkg;

export default function verifyJWT(token) {
  try {
    return verify(token, process.env.JWT_SECRET);
  } catch (err) {
    // 如果需要，這裡可以處理特定的錯誤或添加日誌
    throw new Error('Invalid or expired token');
  }
}
