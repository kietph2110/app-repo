const express = require('express');
const app = express();
const port = 3000;

// Lấy version từ biến môi trường APP_VERSION, mặc định là v1.0 
const VERSION = process.env.APP_VERSION || 'v1.0';

// Endpoint GET / trả về tên app và version 
app.get('/', (req, res) => {
  res.send(`<h1>Hello BAN- Test Auto CI/CD Thành Công!</h1><p>App Name: Demo App</p><p>Version: ${VERSION}</p>`);
});

// Endpoint GET /health trả về {status: ok} 
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);

  // Cố tình chèn lỗi Runtime để phá sập tiến trình Node.js
  //throw new Error("Crash App - Mo phong loi he thong!");
  
});
//TEST CI FLOW
