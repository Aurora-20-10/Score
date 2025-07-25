document.addEventListener("DOMContentLoaded", () => {
  const sheetID = "13c3ViHrJp3FQhqk7tEY0popCBXtEPa8dTsT-S9DN05c";
  const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json`;

  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      // Google trả về JSON có tiền tố, cần cắt bỏ
      const json = JSON.parse(data.substring(47, data.length - 2));
      const table = json.table.rows;

      let html = "<h2>Danh sách file upload:</h2><ul>";
      table.forEach((row) => {
        const fileName = row.c[0]?.v || "";
        const fileLink = row.c[1]?.v || "";
        html += `<li><a href="${fileLink}" target="_blank">${fileName}</a></li>`;
      });
      html += "</ul>";

   document.body.innerHTML += html;
    });
});
