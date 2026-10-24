const statusMessage = document.getElementById("statusMessage");
const resultCard = document.getElementById("resultCard");
const resultContent = document.getElementById("resultContent");
const nameInput = document.getElementById("nameInput");
const verifyBtn = document.getElementById("verifyBtn");

let students = [];

verifyBtn.addEventListener("click", () => {
  const enteredName = normalizeText(nameInput.value);

  if (!enteredName) {
    showStatus("Please enter a student name.", "error");
    hideResult();
    return;
  }

  const matches = students.filter((student) =>
    normalizeName(student.name).includes(normalizeName(enteredName))
  );

  if (!matches.length) {
    showStatus("No matching student found.", "error");
    hideResult();
    return;
  }

  showStatus(`Found ${matches.length} matching student(s).`, "success");
  showResults(matches);
});

fetch("data/Testing_Remedial.csv")
  .then((response) => response.text())
  .then((csvText) => {
    students = parseCsv(csvText);
    hideResult();
  })
  .catch(() => {
    showStatus("Unable to load student data.", "error");
  });

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  const rows = [];
  let dayLabels = [];

  lines.forEach((line) => {
    const values = parseCsvLine(line);

    if (values[0] && values[0].trim() === "Reg#") {
      dayLabels = values.slice(3).map((label) => label.trim());
      return;
    }

    if (!values[0] || !values[1] || !values[2]) {
      return;
    }

    const reg = (values[0] || "").trim();
    const name = (values[1] || "").trim();
    const cls = (values[2] || "").trim();

    if (!reg || !name || !cls || /Reg#|Subject\(s\) selected/i.test(reg)) {
      return;
    }

    const subjectEntries = values
      .slice(3)
      .map((cell, cellIndex) => ({
        day: dayLabels[cellIndex] || "Unspecified",
        subject: (cell || "").trim()
      }))
      .filter((entry) => entry.subject && entry.subject !== "")
      .map((entry) => ({
        day: entry.day,
        subject: entry.subject,
        label: `${entry.day}: ${entry.subject}`
      }));

    rows.push({
      reg,
      name,
      className: cls,
      subjects: subjectEntries
    });
  });

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

  resultContent.innerHTML = `
    <div class="student-list">
      ${matches
        .map(
          (student) => `
            <div class="student-result">
              <div class="name">${escapeHtml(student.name)}</div>
              <div class="result-row">
                <div class="info-box">
                  <span class="label">Register Number</span>
                  <strong>${escapeHtml(student.reg)}</strong>
                </div>
                <div class="info-box">
                  <span class="label">Class</span>
                  <strong>${escapeHtml(student.className)}</strong>
                </div>
              </div>
              <div class="info-box" style="margin-top: 12px;">
                <span class="label">Remedial schedule</span>
                <div class="subject-list">
                  ${student.subjects.length
                    ? student.subjects
                        .map((subject) => `<span class="subject-pill">${escapeHtml(subject.label)}</span>`)
                        .join("")
                    : '<span class="subject-pill">No subject assigned</span>'}
                </div>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function hideResult() {
  resultCard.classList.add("hidden");
  resultContent.innerHTML = "";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
