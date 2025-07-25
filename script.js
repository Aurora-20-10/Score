const checklistData = {
  chamCoThe: [
    "Uống đủ 1.5 – 2L nước (chia 3 khung sáng – chiều – tối)",
    "Rửa mặt sáng + tối",
    "Thoa lotion body (cổ – vai – tay – chân)",
    "Chải tóc – xịt dưỡng ẩm ngọn tóc (nếu tóc khô)",
    "Đánh răng 2 lần/ngày",
    "Tẩy trang / lau sạch mặt nếu dùng kem chống nắng hoặc đi ra ngoài",
    "Làm sạch môi – dưỡng môi",
    "Tắm nước ấm buổi tối (xả stress, reset da)",
    "Dưỡng da body tối (nếu không mệt)",
    "Kéo giãn chân, gập bụng nhẹ 3–5 phút (nếu ngồi lâu)"
  ],
  chamNhaCua: [
    "Xếp chăn gọn sau khi ngủ dậy",
    "Rửa chén bát trong ngày (không để tồn qua đêm)",
    "Quét nhà hoặc lau chùi điểm bẩn rõ rệt",
    "Không để đồ lung tung dưới đất",
    "Dọn đồ trên bàn về đúng góc / vị trí",
    "Đổ rác (tối)"
  ],
  dinhDuong: [
    "1 cốc nước lọc ngay sau khi ngủ dậy",
    "Uống nước 1.5–2L chia sáng/chiều/tối",
    "2–3 bữa chính: đầy đủ carb tốt + đạm + rau",
    "1–2 bữa phụ nhẹ: sữa hạt / trái cây / hạt mix",
    "1 bữa có rau xanh dạng lá (giúp tiêu hóa)",
    "1–2 bữa có trái cây tươi",
    "1 bữa có protein trắng (cá, gà, trứng)",
    "Tránh để quá 6 tiếng không ăn",
    "Không ăn khuya sau 9h tối (trừ khi tập nặng)"
  ],
  langPhi: [
    "Hôm nay có bị rớt mode / tụt khí không? (Nếu có, tự xử chưa?)",
    "Có để bản thân trì hoãn 2 tiếng liên tiếp không lý do?",
    "Mạng xã hội / Tiktok hôm nay có tràn quá 30 phút không?",
    "Có ngồi lướt kiểu vô thức quá 3 lần / ngày không?",
    "Có bị kéo vào nhóm chat / bạn bè không thuộc vòng chiến lược?",
    "Có để bản thân làm việc khi đã mệt / cạn pin không? (Nếu có, có nghỉ hồi pin chưa?)",
    "Có ăn uống đúng khung để giữ nền năng lượng chưa?",
    "Có bị cuốn vào những việc không có giá trị lâu dài? (Ví dụ: drama, thị phi, chuyện vô ích)",
    "Có tiêu hao thời gian vì dọn dẹp / sắp xếp không dứt điểm?"
  ],
  aura: [
    "Thở sâu, vươn người — mở lồng ngực 3–5 phút",
    "Dành 10–15 phút ở một mình — không mạng, không nói",
    "Dưỡng da cổ + vai (song song với dưỡng da mặt)",
    "Ý thức: giữ mặt thả mềm, không cau — môi nhẹ tự nhiên",
    "Nhìn gương 2 phút/ngày: mắt tỉnh — không gồng",
    "Giọng nói: giữ đều, mềm, không cộc",
    "Ăn uống chậm rãi — không nuốt vội",
    "Nghe nhạc tầng cao (nhạc chill – nhạc nền Fantasy – Nature Sound)"
  ],
  soThich: [
    "Xem múa cổ trang hoặc múa võ (10–30’)",
    "Nghe nhạc cụ / sáo / đàn (10–40’)",
    "Thưởng mùi thơm tự nhiên (tinh dầu / hoa / rượu trái cây)",
    "Ngắm 1 hình mỹ nhân khí mềm hoặc khí tỉnh (5–10’)",
    "Vẽ tranh / mặc đẹp / ngồi tĩnh giữa không gian đẹp (15–30’)",
    "Uống nước ép / rượu trái cây (100–200ml)",
    "Luyện giọng ấm (5–10 phút, buổi sáng hoặc tối)",
    "Đọc truyện / bài phân tích sâu (30–60’)",
    "Thu thập 1–3 mẫu / content mới để nạp pattern (15–30’)",
    "Nghe / đọc tài chính – dòng tiền (15–45’)",
    "Làm 1 lần “data hóa” – sơ đồ – hệ hóa 1 chủ đề đang học (tối đa 45’)",
    "Quan sát 1 nhân vật / case người trong ngày → phân tích khí tầng",
    "Vận động nhẹ / bơi / đi bộ / vươn căng 10–20 phút",
    "Ăn 1 bữa ngon có tỉnh khí",
    "Uống đủ nước ấm — không uống lạnh sau 21h",
    "Tránh gió – lạnh – âm khí trực tiếp khi mệt"
  ],
  theDuc: [
    "Kéo giãn nhẹ sau khi ngủ dậy (5 phút)",
    "Đi bộ hoặc di chuyển cơ thể 15–30 phút (tránh ngồi lì)",
    "Vươn vai, xoay cổ, gập người 2 lần/ngày (sáng – tối)",
    "Giữ thẳng cột sống khi ngồi học/làm (ý thức chỉnh)",
    "Xoa bụng theo chiều kim đồng hồ sau ăn (1 phút)",
    "Nhẹ nhàng bóp chân – cổ chân trước khi ngủ"
  ]
};

    const groupIcons = {
  dinhDuong: "\ud83c\udf4e",
  chamCoThe: "\ud83c\udfcb\ufe0f",
  chamNhaCua: "\ud83c\udfe0",
  langPhi: "\ud83d\udcb0",
  aura: "\u2728",
  soThich: "\ud83c\udfad",
  theDuc: "\ud83c\udfc3"
};

