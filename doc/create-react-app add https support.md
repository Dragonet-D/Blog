# create react app 脚手架加https,作为本地开发(windows)

- 添加 环境变量 HTTPS = true, HOST=xxxx
- chrome  -> 设置 -> (搜索 ssl) ->  受信任的根证书颁发机构 -> 导入(后端提供的证书)
- 配置webpack

```javascript
module.exports = {
  //...
  devServer: {
    https: {
      key: fs.readFileSync('/path/to/server.key'), // 后端提供
      cert: fs.readFileSync('/path/to/server.crt'), // 后端提供
    }
  }
};
```
- hosts 文件添加本地ip 对应 HOST映射; 例如 192.168.0.109 = xxx