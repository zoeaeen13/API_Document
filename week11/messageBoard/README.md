### Demo 展示
#### 留言板：http://oldfish.tw/Demo/week11/messageBoard/index.php
* 帳號密碼，有管理員身分，可以進入後台進行彈性設定

| 身分 | 管理員| 編輯（僅刪除權限）|編輯（有編輯刪除權限）|遭停權使用者|
| -------- | -------- | -------- |-------- |------- |
| 帳號 | zoeaeen13 | maggie77 |yuyu |104308014|
| 密碼 | 1026 | 77 |yuyu |104308014|
---

#### 留言介面
![](https://i.imgur.com/Kun1SSB.png)

1. 編輯暱稱功能

已經登入的狀態下暱稱是不能修改的，預設會直接填入，如果想編輯暱稱，可以點選鉛筆按鈕進行編輯，這是兩層 view 疊在一起，藉不同按鈕來判斷目前的顯示隱藏，寫法比較糙，但是效果還可以、只有畫面稍稍跳動。

![](https://i.imgur.com/goqP34C.gif)

2. 分頁功能

首頁下方有分頁可以選擇，目前僅能做到總共幾頁和各頁面的按鈕，之後希望修正成只顯示首頁、末頁和目前最近的三個頁面按鈕，其他以「...」代替，不然未來如果有十幾頁，就會出現畫面擺不下的問題，也沒有必要放這麼多按鈕。

*之後改進

![](https://i.imgur.com/ausIszP.png)

3. 編輯及刪除功能，搭配身分

確認身分，出現可以對文章進行編輯或刪除的按鈕，目前的身分系統有管理員、編輯、權限有限的使用者及一般用戶等等，因為要完成彈性設定的延伸挑戰，後來改寫資料庫的結構，將每位使用者的權限細分如下：
* 1 => true
* 0 => false

| 權限 | add_right | edit_right | delete_right |admin_edit |admin_delete |
| -------- | -------- | -------- |-------- |-------- |-------- |
|備註 | 發文權利 |編輯自己文章 | 刪除自己文章 |編輯他人文章 |刪除他人文章|

![](https://i.imgur.com/F71K0RP.png)


一般用戶（user）前三項是 1、後面兩項的權利都是 0，這同時也是各欄位的預設值，在接下來的權限編輯頁面可以自由調整這些值和身分。而在首頁動態生成留言板時，會根據該登入者的身分來決定它是否有留言的編輯、刪除權。

```php=
while ($row = $result->fetch_assoc()) {
  $num = rand(0,9);
  $edit_right = NULL;
  $delete_right = NULL;
  // 本人
  if ($row["username"] === $username) {
    // 就算是本人，也要判斷有沒有被停權
    if ($user_info['edit_right'] === 1) {
      $edit_right = 1;
    }
    if ($user_info['delete_right'] === 1) {
      $delete_right = 1;
    }
  }

  // 編輯或管理員
  if ($user_info['role'] === 'admin'|| $user_info['role'] === 'editor') {
    if($user_info['admin_edit'] === 1) {
      $edit_right = 1;
    }
    if($user_info['admin_delete'] === 1) {
      $delete_right = 1;
    }
  }
}
```

![](https://i.imgur.com/EWk52kt.png)



#### 後台管理系統

就是圖形化的資料庫後台，管理員才可以進入。

在這裡，管理員可以替每位用戶編輯身分、管理他的權限，如果要將其停權，會出現三個紅色多選框，一一選擇要停權哪一項（發文、編輯文章、刪除文章）再儲存，如果要讓其成為管理員或編輯的話，就會出現後面的單選按鈕，是管理權限，開放所有文章的編輯和刪除權。

![](https://i.imgur.com/rbZLLPb.png)

