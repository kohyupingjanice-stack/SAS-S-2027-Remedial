const statusMessage = document.getElementById("statusMessage");
const resultCard = document.getElementById("resultCard");
const resultContent = document.getElementById("resultContent");
const selectionBadge = document.getElementById("selectionBadge");
const searchForm = document.getElementById("searchForm");
const nameInput = document.getElementById("nameInput");
const resetBtn = document.getElementById("resetBtn");

let students = [];

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = normalizeText(nameInput.value);

  if (!query) {
    showStatus("Please enter a student name.", "error");
    hideResult();
    return;
  }

  const matches = students.filter((student) =>
    normalizeName(student.name).includes(normalizeName(query))
  );

  if (!matches.length) {
    showStatus("No matching student found.", "error");
    hideResult();
    return;
  }

  showStatus(`Found ${matches.length} matching student(s).`, "success");
  showResults(matches);
});

resetBtn.addEventListener("click", () => {
  nameInput.value = "";
  showStatus("", "success");
  hideResult();
  nameInput.focus();
});

fetch("data/Testing_Remedial.csv")
  .then((response) => {
    if (!response.ok) throw new Error("CSV not found");
    return response.text();
  })
  .then((csvText) => {
    students = parseCsv(csvText);
    hideResult();
  })
  .catch(() => {
    showStatus("Unable to load student data. Please publish the site via GitHub Pages or a local web server.", "error");
  });

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  const rows = [];
  let dayLabels = [];

  for (const line of lines) {
    const values = parseCsvLine(line);

    if (values[0] && values[0].trim() === "Reg#") {
      dayLabels = values.slice(3).map((label) => label.trim());
      continue;
    }

    if (!values[0] || !values[1] || !values[2]) continue;

    const reg = (values[0] || "").trim();
    const name = (values[1] || "").trim();
    const className = (values[2] || "").trim();

    if (!reg || !name || !className || /Reg#|Subject\(s\) selected/i.test(reg)) continue;

    const subjects = values
      .slice(3)
      .map((cell, cellIndex) => ({
        day: dayLabels[cellIndex] || "Unspecified",
        subject: (cell || "").trim()
      }))
      .filter((entry) => entry.subject && entry.subject !== "")
      .map((entry) => ({
        day: entry.day,
        subject: entry.subject,
        time: "Not provided",
        venue: "Not provided"
      }));

    rows.push({
      reg,
      name,
      className,
      subjects
    });
  }

  return rows;
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

function normalizeText(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function normalizeName(value) {
  return normalizeText(value)
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function showStatus(message, type) {
  statusMessage.textContent = message;
  statusMessage.className = `status-message ${type}`;
}

function showResults(matches) {
  resultCard.classList.remove("hidden");

  const allRows = matches
    .map((student) => {
      const isSelected = student.subjects.length > 0;
      selectionBadge.textContent = isSelected ? "Selected" : "Not selected";
      selectionBadge.className = `selection-badge ${isSelected ? "selected" : "not-selected"}`;

      const subjectRows = student.subjects.length
        ? student.subjects
            .map(
              (item) => `
                <tr>
                  <td>${escapeHtml(item.subject)}</td>
                  <td>${escapeHtml(item.day)}</td>
                  <td>${escapeHtml(item.time)}</td>
                  <td>${escapeHtml(item.venue)}</td>
                </tr>
              `
            )
            .join("")
        : `
          <tr>
            <td colspan="4" class="empty-state">No remedial lessons selected.</td>
          </tr>
        `;

      return `
        <div class="student-summary">
          <div class="summary-item">
            <span class="label">Student name</span>
            <strong>${escapeHtml(student.name)}</strong>
          </div>
          <div class="summary-item">
            <span class="label">Register no.</span>
            <strong>${escapeHtml(student.reg)}</strong>
          </div>
          <div class="summary-item">
            <span class="label">Class</span>
            <strong>${escapeHtml(student.className)}</strong>
          </div>
        </div>

        <div class="schedule-wrapper">
          <table class="schedule-table" aria-label="Remedial lesson schedule">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Day</th>
                <th>Time</th>
                <th>Venue</th>
              </tr>
            </thead>
            <tbody>${subjectRows}</tbody>
          </table>
        </div>
      `;
    })
    .join("");

  resultContent.innerHTML = allRows;
}

function hideResult() {
  resultCard.classList.add("hidden");
  resultContent.innerHTML = "";
  selectionBadge.textContent = "Not selected";
  selectionBadge.className = "selection-badge not-selected";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    nameInput.focus();
  });
} else {
  nameInput.focus();
}

showStatus("", "success");
hideResult();