const groupNames = {
  chamCoThe: "Chăm Cơ Thể",
  chamNhaCua: "Chăm Nhà Cửa",
  dinhDuong: "Dinh Dưỡng – Ẩm Thực",
  langPhi: "Kiểm Soát Lãng Phí",
  aura: "Nâng Tầng Aura",
  soThich: "Sở Thích – Dưỡng Khí",
  theDuc: "Thể Dục – Cơ Xương – Dáng Form"
};
    
const form = document.getElementById("checklist-form");
const categorySelect = document.getElementById("category");
const selectedDate = document.getElementById("datePicker");
const titleEl = document.getElementById("checklist-title");
const dateSpan = document.getElementById("date");
const countSpan = document.getElementById("count");
const totalSpan = document.getElementById("total");
const percentSpan = document.getElementById("percent");
const rankSpan = document.getElementById("rank");
const motivationEl = document.getElementById("motivation");
const summaryEl = document.querySelector(".checklist-summary");
let calendar;
const historyTable = document.getElementById("history-table").querySelector("tbody");
const pastelColors = ["#f9f9ff", "#e8f6ff", "#fff7e6", "#e8ffe8", "#ffe6f2"];

const compareCanvas = document.getElementById("compareChart");
let compareChart;
const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");
const storyMessages = document.getElementById("storyMessages");
const snippetDiv = document.getElementById("snippet");
const milestoneModal = document.getElementById("milestoneModal");
const milestoneText = document.getElementById("milestoneText");
const closeModalBtn = document.getElementById("closeModal");
if(closeModalBtn) closeModalBtn.addEventListener("click", () => milestoneModal.classList.add("hidden"));
const energyBar = document.getElementById("energyBar");
const moodBar = document.getElementById("moodBar");
const auraBar = document.getElementById("auraBar");
const milestoneShown = {};
const STATS_KEY = "checklist_stats";
const scoreEl = document.getElementById("scoreValue");
let score = parseInt(localStorage.getItem("score") || "0");

function updateScoreDisplay(){
  if(scoreEl) scoreEl.textContent = score;
}

function changeScore(delta){
  score = Math.max(0, score + delta);
  localStorage.setItem("score", score);
  updateScoreDisplay();
}

