# Vue3 新特性把玩

## 啟動專案
```json
// 啟動環境
pnpm dev

// 安裝依賴
pnpm i

// 打包
pnpm build
```
## 環境版本
```json
node => 18.16.0
```

## 前置作業紀錄
```typescript
// vite.config.ts
resolve: {
	alias: {
		'@': path.resolve(__dirname, 'src'),
		'@components': path.resolve(__dirname, 'src/components')
	}
},

// tsconfig.json
"paths": {
	"@/*": ["./src/*"],
	"@/components": ["./src/components/*"]
},
```