:root {
  --bg-top: #eef6ff;
  --bg-bottom: #f9fbff;
  --card: rgba(255, 255, 255, 0.96);
  --card-border: #dfeeff;
  --primary: #124b9f;
  --primary-dark: #0d2d62;
  --primary-soft: #edf5ff;
  --accent: #4ea1ff;
  --text: #1d2d3d;
  --muted: #5f6d82;
  --success: #1e875d;
  --error: #c03939;
  --table-head: #e9f1ff;
  --table-row-alt: #fafcff;
  --shadow: 0 18px 40px rgba(18, 52, 101, 0.12);
}

* {
  box-sizing: border-box;
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
  padding: 32px 20px 48px;
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
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  color: white;
  font-size: 1.8rem;
  font-weight: 800;
  box-shadow: 0 12px 24px rgba(18, 75, 159, 0.18);
}

.eyebrow {
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 800;
  color: var(--primary);
}

h1 {
  margin: 4px 0 0;
  font-size: clamp(2.2rem, 2vw + 1.4rem, 3.2rem);
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
  color: var(--muted);
  font-size: 1.05rem;
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
  min-height: 54px;
  padding: 0.8rem 1rem;
  border-radius: 14px;
  border: 1.5px solid #d3e4ff;
  background: white;
  color: var(--text);
  font-size: 1.03rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(78, 161, 255, 0.12);
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
  border: 1px solid #d5e8ff;
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
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  border: 1px solid transparent;
}

.selection-badge.selected {
  background: rgba(30, 135, 93, 0.1);
  color: var(--success);
  border-color: rgba(30, 135, 93, 0.2);
}

.selection-badge.not-selected {
  background: rgba(192, 57, 57, 0.08);
  color: var(--error);
  border-color: rgba(192, 57, 57, 0.18);
}

.student-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}

.summary-item {
  background: white;
  border: 1px solid #dfeeff;
  border-radius: 14px;
  padding: 14px 16px;
}

.summary-item .label {
  display: block;
  margin-bottom: 6px;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}

.summary-item strong {
  color: var(--primary-dark);
  font-size: 1.05rem;
  word-break: break-word;
}

.schedule-wrapper {
  overflow-x: auto;
  border: 1px solid #d6e4ff;
  border-radius: 16px;
}

.schedule-table {
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
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
  font-size: 1.04rem;
  font-weight: 800;
}

.schedule-table tbody tr:nth-child(even) {
  background: var(--table-row-alt);
}

.schedule-table td:first-child {
  color: var(--primary-dark);
  font-weight: 800;
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