function saveStats(){
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

function loadStats(){
  const saved = localStorage.getItem(STATS_KEY);
  if(saved){
    try{
      const obj = JSON.parse(saved);
      if(typeof obj.energy === "number") stats.energy = obj.energy;
      if(typeof obj.mood === "number") stats.mood = obj.mood;
      if(typeof obj.aura === "number") stats.aura = obj.aura;
    }catch(e){/* ignore malformed data */}
  }
  updateBars();
  updateScoreDisplay();
}

function appendStory(text, highlight = false){
  if(!storyMessages) return;
  const p = document.createElement('p');
  if(highlight) p.style.fontWeight = 'bold';
  p.textContent = text;
  storyMessages.appendChild(p);
}

function showStory(){
  const txt = snippetDiv.textContent.trim();
  if(txt) appendStory(txt);
}
// === SIMULATION MODE ===
const checklistValues = {
  "Uống đủ 1.5 – 2L nước (chia 3 khung sáng – chiều – tối)": {energy:10, mood:0, aura:0},
  "Rửa mặt sáng + tối": {energy:5, mood:0, aura:5},
  "Thoa lotion body (cổ – vai – tay – chân)": {energy:0, mood:0, aura:5},
  "Chải tóc – xịt dưỡng ẩm ngọn tóc (nếu tóc khô)": {energy:0, mood:0, aura:5},
  "Đánh răng 2 lần/ngày": {energy:5, mood:0, aura:0},
  "Tẩy trang / lau sạch mặt nếu dùng kem chống nắng hoặc đi ra ngoài": {energy:0, mood:0, aura:5},
  "Làm sạch môi – dưỡng môi": {energy:0, mood:0, aura:5},
  "Tắm nước ấm buổi tối (xả stress, reset da)": {energy:10, mood:5, aura:5},
  "Dưỡng da body tối (nếu không mệt)": {energy:0, mood:0, aura:5},
  "Kéo giãn chân, gập bụng nhẹ 3–5 phút (nếu ngồi lâu)": {energy:5, mood:5, aura:0},
  
  // ✅ Chăm nhà cửa
  "Xếp chăn gọn sau khi ngủ dậy": {energy:0, mood:0, aura:5},
  "Rửa chén bát trong ngày (không để tồn qua đêm)": {energy:-5, mood:0, aura:5},
  "Quét nhà hoặc lau chùi điểm bẩn rõ rệt": {energy:-5, mood:0, aura:10},
  "Không để đồ lung tung dưới đất": {energy:0, mood:0, aura:5},
  "Dọn đồ trên bàn về đúng góc / vị trí": {energy:0, mood:0, aura:5},
  "Đổ rác (tối)": {energy:-5, mood:0, aura:5},
  
  // ✅ Dinh dưỡng
  "1 cốc nước lọc ngay sau khi ngủ dậy": {energy:10, mood:0, aura:0},
  "Uống nước 1.5–2L chia sáng/chiều/tối": {energy:10, mood:0, aura:0},
  "2–3 bữa chính: đầy đủ carb tốt + đạm + rau": {energy:10, mood:5, aura:0},
  "1–2 bữa phụ nhẹ: sữa hạt / trái cây / hạt mix": {energy:5, mood:5, aura:0},
  "1 bữa có rau xanh dạng lá (giúp tiêu hóa)": {energy:5, mood:0, aura:0},
  "1–2 bữa có trái cây tươi": {energy:5, mood:5, aura:0},
  "1 bữa có protein trắng (cá, gà, trứng)": {energy:5, mood:0, aura:0},
  "Tránh để quá 6 tiếng không ăn": {energy:5, mood:5, aura:0},
  "Không ăn khuya sau 9h tối (trừ khi tập nặng)": {energy:0, mood:0, aura:5},
  
  // ✅ Lãng phí
  "Hôm nay có bị rớt mode / tụt khí không? (Nếu có, tự xử chưa?)": {energy:0, mood:10, aura:5},
  "Có để bản thân trì hoãn 2 tiếng liên tiếp không lý do?": {energy:0, mood:10, aura:0},
  "Mạng xã hội / Tiktok hôm nay có tràn quá 30 phút không?": {energy:0, mood:5, aura:5},
  "Có ngồi lướt kiểu vô thức quá 3 lần / ngày không?": {energy:0, mood:5, aura:0},
  "Có bị kéo vào nhóm chat / bạn bè không thuộc vòng chiến lược?": {energy:0, mood:0, aura:5},
  "Có để bản thân làm việc khi đã mệt / cạn pin không? (Nếu có, có nghỉ hồi pin chưa?)": {energy:10, mood:0, aura:0},
  "Có ăn uống đúng khung để giữ nền năng lượng chưa?": {energy:5, mood:0, aura:0},
  "Có bị cuốn vào những việc không có giá trị lâu dài? (Ví dụ: drama, thị phi, chuyện vô ích)": {energy:0, mood:5, aura:5},
  "Có tiêu hao thời gian vì dọn dẹp / sắp xếp không dứt điểm?": {energy:0, mood:5, aura:0},

  // ✅ Aura
  "Thở sâu, vươn người — mở lồng ngực 3–5 phút": {energy:5, mood:0, aura:5},
  "Dành 10–15 phút ở một mình — không mạng, không nói": {energy:0, mood:10, aura:0},
  "Dưỡng da cổ + vai (song song với dưỡng da mặt)": {energy:0, mood:0, aura:5},
  "Ý thức: giữ mặt thả mềm, không cau — môi nhẹ tự nhiên": {energy:0, mood:5, aura:10},
  "Nhìn gương 2 phút/ngày: mắt tỉnh — không gồng": {energy:0, mood:5, aura:5},
  "Giọng nói: giữ đều, mềm, không cộc": {energy:0, mood:5, aura:10},
  "Ăn uống chậm rãi — không nuốt vội": {energy:0, mood:5, aura:5},
  "Nghe nhạc tầng cao (nhạc chill – nhạc nền Fantasy – Nature Sound)": {energy:0, mood:10, aura:0},
  
  // ✅ Sở thích
  "Xem múa cổ trang hoặc múa võ (10–30’)": {energy:0, mood:10, aura:5},
  "Nghe nhạc cụ / sáo / đàn (10–40’)": {energy:0, mood:10, aura:0},
  "Thưởng mùi thơm tự nhiên (tinh dầu / hoa / rượu trái cây)": {energy:0, mood:10, aura:5},
  "Ngắm 1 hình mỹ nhân khí mềm hoặc khí tỉnh (5–10’)": {energy:0, mood:5, aura:10},
  "Vẽ tranh / mặc đẹp / ngồi tĩnh giữa không gian đẹp (15–30’)": {energy:0, mood:10, aura:10},
  "Uống nước ép / rượu trái cây (100–200ml)": {energy:0, mood:10, aura:0},
  "Luyện giọng ấm (5–10 phút, buổi sáng hoặc tối)": {energy:0, mood:5, aura:5},
  "Đọc truyện / bài phân tích sâu (30–60’)": {energy:0, mood:10, aura:0},
  "Thu thập 1–3 mẫu / content mới để nạp pattern (15–30’)": {energy:0, mood:10, aura:0},
  "Nghe / đọc tài chính – dòng tiền (15–45’)": {energy:0, mood:5, aura:5},
  "Làm 1 lần “data hóa” – sơ đồ – hệ hóa 1 chủ đề đang học (tối đa 45’)": {energy:0, mood:10, aura:5},
  "Quan sát 1 nhân vật / case người trong ngày → phân tích khí tầng": {energy:0, mood:10, aura:5},
  "Vận động nhẹ / bơi / đi bộ / vươn căng 10–20 phút": {energy:10, mood:5, aura:0},
  "Ăn 1 bữa ngon có tỉnh khí": {energy:0, mood:10, aura:0},
  "Uống đủ nước ấm — không uống lạnh sau 21h": {energy:5, mood:0, aura:5},
  "Tránh gió – lạnh – âm khí trực tiếp khi mệt": {energy:5, mood:0, aura:5},
  
  // ✅ Thể dục
  "Kéo giãn nhẹ sau khi ngủ dậy (5 phút)": {energy:10, mood:0, aura:0},
  "Đi bộ hoặc di chuyển cơ thể 15–30 phút (tránh ngồi lì)": {energy:10, mood:5, aura:0},
  "Vươn vai, xoay cổ, gập người 2 lần/ngày (sáng – tối)": {energy:10, mood:0, aura:0},
  "Giữ thẳng cột sống khi ngồi học/làm (ý thức chỉnh)": {energy:0, mood:5, aura:5},
  "Xoa bụng theo chiều kim đồng hồ sau ăn (1 phút)": {energy:0, mood:5, aura:5},
  "Nhẹ nhàng bóp chân – cổ chân trước khi ngủ": {energy:0, mood:5, aura:5}
};

// === STORY MODE ===
const storyBank = [
  "Một làn khí nhẹ lan ra quanh bạn.",
  "Bạn thấy cơ thể mình ấm lên một chút.",
  "Có gì đó tươi mới trong khoảnh khắc này.",
  "Không gian như thở dễ hơn.",
  "Cảm giác này nhỏ thôi nhưng thật dễ chịu.",
  "Một cơn căng nhẹ vừa biến mất.",
  "Ngày hôm nay bỗng như chậm lại.",
  "Bạn nghe tiếng thở của mình rõ hơn.",
  "Cơ thể như gửi lời cảm ơn.",
  "Sự mệt mỏi lùi đi một chút.",
  "Giọt nước đầu tiên như làm mới bạn từ trong ra.",
  "Da bạn mềm hơn khi lotion vừa thấm.",
  "Mùi xà phòng còn vương nhẹ trong không khí.",
  "Một cảm giác sạch lan khắp tay.",
  "Miệng bạn thấy dễ chịu hơn sau khi đánh răng.",
  "Cơ thể bạn thở phào khi kéo giãn.",
  "Vị trái cây chua ngọt nhắc bạn rằng bạn vẫn còn sống động.",
  "Cơ thể như được đổ thêm một ít ánh sáng.",
  "Mỗi ngụm nước như dập tắt cơn uể oải.",
  "Mùi lotion nhắc bạn chạm vào bản thân với sự dịu dàng.",
  "Sàn nhà sáng hơn một chút.",
  "Không gian sạch hơn, và đầu óc bạn cũng vậy.",
  "Đồ vật gọn gàng, bạn thấy lòng mình cũng gọn.",
  "Một góc bừa đã biến mất.",
  "Ánh sáng chiếu vào phòng khác hẳn.",
  "Phòng bạn như hít thở.",
  "Hương thơm nhẹ lan ra sau khi dọn xong.",
  "Cửa sổ phản chiếu một gương mặt nhẹ hơn.",
  "Không gian này vừa trở thành nơi trú ngụ.",
  "Bạn không còn phải tránh ánh nhìn với góc bừa.",
  "Âm nhạc như trôi qua bạn.",
  "Một giai điệu lạ vừa chạm tim bạn.",
  "Bức tranh bạn ngắm không chỉ là hình – nó thở.",
  "Mùi hương nhẹ làm tâm trí bạn dịu xuống.",
  "Một đoạn chữ vừa dừng bạn lại giữa trang.",
  "Tâm trí như được cho ăn.",
  "Bạn thấy hứng thú với một điều nhỏ.",
  "Một chi tiết mới đã đi vào trí nhớ.",
  "Nhịp thở chậm hơn khi tiếng đàn vang lên.",
  "Bạn nhấp một ngụm rượu trái cây, và mọi thứ dịu xuống."
];

// ================ MILESTONE BANK ===================
const milestoneBank = [
  "Cơ thể này như vừa được reset.",
  "Căn phòng này giờ thở cùng bạn.",
  "Ngày hôm nay không còn lãng phí.",
  "Bạn mang theo một lớp khí tỉnh.",
  "Một nguồn năng lượng yên tĩnh lan ra.",
  "Bạn vừa cho tâm trí mình một bữa tiệc.",
  "Cơ thể bạn nhớ lại cách nó từng chuyển động.",
  "Một sự an ổn nhỏ đã bám vào ngày này.",
  "Khí chất bạn mang hôm nay sẽ còn dư âm tới ngày mai.",
  "Một lớp mệt mỏi dày đã được gỡ bỏ."
];
// ================== JS LOGIC ====================
const stats = { energy: 50, mood: 50, aura: 50 };
const groupSelect = document.getElementById('category');
const checklistDiv = document.getElementById('checklist');
// snippetDiv, milestoneModal và milestoneText đã được khai báo ở phía trên
// nên không cần lặp lại tại đây.

// Cập nhật thanh trạng thái
function updateBars(){
  document.getElementById('energyBar').style.width = stats.energy + '%';
  document.getElementById('moodBar').style.width = stats.mood + '%';
  document.getElementById('auraBar').style.width = stats.aura + '%';
}
updateBars();

// Khi chọn nhóm checklist
groupSelect.addEventListener('change',()=>{
  currentGroup=groupSelect.value;
  loadChecklist();
});

// Load checklist cho nhóm
function loadChecklist(){
  checklistDiv.innerHTML='';
  snippetDiv.textContent='';
  if(!currentGroup) return;
  const items=checklistData[currentGroup];
  // lấy trạng thái từ localStorage
  currentValues=JSON.parse(localStorage.getItem('progress_'+currentGroup)||'[]');
  if(currentValues.length!==items.length) currentValues=items.map(()=>false);

  items.forEach((item,idx)=>{
    const label=document.createElement('label');
    const cb=document.createElement('input');
    cb.type='checkbox';
    cb.checked=currentValues[idx];
    if(cb.checked) label.classList.add('checked');
    cb.addEventListener('change',()=>toggleItem(idx,item,label,cb));
    label.appendChild(cb); label.append(' '+item);
    checklistDiv.appendChild(label);
  });
}

// Hiệu ứng story
function fadeSnippet(text){
  snippetDiv.style.opacity=0;
  setTimeout(()=>{
    snippetDiv.textContent=text;
    snippetDiv.style.opacity=1;
  },50);
}

// Toggle khi tick checklist
function toggleItem(idx,item,label,cb){
  currentValues[idx]=cb.checked;
  label.classList.toggle('checked',cb.checked);
  localStorage.setItem('progress_'+currentGroup, JSON.stringify(currentValues));

  if(cb.checked){
    // Lấy values cho item
    const val = checklistValues[item] || {energy:5, mood:5, aura:5};
    stats.energy = Math.min(100, stats.energy + val.energy);
    stats.mood = Math.min(100, stats.mood + val.mood);
    stats.aura = Math.min(100, stats.aura + val.aura);
    changeScore(1);
    // Random story
    const story = storyBank[Math.floor(Math.random()*storyBank.length)];
    fadeSnippet(`${story} (+1 điểm)`);  
  } else {
    // Nếu bỏ tick -> trừ nhẹ
    const val = checklistValues[item] || {energy:5, mood:5, aura:5};
    stats.energy=Math.max(0,stats.energy - val.energy);
    stats.mood=Math.max(0,stats.mood - val.mood);
    stats.aura=Math.max(0,stats.aura - val.aura);
    changeScore(-1);
  }
  updateBars();
  checkMilestone();
}

// Kiểm tra milestone (hoàn thành nhóm)
function checkMilestone(){
  if(currentValues.every(v=>v)){
    milestoneText.textContent = milestoneBank[Math.floor(Math.random()*milestoneBank.length)];
    milestoneModal.classList.remove('hidden');
  }
}

if (typeof Chart !== "undefined" && typeof ChartDataLabels !== "undefined") {
  Chart.register(ChartDataLabels);
}
let currentGroup = null;

let currentValues = [];
let undoStack = [];

categorySelect.addEventListener("change", handleGroupChange);
selectedDate.addEventListener("change", handleGroupChange);

function handleGroupChange() {
  const groups = Array.from(categorySelect.selectedOptions)
    .map(o => o.value)
    .filter(v => v);
  if (groups.length === 1) {
    form.classList.remove("hidden");
    summaryEl.classList.remove("hidden");
    currentGroup = groups[0];
    loadChecklist(currentGroup);
  } else {
    form.classList.add("hidden");
    summaryEl.classList.add("hidden");
    titleEl.textContent = "";
    currentGroup = null;
  }
  updateChart(groups);
}

function updateChart(groups) {
  if (!groups || groups.length === 0) {
    if (compareChart) {
      compareChart.destroy();
      compareChart = null;
    }
    compareCanvas.classList.add("hidden");
    progressContainer.classList.add("hidden");
    return;
  }

  if (groups.length === 1) {
    if (compareChart) {
      compareChart.destroy();
      compareChart = null;
    }
    compareCanvas.classList.add("hidden");
    
    const g = groups[0];
    const items = checklistData[g];
    const values = getSavedData(selectedDate.value, g) || items.map(() => false);
    const done = values.filter(v => v).length;
    const percent = Math.round((done / items.length) * 100);
    progressBar.style.width = percent + "%";
    progressBar.textContent = percent + "%";
    progressContainer.classList.remove("hidden");
    return;
  }

  progressContainer.classList.add("hidden");
  const labels = [];
  const data = [];
  groups.forEach(g => {
    const items = checklistData[g];
    const values = getSavedData(selectedDate.value, g) || items.map(() => false);
    const done = values.filter(v => v).length;
    const percent = Math.round((done / items.length) * 100);
    labels.push(groupNames[g] || g);
    data.push(percent);
  });
  compareCanvas.classList.remove("hidden");
  if (!compareChart) {
    compareCanvas.height = 300;
    compareChart = new Chart(compareCanvas, {
      type: "bar",
      data: {
        labels,
        datasets: [{
          label: "% hoàn thành",
          data,
          backgroundColor: "#4caf50"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, max: 100 }
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'start',
            color: '#fff',
            font: { size: 14, weight: 'bold' },
            formatter: v => v + '%'
          }
        }
      }
    });
  } else {
    compareChart.data.labels = labels;
    compareChart.data.datasets[0].data = data;
    if (compareChart.options.plugins && compareChart.options.plugins.datalabels) {
      // keep same options
    } else if (compareChart.options) {
      compareChart.options.plugins = {
        datalabels: {
          anchor: 'end',
          align: 'start',
          color: '#fff',
          font: { size: 14, weight: 'bold' },
          formatter: v => v + '%'
        }
      };
    }
    compareChart.update();
  }
}

