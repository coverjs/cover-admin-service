# Cover Admin Service

Cover Admin 中后台服务端

## 如何运行

- 安装依赖

```bash
npm install
```

- 同步数据库

```bash
pnpm db:pm
```

- 生成Prisma客户端 首次执行需要确保能访问外网

```bash
pnpm db:pg
```

- 启动开发环境服务

```bash
pnpm dev
```
