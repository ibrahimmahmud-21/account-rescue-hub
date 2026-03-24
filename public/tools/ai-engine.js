/* ── AI Engine for Ibrahim Tools Hub ── */
const GEMINI_KEY = 'AIzaSyDNKurBK163qQN5xOBAL2Gfhy10qB3cTvs';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`;

/* Toggle state */
function isAIEnabled() {
  return localStorage.getItem('ai_toggle') === 'on';
}
function setAIEnabled(v) {
  localStorage.setItem('ai_toggle', v ? 'on' : 'off');
}

/* Cache */
function getCached(key) {
  try {
    const d = JSON.parse(localStorage.getItem('ai_cache') || '{}');
    if (d[key] && Date.now() - d[key].t < 3600000) return d[key].v;
  } catch {
    return null;
  }
  return null;
}
function setCache(key, val) {
  try {
    const d = JSON.parse(localStorage.getItem('ai_cache') || '{}');
    d[key] = { v: val, t: Date.now() };
    // Keep cache small
    const keys = Object.keys(d);
    if (keys.length > 50) delete d[keys[0]];
    localStorage.setItem('ai_cache', JSON.stringify(d));
  } catch (e) {}
}

/* Core AI call */
async function callAI(prompt) {
  const cacheKey = prompt.slice(0, 120);
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const res = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 300 }
    })
  });
  if (!res.ok) throw new Error('API error ' + res.status);
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  setCache(cacheKey, text);
  return text;
}

/* Shared copy function */
function copyText(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const t = el.innerText;
  navigator.clipboard.writeText(t).then(() => alert('Copied!')).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = t;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    alert('Copied!');
  });
}

/* Loading helpers */
function showLoading(id) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = '<div style="color:#00ffcc;text-align:center;padding:16px">⏳ Generating with AI...</div>';
}
function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = `<div style="color:#ff4444;text-align:center;padding:10px">❌ ${msg || 'AI error. Using local mode.'}</div>`;
}

/* Inject AI toggle into every tool page */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('.tool-page');
  if (!page) return;
  const toggle = document.createElement('div');
  toggle.className = 'ai-toggle-bar';
  toggle.innerHTML = `
    <label class="ai-switch">
      <span class="ai-label">🤖 Use AI</span>
      <input type="checkbox" id="aiToggle" ${isAIEnabled() ? 'checked' : ''}>
      <span class="ai-slider"></span>
    </label>`;
  page.insertBefore(toggle, page.children[1]);
  document.getElementById('aiToggle').addEventListener('change', function () {
    setAIEnabled(this.checked);
  });
});