function loadLocalHistory() {
  historyTable.innerHTML = "";
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith("checklist_")) {
      const [, date, group] = key.split("_");
      const values = JSON.parse(localStorage.getItem(key));
      addToHistory(date, group, values);
      if (calendar) calendar.redraw();
    }
  });
}

async function loadChecklist(group = currentGroup) {
  form.innerHTML = "";
  const date = selectedDate.value;
  if (!group || !date) {
    if (titleEl) titleEl.textContent = "";
    return;
  }

  if (titleEl) titleEl.textContent = `${groupIcons[group] || ""} ${groupNames[group] || ""}`;

  const items = checklistData[group];
  let values = getSavedData(date, group);
  currentValues = values || items.map(() => false);
  undoStack = [];
  items.forEach((item, index) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = `check-${index}`;
    checkbox.checked = currentValues[index];
    if (checkbox.checked) label.classList.add("checked");
    label.appendChild(checkbox);
    label.append(` ${item}`);
    form.appendChild(label);
  });

  updateStats();
  loadStory(date, group);
  form.querySelectorAll("input").forEach(input =>
    input.addEventListener("change", handleChange)
  );
}

function updateStats() {
  const date = selectedDate.value;
  const group = currentGroup;
  const items = checklistData[group];
  const values = [...form.querySelectorAll("input")].map(i => i.checked);
  currentValues = values;
  const done = values.filter(v => v).length;
  const percent = Math.round((done / items.length) * 100);
  let rank = "Chưa xác định";
  if (percent >= 90) rank = "Xuất sắc";
  else if (percent >= 70) rank = "Tốt";
  else if (percent >= 50) rank = "Trung bình";
  else rank = "Cần cải thiện";

  dateSpan.textContent = date;
  countSpan.textContent = done;
  totalSpan.textContent = items.length;
  percentSpan.textContent = percent + "%";
  rankSpan.textContent = rank;
    rankSpan.classList.remove("good", "average", "poor");
  if (rank === "Tốt" || rank === "Xuất sắc") {
    rankSpan.classList.add("good");
  } else if (rank === "Trung bình") {
    rankSpan.classList.add("average");
  } else if (rank === "Cần cải thiện") {
    rankSpan.classList.add("poor");
  }
  let message = "";
  if (percent < 50) message = "Bắt đầu ổn, cố thêm chút nữa!";
  else if (percent < 100) message = "Tiến triển tốt! Gần xong rồi!";
  else message = "🎉 Xuất sắc! Bạn hoàn thành tất cả mục hôm nay!";
  motivationEl.textContent = message;
}

