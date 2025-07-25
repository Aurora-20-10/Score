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
const selectedDate = document.getElementById("selected-date");
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
    return;
  }
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
        scales: {
          y: { beginAtZero: true, max: 100 }
        }
      }
    });
  } else {
    compareChart.data.labels = labels;
    compareChart.data.datasets[0].data = data;
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
  updateStats();
  const groups = Array.from(categorySelect.selectedOptions)
    .map(o => o.value)
    .filter(v => v);
  if (groups.length > 1) updateChart(groups);
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
  alert("Đã lưu!");
  const groups = Array.from(categorySelect.selectedOptions)
    .map(o => o.value)
    .filter(v => v);
  if (groups.length > 1) updateChart(groups);
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
  calendar = flatpickr("#selected-date", {
    dateFormat: "Y-m-d",
    onChange: (selectedDates, dateStr) => {
      selectedDate.value = dateStr;
      handleGroupChange();
    },
    onDayCreate: (dObj, dStr, fp, dayElem) => {
      const date = dayElem.dateObj.toISOString().split("T")[0];
      const status = dayStatus(date);
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
