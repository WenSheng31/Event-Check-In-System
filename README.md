# 活動報到系統

這是一個活動報到系統，包含活動列表顯示、活動報到、已報名人員名單展示和現場報名功能。項目使用 HTML、CSS 和 JavaScript 實現。

## 目錄結構

<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>plaintext</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>複製程式碼</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">project/
│
├── css/
│   └── style.css          # 樣式表
│
├── js/
│   └── scripts.js         # JavaScript 腳本
│
├── index.html             # 主 HTML 文件
│
└── README.md              # 本說明文件
</code></div></div></pre>

## 功能

* **活動列表** : 顯示可供參與的活動。
* **活動報到系統** : 用戶可以選擇活動進入報到系統，並查看已報名人員名單或進行現場報名。
* **已報名人員名單** : 展示已報名人員列表，點擊人員姓名可查看其 QR Code。
* **現場報名** : 用戶可以填寫表單進行現場報名。

## 使用技術

* HTML
* CSS
* JavaScript
* Font Awesome (圖標)
* Google Fonts (字體)

## 使用說明

1. **克隆項目** :

<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>複製程式碼</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">git clone https://github.com/your-username/your-repository.git
   </code></div></div></pre>

1. **進入項目目錄** :

<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>複製程式碼</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">cd your-repository
   </code></div></div></pre>

1. **打開 `index.html`** :
    使用瀏覽器打開 `index.html` 文件，即可查看活動報到系統。

## 詳細說明

### HTML 結構

* **`index.html`** :
  * 包含活動列表、活動報到系統和頁腳。
  * 活動報到系統包括已報名人員名單和現場報名表單。

### CSS 樣式

* **`css/style.css`** :
  * 定義了頁面的基本樣式和佈局，包括按鈕樣式、卡片樣式和響應式設計。

### JavaScript 腳本

* **`js/scripts.js`** :
  * 包含顯示活動列表、進入活動報到系統、顯示已報名人員名單和現場報名表單的功能。

### 使用示例

1. **顯示活動列表** :

<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>複製程式碼</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">function displayEvents() {
       const eventList = document.getElementById(&#39;eventList&#39;);
       eventList.innerHTML = &#39;&#39;;
       events.forEach(event =&gt; {
           const card = document.createElement(&#39;div&#39;);
           card.className = &#39;card&#39;;
           card.innerHTML = `
                           &lt;img src=&#34;${event.image}&#34; alt=&#34;${event.title}&#34;&gt;
                           &lt;h2&gt;${event.title}&lt;/h2&gt;
                           &lt;p&gt;${event.description}&lt;/p&gt;
                           &lt;p&gt;日期：${event.date}&lt;/p&gt;
                           &lt;button class=&#34;btn&#34; onclick=&#34;enterEventSystem(${event.id})&#34;&gt;參與活動&lt;/button&gt;
                       `;
           eventList.appendChild(card);
       });
   }
   </code></div></div></pre>

1. **進入活動報到系統** :

<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>複製程式碼</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">function enterEventSystem(eventId) {
       const event = events.find(e =&gt; e.id === eventId);
       document.getElementById(&#39;eventTitle&#39;).textContent = event.title + &#34; - 報到系統&#34;;
       document.getElementById(&#39;eventList&#39;).classList.add(&#39;hidden&#39;);
       document.getElementById(&#39;eventSystem&#39;).classList.remove(&#39;hidden&#39;);
       showRegistered();
   }
   </code></div></div></pre>

1. **顯示已報名人員名單** :

<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>複製程式碼</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">function showRegistered() {
       document.getElementById(&#39;registeredSection&#39;).classList.remove(&#39;hidden&#39;);
       document.getElementById(&#39;onsiteSection&#39;).classList.add(&#39;hidden&#39;);
       document.getElementById(&#39;qrCodeSection&#39;).classList.add(&#39;hidden&#39;);

       const list = document.getElementById(&#39;registeredList&#39;);
       list.innerHTML = &#39;&#39;;
       registeredPeople.forEach(person =&gt; {
           const li = document.createElement(&#39;li&#39;);
           li.innerHTML = `&lt;i class=&#34;fas fa-user&#34;&gt;&lt;/i&gt; ${person}`;
           li.onclick = () =&gt; showQRCode(person);
           list.appendChild(li);
       });
   }
   </code></div></div></pre>

1. **現場報名** :

<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>複製程式碼</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">document.getElementById(&#39;onsiteForm&#39;).onsubmit = function(e) {
       e.preventDefault();
       const name = document.getElementById(&#39;name&#39;).value;
       const phone = document.getElementById(&#39;phone&#39;).value;
       const company = document.getElementById(&#39;company&#39;).value;
       alert(`現場報名成功！\n姓名：${name}\n電話：${phone}\n公司：${company}`);
       this.reset();
   };
   </code></div></div></pre>

## 聯繫信息

如有任何問題，請聯繫我：

* 電子郵件: [wensheng@evo-techlab.com]()
* GitHub: [WenSheng31](https://github.com/WenSheng31)

## 版權信息

© 2024 Evo.lab 版權所有。