function handleChange(e) {
  const label = e.target.parentElement;
  label.classList.toggle("checked", e.target.checked);
  undoStack.push([...currentValues]);
  const item = label.textContent.trim();
  const val = checklistValues[item] || {energy:0, mood:0, aura:0};
  if(e.target.checked){
    stats.energy = Math.min(100, stats.energy + val.energy);
    stats.mood = Math.min(100, stats.mood + val.mood);
    stats.aura = Math.min(100, stats.aura + val.aura);
    changeScore(1);
    const story = storyBank[Math.floor(Math.random()*storyBank.length)];
    fadeSnippet(`${story} (+1 điểm)`);  } else {
    stats.energy = Math.max(0, stats.energy - val.energy);
    stats.mood = Math.max(0, stats.mood - val.mood);
    stats.aura = Math.max(0, stats.aura - val.aura);
    changeScore(-1);
  }
  updateStats();
  updateBars();
  saveStats();
  if(e.target.checked){
    showStory();
    const items = checklistData[currentGroup];
    const allChecked = form.querySelectorAll("input:checked").length === items.length;
    const key = `milestone_${selectedDate.value}_${currentGroup}`;
    if(allChecked && !milestoneShown[`story_${selectedDate.value}_${currentGroup}`]){
      const mile = milestoneBank[Math.floor(Math.random()*milestoneBank.length)];
      appendStory(mile, true);
      localStorage.setItem(key, "1");
      milestoneShown[`story_${selectedDate.value}_${currentGroup}`]=true;
  }
    checkMilestone();
  }
  const groups = Array.from(categorySelect.selectedOptions)
    .map(o => o.value)
    .filter(v => v);
  if (groups.length > 0) updateChart(groups);
}

