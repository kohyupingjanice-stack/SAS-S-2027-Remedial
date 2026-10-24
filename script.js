* {
  box-sizing: border-box;
}

:root {
  --bg-top: #eaf4ff;
  --bg-bottom: #f7faff;
  --card: rgba(255, 255, 255, 0.96);
  --card-border: #d7e8ff;
  --primary: #124b9f;
  --primary-dark: #0c2b61;
  --primary-soft: #edf5ff;
  --primary-soft-2: #dfeeff;
  --accent: #4b9cff;
  --text: #1d2c3d;
  --muted: #5f6f86;
  --success: #1d8d5c;
  --error: #bf2d2d;
  --warning: #d78b12;
  --shadow: 0 18px 42px rgba(18, 51, 103, 0.12);
  --table-head: #e7f0ff;
  --table-row-alt: #fafcff;
}

html {
  font-size: 18px;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(180deg, var(--bg-top) 0%, var(--bg-bottom) 100%);
  color: var(--text);
  font-family: "Segoe UI", Arial, sans-serif;
  line-height: 1.6;
}

button,
input {
  font: inherit;
}

.page-shell {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 20px 50px;
}

.topbar {
  margin-bottom: 20px;
}

.brand-wrap {
  display: inline-flex;
  align-items: center;
  gap: 16px;
}

.brand-mark {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  display: grid;
  place-items: center;
  color: white;
  font-size: 1.8rem;
  font-weight: 800;
  box-shadow: 0 12px 24px rgba(18, 75, 159, 0.18);
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  color: var(--primary);
  font-weight: 800;
}

h1 {
  margin: 2px 0 0;
  font-size: clamp(2.2rem, 2vw + 1.4rem, 3.1rem);
  line-height: 1.15;
  color: var(--primary-dark);
}

.content {
  display: grid;
  gap: 22px;
}

.card {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 26px;
}

.hero-card {
  padding: 28px;
}

.search-panel {
  display: grid;
  gap: 20px;
}

.search-copy h2,
.result-header h2 {
  margin: 0 0 8px;
  font-size: clamp(1.5rem, 1.1vw + 1.1rem, 2.2rem);
  color: var(--primary-dark);
}

.search-copy p {
  margin: 0;
  font-size: 1.05rem;
  color: var(--muted);
}

#searchForm {
  display: grid;
  gap: 12px;
}

#searchForm label {
  font-size: 1.02rem;
  font-weight: 700;
  color: var(--primary-dark);
}

.input-row {
  display: flex;
  gap: 12px;
  align-items: stretch;
}

input {
  flex: 1;
  width: 100%;
  min-height: 54px;
  padding: 0.8rem 1rem;
  border-radius: 14px;
  border: 1.5px solid #cfdefd;
  background: #fff;
  color: var(--text);
  font-size: 1.05rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(75, 156, 255, 0.12);
}

.primary-btn,
.secondary-btn {
  border: 0;
  border-radius: 14px;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease;
}

.primary-btn {
  min-width: 150px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  color: white;
  box-shadow: 0 12px 24px rgba(18, 75, 159, 0.18);
}

.secondary-btn {
  justify-self: start;
  background: #edf5ff;
  color: var(--primary-dark);
  border: 1px solid #d4e7ff;
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.02);
}

.status-message {
  min-height: 28px;
  margin-top: 4px;
  font-size: 1rem;
  font-weight: 700;
}

.status-message.error {
  color: var(--error);
}

.status-message.success {
  color: var(--success);
}

.result-card {
  display: block;
}

.result-card.hidden {
  display: none;
}

.result-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.selection-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  border: 1px solid transparent;
}

.selection-badge.selected {
  background: rgba(29, 141, 92, 0.12);
  color: var(--success);
  border-color: rgba(29, 141, 92, 0.2);
}

.selection-badge.not-selected {
  background: rgba(191, 45, 45, 0.08);
  color: var(--error);
  border-color: rgba(191, 45, 45, 0.2);
}

.student-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}

.summary-item {
  background: #fff;
  border: 1px solid #dbe9ff;
  border-radius: 14px;
  padding: 14px 16px;
}

.summary-item .label {
  display: block;
  margin-bottom: 6px;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--muted);
}

.summary-item strong {
  font-size: 1.05rem;
  color: var(--primary-dark);
  word-break: break-word;
}

.schedule-wrapper {
  overflow-x: auto;
  border-radius: 16px;
  border: 1px solid #d6e4ff;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 720px;
  background: white;
}

.schedule-table th,
.schedule-table td {
  padding: 16px 18px;
  border: 1px solid #d8e5ff;
  text-align: left;
  vertical-align: top;
  font-size: 1rem;
}

.schedule-table th {
  background: var(--table-head);
  color: var(--primary-dark);
  font-size: 1.05rem;
  font-weight: 800;
}

.schedule-table tbody tr:nth-child(even) {
  background: var(--table-row-alt);
}

.schedule-table td:first-child {
  font-weight: 800;
  color: var(--primary-dark);
}

.empty-state {
  text-align: center;
  color: var(--muted);
  font-weight: 700;
  padding: 22px 18px;
}

@media (max-width: 760px) {
  .page-shell {
    padding-left: 14px;
    padding-right: 14px;
  }

  .card {
    padding: 20px 16px;
  }

  .input-row {
    flex-direction: column;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
  }

  .result-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .student-summary {
    grid-template-columns: 1fr;
  }
}
