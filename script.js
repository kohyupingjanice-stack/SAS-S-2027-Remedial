const state = {
  rows: [],
  query: ""
};

const tableBody = document.getElementById("studentTableBody");
const searchInput = document.getElementById("searchInput");
const totalStudents = document.getElementById("totalStudents");
const totalSubjects = document.getElementById("totalSubjects");
const totalClasses = document.getElementById("totalClasses");

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  render();
});

fetch("data/Testing_Remedial.csv")
  .then((response) => {
    if (!response.ok) {
      throw new Error("CSV file not found");
    }
    return response.text();
  })
  .then((text) => {
    state.rows = parseCsv(text);
    render();
  })
  .catch((error) => {
    console.error(error);
    tableBody.innerHTML = '<tr><td colspan="4" class="empty-state">Unable to load the remedial roster.</td></tr>';
  });

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  const records = [];

  for (const line of lines) {
    const values = parseCsvLine(line);
    const reg = (values[0] || "").trim();
    const name = (values[1] || "").trim();
    const cls = (values[2] || "").trim();

    if (!reg || !name || !cls || /Reg#|Subject\(s\) selected/i.test(reg)) {
      continue;
    }

    const subjectCells = values.slice(3).map((cell) => cell.trim()).filter(Boolean);
    const subjects = subjectCells
      .flatMap((value) => value.split(/\s*;\s*/))
      .map((value) => value.trim())
      .filter(Boolean)
      .filter((value) => !/^\s*$/.test(value));

    records.push({
      reg,
      name,
      className: cls,
      subjects
    });
  }

  return records;
}

function parseCsvLine(text) {
  let current = "";
  let inQuotes = false;
  const values = [];

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];

    if (char === '"') {
      if (inQuotes && text[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current);
  return values;
}

function render() {
  const filtered = state.rows.filter((row) => {
    if (!state.query) return true;

    const haystack = [
      row.reg,
      row.name,
      row.className,
      ...row.subjects
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(state.query);
  });

  renderTable(filtered);
  renderStats(filtered);
}

function renderTable(rows) {
  if (!rows.length) {
    tableBody.innerHTML = '<tr><td colspan="4" class="empty-state">No matching students found.</td></tr>';
    return;
  }

  tableBody.innerHTML = rows
    .map(
      (row) => `
        <tr>
          <td>${escapeHtml(row.reg)}</td>
          <td>${escapeHtml(row.name)}</td>
          <td>${escapeHtml(row.className)}</td>
          <td>
            <div class="subject-list">
              ${row.subjects.length
                ? row.subjects
                    .map((subject) => `<span class="subject-pill">${escapeHtml(subject)}</span>`)
                    .join("")
                : '<span class="subject-pill">No subject assigned</span>'}
            </div>
          </td>
        </tr>
      `
    )
    .join("");
}

function renderStats(rows) {
  const uniqueSubjects = new Set();
  const uniqueClasses = new Set();

  rows.forEach((row) => {
    row.subjects.forEach((subject) => uniqueSubjects.add(subject));
    uniqueClasses.add(row.className);
  });

  totalStudents.textContent = rows.length;
  totalSubjects.textContent = uniqueSubjects.size;
  totalClasses.textContent = uniqueClasses.size;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