function undoChange() {
  if (undoStack.length === 0) return;
  const prev = undoStack.pop();
  form.querySelectorAll("input").forEach((input, idx) => {
    input.checked = prev[idx];
    input.parentElement.classList.toggle("checked", input.checked);
  });
  updateStats();
}
    
async function saveProgress() {
  const date = selectedDate.value;
  const group = currentGroup;
  if (!date || !group) return;

  const values = [...form.querySelectorAll("input")].map(i => i.checked);
  localStorage.setItem(`checklist_${date}_${group}`, JSON.stringify(values));
  if (typeof currentUser !== "undefined" && currentUser && typeof db !== "undefined") {
    await db.collection("users").doc(currentUser.uid)
      .collection("checklists").doc(`${date}_${group}`)
      .set({ values });
  }
  addToHistory(date, group, values);
  if (calendar) calendar.redraw();
  const groups = Array.from(categorySelect.selectedOptions)
    .map(o => o.value)
    .filter(v => v);
  if (groups.length > 0) updateChart(groups);
}

function getSavedData(date, group) {
  const data = localStorage.getItem(`checklist_${date}_${group}`);
  return data ? JSON.parse(data) : null;
}

async function getCloudData(date, group) {
  if (typeof currentUser === "undefined" || !currentUser || typeof db === "undefined") return null;
  const docRef = db.collection("users").doc(currentUser.uid)
    .collection("checklists").doc(`${date}_${group}`);
  const snap = await docRef.get();
  return snap.exists ? snap.data().values : null;
}
    
