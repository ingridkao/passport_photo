# passport_photo

This template should help get you started developing with Vue 3 in Vite.

[參考](https://diyidphoto.com/takePhoto/uploadPhoto)
用vue製作前端，有趣的是每次上傳圖片會建立一個websocket通道，去判斷以下：
1. 圖片參數
2. 檢查口罩
3. 照片裁切
4. 偵測人像(包含移動照片位置)
5. 去背
6. 提醒有眼鏡、露齒、遮蓋耳朵、眉毛
7. 最後壓浮水印(預防使用者截圖拿去別的地方列印)。

圖片判讀的部分是使用OpenCV(Open Source Computer Visio)，主要功能是拿來人臉辨識。
[用OpenCV實作簡單口罩辨識](https://lufor129.medium.com/%E7%94%A8opencv%E5%AF%A6%E4%BD%9C%E7%B0%A1%E5%96%AE%E5%8F%A3%E7%BD%A9%E8%BE%A8%E8%AD%98-bf070bd3ad83)

[去背相關文章](https://www.delftstack.com/zh-tw/howto/python/opencv-background-subtraction/)

[在vue項目中安裝opencv.js](https://www.5axxw.com/questions/simple/ibrnlv)

## 流程

1. 列印格式選擇  - \src\components\SizeSelect.vue
2. 拍照/上傳照片 - \src\components\UploadFile.vue
3. 裁切旋轉圖片      
4. 偵測去背(todo)
5. 另存成4X6大小


## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

