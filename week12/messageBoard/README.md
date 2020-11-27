### Demo 展示 SPA 留言板
http://oldfish.tw/messageBoard/index.html

## 關於 hw1
- [x]  載入更多功能
- [x]  Ajax/JSON 設計 SPA 架構

####  前端部分
介面有盡量練習使用 Bootstrap 元件，JS 部分盡量採用 jQuery


#### 後端部分
仿造 RESTful API 的概念，以同一組 URL、不同動作來定義對資料的操作，查到很基本的方法，只用 `REQUEST_METHOD` 來判斷要做什麼

```
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
  case 'GET':
    handleGETRequest();
    break;
  case 'POST':
    handlePOSTRequest();
    break;
}
```