function addToHistory(date, group, values) {
  const existingRow = historyTable.querySelector(`tr[data-id="${date}_${group}"]`);
  const done = values.filter(v => v).length;
  const percent = Math.round((done / values.length) * 100);
  let rank = "Chưa xác định";
  if (percent >= 90) rank = "Xuất sắc";
  else if (percent >= 70) rank = "Tốt";
  else if (percent >= 50) rank = "Trung bình";
  else rank = "Cần cải thiện";

  if (existingRow) {
    existingRow.innerHTML = `<td>${date}</td><td>${group}</td><td>${done}/${values.length}</td><td>${rank}</td>`;
  } else {
    const row = document.createElement("tr");
    row.setAttribute("data-id", `${date}_${group}`);
    row.innerHTML = `<td>${date}</td><td>${group}</td><td>${done}/${values.length}</td><td>${rank}</td>`;
    historyTable.appendChild(row);
  }

  sortHistory();
  updateRowColors();
  if (calendar) calendar.redraw();
}

function sortHistory() {
  const rows = Array.from(historyTable.querySelectorAll("tr"));
  rows.sort((a, b) => {
    const dateA = new Date(a.children[0].textContent);
    const dateB = new Date(b.children[0].textContent);
    return dateB - dateA;
  });
  rows.forEach(row => historyTable.appendChild(row));
}

