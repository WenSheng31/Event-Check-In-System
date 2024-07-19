const events = [
  { id: 1, title: "科技展覽", description: "展示最新科技產品和創新", date: "2024-08-15", image: "images/COMPUTEX.jpg" },
  { id: 2, title: "音樂節", description: "featuring多位知名歌手和樂隊", date: "2024-09-01", image: "images/music Festival.jpg" },
  { id: 3, title: "美食嘉年華", description: "品嚐來自世界各地的美食", date: "2024-07-20", image: "images/foot festival.jpg" },
  { id: 4, title: "藝術博覽會", description: "展示當代藝術家的傑出作品", date: "2024-10-05", image: "images/art.jpg" },
];

function displayEvents() {
  const eventList = document.getElementById('eventList');
  eventList.innerHTML = '';
  events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
                    <img src="${event.image}" alt="${event.title}">
                    <h2>${event.title}</h2>
                    <p>${event.description}</p>
                    <p>日期：${event.date}</p>
                    <button class="btn" onclick="enterEventSystem(${event.id})">參與活動</button>
                `;
    eventList.appendChild(card);
  });
}

function enterEventSystem(eventId) {
  const event = events.find(e => e.id === eventId);
  document.getElementById('eventTitle').textContent = event.title + " - 報到系統";
  document.getElementById('eventList').classList.add('hidden');
  document.getElementById('eventSystem').classList.remove('hidden');
  document.querySelector('header').classList.add('hidden'); // 隱藏 header
  showRegistered();
}

function backToEventList() {
  document.getElementById('eventList').classList.remove('hidden');
  document.getElementById('eventSystem').classList.add('hidden');
  document.querySelector('header').classList.remove('hidden'); // 顯示 header
}

const registeredPeople = [
  "周杰倫", "張惠妹", "周興哲", "告五人", "蔡依林", "五月天"
];

function showRegistered() {
  document.getElementById('registeredSection').classList.remove('hidden');
  document.getElementById('onsiteSection').classList.add('hidden');
  document.getElementById('qrCodeSection').classList.add('hidden');

  const list = document.getElementById('registeredList');
  list.innerHTML = '';
  registeredPeople.forEach(person => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-user"></i> ${person}`;
    li.onclick = () => showQRCode(person);
    list.appendChild(li);
  });
}

function showOnsite() {
  document.getElementById('onsiteSection').classList.remove('hidden');
  document.getElementById('registeredSection').classList.add('hidden');
  document.getElementById('qrCodeSection').classList.add('hidden');
}

function showQRCode(person) {
  document.getElementById('qrCodeSection').classList.remove('hidden');
  document.getElementById('registeredSection').classList.add('hidden');
  document.getElementById('backToEventList').classList.add('hidden');
  document.querySelector('#qrCode img').alt = `${person} 的 QR Code`;
}

document.getElementById('onsiteForm').onsubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const company = document.getElementById('company').value;
  alert(`現場報名成功！\n姓名：${name}\n電話：${phone}\n公司：${company}`);
  this.reset();
};

// 初始顯示活動列表
displayEvents();
