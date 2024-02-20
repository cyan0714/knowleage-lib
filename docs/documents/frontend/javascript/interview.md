# JS 面试题

## 1. 什么是跨域请求? 你可以通过哪些方法解决跨域问题?

跨域请求是指在浏览器中，当一个网页尝试加载来自不同域名下的资源时会发生跨域请求。浏览器的同源策略会阻止跨域请求，以保护用户的安全。跨域请求可以通过以下几种方法解决： 
1. JSONP (JSON with Padding)：通过动态创建 `<script>` 标签来实现跨域请求，但只支持GET请求。 
2. CORS (Cross-Origin Resource Sharing)：服务端设置响应头中的 Access-Control-Allow-Origin 字段来允许跨域请求。 
3. 代理服务器：在同源的服务器端发起请求，然后再将数据传递给客户端，绕过浏览器的同源策略。 
4. WebSocket：通过WebSocket协议进行跨域通信。

- 在使用 vue 开发项目过程中, 可以在 `vue.config.js` 的 `devServer` 中配置 `proxy`, 此时的代理称为正向代理; 
- 正式环境中可以在 nginx 中配置代理, 此时的代理称为反向代理(比如有一个前端服务, 跑在 5000 端口, 一个后端服务, 跑在 3000 端口, 此时前端请求后端服务会造成跨域, 为了解决这个问题, 可以在 nginx 中配置代理, 添加一个 8000 服务作为中转, 如果路径以 / 开头, 则代理到 5000 端口, 如果路径以 /api 开头, 则代理到 3000 端口. 此时浏览器的 network 中显示的 url 的端口为 8000, 但是实际请求的是 3000 端口, 这种客户端不知道服务端实际请求的是哪个地址就被称为"反向代理")