function updateRowColors() {
  const rows = historyTable.querySelectorAll("tr");
  let currentDate = null;
  let colorIndex = -1;
  rows.forEach((row) => {
    const rowDate = row.children[0].textContent;
    if (rowDate !== currentDate) {
      colorIndex = (colorIndex + 1) % pastelColors.length;
      currentDate = rowDate;
    }
    let color = pastelColors[colorIndex];

    row.style.backgroundColor = color;
  });
}
function exportData() {
  if (!confirm("Xuất toàn bộ dữ liệu ra file?")) return;
  const data = {};
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith("checklist_")) {
      data[key] = JSON.parse(localStorage.getItem(key));
    }
  });
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "checklist_data.json";
  a.click();
  URL.revokeObjectURL(url);
}

function triggerImport() {
  document.getElementById("import-file").click();
}

function handleImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    let data;
    try {
      data = JSON.parse(e.target.result);
    } catch {
      alert("File không hợp lệ!");
      return;
    }
    if (!confirm("Nhập dữ liệu sẽ ghi đè dữ liệu hiện có. Tiếp tục?")) return;
    Object.keys(data).forEach(key => {
      if (key.startsWith("checklist_")) {
        localStorage.setItem(key, JSON.stringify(data[key]));
      }
    });
    loadLocalHistory();
    alert("Đã nhập dữ liệu!");
  };
  reader.readAsText(file);
  event.target.value = "";
}

document.getElementById("import-file").addEventListener("change", handleImport);
function dayStatus(date) {
  const groups = Object.keys(checklistData);
  let hasAny = false;
  let allComplete = true;
  for (const g of groups) {
    const vals = getSavedData(date, g);
    if (vals) {
      hasAny = true;
      if (vals.filter(v => v).length < vals.length) {
        allComplete = false;
      }
    }
  }
  if (!hasAny) return null;
  return allComplete ? "complete" : "incomplete";
}

window.addEventListener("DOMContentLoaded", () => {
  if (typeof Choices !== "undefined") {
    new Choices('#category', { removeItemButton: true, searchEnabled: true });
  }
  loadStats();
  calendar = flatpickr("#datePicker", {
    dateFormat: "Y-m-d",
    onChange: (selectedDates, dateStr) => {
      selectedDate.value = dateStr;
      handleGroupChange();
    },
    onDayCreate: (dObj, dStr, fp, dayElem) => {
      // Use flatpickr to format date in local timezone
      const date = fp.formatDate(dayElem.dateObj, "Y-m-d");      const status = dayStatus(date);
      if (status) dayElem.classList.add(status);
    }
  });
  calendar.setDate(new Date());
  selectedDate.value = calendar.input.value;
  handleGroupChange();
});
window.addEventListener("DOMContentLoaded", () => {
  loadLocalHistory();
  updateRowColors();
});
