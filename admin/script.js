const SK = 'eea_v4';
let events = [];
let currentEvent = null;
let newItems = [];
let evFilter = 'all';
const BARS = ['#7B1C1C', '#C9A84C', '#2D6A4F', '#4A1D96', '#1E3A5F', '#7C3D0D', '#2D4A1A'];

function fmt(n) { return '৳' + Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }
function genId() { const d = new Date(); const r = Math.random().toString(36).slice(2, 6).toUpperCase(); return 'INV-' + d.getFullYear().toString().slice(2) + (d.getMonth() + 1).toString().padStart(2, '0') + d.getDate().toString().padStart(2, '0') + '-' + r }
function save() { try { localStorage.setItem(SK, JSON.stringify({ events })) } catch (e) { } }
function load() { try { const d = localStorage.getItem(SK); if (d) { const p = JSON.parse(d); events = p.events || []; } } catch (e) { events = []; } }
function notif(msg, ok = true) { const el = document.getElementById('notif'); document.getElementById('nmsg').textContent = msg; document.getElementById('ndot').style.background = ok ? '#C9A84C' : '#DC2626'; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2600); }

function sparkleAt(x, y) { for (let i = 0; i < 6; i++) { const s = document.createElement('div'); s.className = 'sparkle'; s.style.left = (x + Math.random() * 40 - 20) + 'px'; s.style.top = (y + Math.random() * 40 - 20) + 'px'; s.style.animationDelay = (i * .08) + 's'; document.body.appendChild(s); setTimeout(() => s.remove(), 700); } }
document.addEventListener('click', e => { if (e.target.closest('.btn-save') || e.target.closest('.btn-add-item')) { sparkleAt(e.clientX, e.clientY); } });

function switchTab(tab) {
    ['events', 'add', 'detail'].forEach(v => {
        const el = document.getElementById('view-' + v);
        el.style.display = v === tab ? 'block' : 'none';
        if (v === tab) { el.style.animation = 'none'; el.offsetHeight; el.style.animation = 'fadeUp .45s cubic-bezier(.22,1,.36,1) both'; }
    });
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    const tb = document.getElementById('tab-' + tab); if (tb) tb.classList.add('active');
    if (tab === 'add') { newItems = []; renderNewItems(); document.getElementById('new-inv-id').textContent = genId(); updatePreview(); }
    if (tab === 'events') { renderAll(); }
}

function filterEv(s, btn) { evFilter = s; document.querySelectorAll('.chip').forEach(b => b.classList.remove('active')); btn.classList.add('active'); renderEventsList(); }

function addItem() {
    const name = document.getElementById('ni-name').value.trim();
    const qty = parseFloat(document.getElementById('ni-qty').value) || 1;
    const price = parseFloat(document.getElementById('ni-price').value) || 0;
    const unit = document.getElementById('ni-unit').value.trim() || 'pcs';
    if (!name) { notif('Enter item name', false); document.getElementById('ni-name').focus(); return; }
    newItems.push({ id: Date.now() + Math.random(), name, qty, price, unit, total: qty * price });
    document.getElementById('ni-name').value = ''; document.getElementById('ni-price').value = ''; document.getElementById('ni-unit').value = ''; document.getElementById('ni-qty').value = '1';
    renderNewItems(); updatePreview(); document.getElementById('ni-name').focus();
}

function removeNewItem(id) { newItems = newItems.filter(i => i.id !== id); renderNewItems(); updatePreview(); }

function renderNewItems() {
    const tb = document.getElementById('new-items-tbody');
    const sub = newItems.reduce((s, i) => s + (i.total || 0), 0);
    document.getElementById('item-count-new').textContent = newItems.length + ' items • ' + fmt(sub);
    const totBox = document.getElementById('new-totals');
    if (newItems.length === 0) { tb.innerHTML = '<tr><td colspan="6" class="empty-st" style="padding:1.5rem">No items yet — add items above</td></tr>'; totBox.style.display = 'none'; return; }
    tb.innerHTML = newItems.map((i, idx) => `<tr style="animation:rowIn .3s ${(idx * .04).toFixed(2)}s both">
    <td style="font-weight:500">${i.name}</td><td>${i.qty}</td>
    <td style="color:var(--text-muted)">${i.unit}</td>
    <td style="font-family:'DM Mono',monospace">${fmt(i.price)}</td>
    <td style="font-weight:700;font-family:'DM Mono',monospace;color:var(--maroon)">${fmt(i.total)}</td>
    <td><button class="del-btn" onclick="removeNewItem(${i.id})"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10"/></svg></button></td>
  </tr>`).join('');
    totBox.style.display = 'block';
    document.getElementById('nt-sub').textContent = fmt(sub);
    document.getElementById('nt-total').textContent = fmt(sub);
}

function updatePreview() {
    const el = document.getElementById('quick-preview');
    const name = document.getElementById('i-event').value.trim();
    const income = parseFloat(document.getElementById('i-income').value) || 0;
    const paid = parseFloat(document.getElementById('i-paid').value) || 0;
    const sub = newItems.reduce((s, i) => s + (i.total || 0), 0);
    const pl = income - sub;
    if (!name && !sub) { el.innerHTML = '<div style="text-align:center;color:var(--text-muted);font-size:12px;padding:.5rem 0">Fill event details to preview</div>'; return; }
    el.innerHTML = `
    <div style="font-family:'Cormorant Garamond',serif;font-size:15px;font-weight:700;color:var(--maroon);margin-bottom:10px">${name || 'Untitled Event'}</div>
    <div class="fin-row"><span class="fin-lbl">Total Items</span><span class="fin-val">${newItems.length}</span></div>
    <div class="fin-row"><span class="fin-lbl">Total Expense</span><span class="fin-val r">${fmt(sub)}</span></div>
    <div class="fin-row"><span class="fin-lbl">Quoted</span><span class="fin-val g">${fmt(income)}</span></div>
    <div class="fin-row"><span class="fin-lbl">Paid</span><span class="fin-val g">${fmt(paid)}</span></div>
    <div class="fin-row"><span class="fin-lbl">Due</span><span class="fin-val" style="color:var(--warn)">${fmt(Math.max(0, income - paid))}</span></div>
    <div class="fin-row"><span class="fin-lbl" style="font-weight:600">Net P/L</span><span class="fin-val" style="color:${pl >= 0 ? 'var(--success)' : 'var(--maroon)'}">${(pl >= 0 ? '+' : '') + fmt(Math.abs(pl))}</span></div>`;
}

['i-event', 'i-income', 'i-paid'].forEach(id => { const el = document.getElementById(id); if (el) el.addEventListener('input', updatePreview); });

function saveEvent() {
    const name = document.getElementById('i-event').value.trim();
    const date = document.getElementById('i-date').value;
    if (!name || !date) { notif('Fill Event Name & Date', false); return; }
    const income = parseFloat(document.getElementById('i-income').value) || 0;
    const paid = parseFloat(document.getElementById('i-paid').value) || 0;
    const expense = newItems.reduce((s, i) => s + (i.total || 0), 0);
    events.unshift({
        id: document.getElementById('new-inv-id').textContent,
        name, date,
        venue: document.getElementById('i-venue').value.trim(),
        client: document.getElementById('i-client').value.trim(),
        phone: document.getElementById('i-phone').value.trim(),
        cat: document.getElementById('i-cat').value,
        memo: document.getElementById('i-memo').value.trim(),
        income, paid, expense,
        due: Math.max(0, income - paid),
        status: document.getElementById('i-status').value,
        notes: document.getElementById('i-notes').value.trim(),
        items: [...newItems],
        pl: income - expense,
        createdAt: new Date().toISOString()
    });
    save(); newItems = [];
    ['i-event', 'i-venue', 'i-client', 'i-phone', 'i-notes', 'i-memo'].forEach(id => document.getElementById(id).value = '');
    ['i-income', 'i-paid'].forEach(id => document.getElementById(id).value = '');
    renderAll(); switchTab('events'); notif('Event saved successfully!');
}

function openEvent(id) {
    currentEvent = events.find(e => e.id === id); if (!currentEvent) return;
    ['events', 'add'].forEach(v => document.getElementById('view-' + v).style.display = 'none');
    const dv = document.getElementById('view-detail'); dv.style.display = 'block'; dv.style.animation = 'none'; dv.offsetHeight; dv.style.animation = 'fadeUp .45s cubic-bezier(.22,1,.36,1) both';
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    renderDetail();
}

function renderDetail() {
    const ev = currentEvent;
    document.getElementById('d-title').textContent = ev.name;
    document.getElementById('d-sub').textContent = ev.date + (ev.venue ? ' • ' + ev.venue : '') + (ev.client ? ' • ' + ev.client : '');
    document.getElementById('d-inv-id').textContent = ev.id;
    document.getElementById('ed-income').value = ev.income || 0;
    document.getElementById('ed-paid').value = ev.paid || 0;
    document.getElementById('ed-status').value = ev.status || 'Due';
    const info = [['Client', ev.client || '—'], ['Phone', ev.phone || '—'], ['Venue', ev.venue || '—'], ['Cash Memo', ev.memo || '—'], ['Category', ev.cat], ['Status', ev.status], ['Notes', ev.notes || '—']];
    document.getElementById('d-info-panel').innerHTML = info.map(([l, v]) => `<div class="info-row"><span class="info-lbl">${l}</span><span class="info-val">${v}</span></div>`).join('');
    renderDetailItems();
}

function renderDetailItems() {
    const ev = currentEvent; const items = ev.items || [];
    const sub = items.reduce((s, i) => s + (i.total || 0), 0);
    ev.expense = sub; ev.pl = (ev.income || 0) - sub; ev.due = Math.max(0, (ev.income || 0) - (ev.paid || 0));
    document.getElementById('d-item-count').textContent = items.length + ' items • ' + fmt(sub);
    document.getElementById('d-items-tbody').innerHTML = items.length === 0
        ? '<tr><td colspan="6" class="empty-st" style="padding:1.5rem">No items</td></tr>'
        : items.map((i, idx) => `<tr style="animation:rowIn .3s ${(idx * .04).toFixed(2)}s both">
      <td style="font-weight:500">${i.name}</td><td>${i.qty}</td>
      <td style="color:var(--text-muted)">${i.unit}</td>
      <td style="font-family:'DM Mono',monospace">${fmt(i.price)}</td>
      <td style="font-weight:700;font-family:'DM Mono',monospace;color:var(--maroon)">${fmt(i.total)}</td>
      <td><button class="del-btn" onclick="delDetailItem(${i.id})"><svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10"/></svg></button></td>
    </tr>`).join('');
    document.getElementById('dt-sub').textContent = fmt(sub);
    document.getElementById('dt-income').textContent = fmt(ev.income);
    document.getElementById('dt-paid').textContent = fmt(ev.paid);
    document.getElementById('dt-due').textContent = fmt(ev.due);
    const plEl = document.getElementById('dt-pl');
    plEl.textContent = (ev.pl >= 0 ? '+' : '') + fmt(Math.abs(ev.pl));
    plEl.className = 'tot-grand-val ' + (ev.pl >= 0 ? 'g' : 'r');
    save(); renderStats();
}

function addItemExist() {
    const name = document.getElementById('di-name').value.trim();
    const qty = parseFloat(document.getElementById('di-qty').value) || 1;
    const price = parseFloat(document.getElementById('di-price').value) || 0;
    const unit = document.getElementById('di-unit').value.trim() || 'pcs';
    if (!name) { notif('Enter item name', false); return; }
    if (!currentEvent.items) currentEvent.items = [];
    currentEvent.items.push({ id: Date.now() + Math.random(), name, qty, price, unit, total: qty * price });
    document.getElementById('di-name').value = ''; document.getElementById('di-price').value = ''; document.getElementById('di-unit').value = ''; document.getElementById('di-qty').value = '1';
    renderDetailItems(); notif('Item added!'); document.getElementById('di-name').focus();
}

function delDetailItem(id) { currentEvent.items = currentEvent.items.filter(i => i.id !== id); renderDetailItems(); }

function updateFin() {
    currentEvent.income = parseFloat(document.getElementById('ed-income').value) || 0;
    currentEvent.paid = parseFloat(document.getElementById('ed-paid').value) || 0;
    currentEvent.status = document.getElementById('ed-status').value;
    renderDetailItems(); notif('Updated!');
}

function delCurrentEv() { events = events.filter(e => e.id !== currentEvent.id); save(); currentEvent = null; renderAll(); switchTab('events'); notif('Event deleted'); }
function clearAll() { if (!events.length) { notif('Nothing to clear', false); return; } events = []; save(); renderAll(); notif('Cleared'); }

function renderAll() { renderEventsList(); renderStats(); renderBreakdown(); renderFinSummary(); }

function renderEventsList() {
    const el = document.getElementById('events-list');
    document.getElementById('ev-count').textContent = events.length + ' events';
    let list = evFilter === 'all' ? events : events.filter(e => e.status === evFilter);
    if (!list.length) { el.innerHTML = '<div class="empty-st">No events found</div>'; return; }
    el.innerHTML = list.map((ev, i) => {
        const sp = ev.status === 'Paid' ? 'pill-paid' : ev.status === 'Due' ? 'pill-due' : 'pill-partial';
        return `<div class="ev-card" style="animation:cardIn .35s ${(i * .06).toFixed(2)}s both" onclick="openEvent('${ev.id}')">
      <div style="display:flex;justify-content:space-between;align-items:flex-start">
        <span class="ev-name">${ev.name}</span><span class="pill ${sp}">${ev.status}</span>
      </div>
      <div style="font-size:10px;color:var(--text-muted);margin-top:3px">${ev.date}${ev.venue ? ' • ' + ev.venue : ''}${ev.client ? ' • ' + ev.client : ''}</div>
      <div class="ev-meta">
        <span class="pill pill-cat">${ev.cat}</span>
        <span style="font-size:10px;color:var(--text-muted)">${ev.items?.length || 0} items</span>
        <span style="font-size:11px;font-weight:700;font-family:'DM Mono',monospace;color:var(--maroon)">${fmt(ev.expense || 0)}</span>
        <span class="inv-badge">${ev.id}</span>
      </div>
    </div>`;
    }).join('');
}

function renderStats() {
    const tE = events.reduce((s, e) => s + (e.expense || 0), 0);
    const tI = events.reduce((s, e) => s + (e.income || 0), 0);
    const tP = events.reduce((s, e) => s + (e.paid || 0), 0);
    const tD = events.reduce((s, e) => s + (e.due || 0), 0);
    const pl = tI - tE;
    document.getElementById('s-ev').textContent = events.length;
    document.getElementById('s-exp').textContent = fmt(tE);
    document.getElementById('s-inc').textContent = fmt(tI);
    document.getElementById('s-paid').textContent = fmt(tP);
    document.getElementById('s-due').textContent = fmt(tD);
    const plEl = document.getElementById('s-pl'); plEl.textContent = fmt(Math.abs(pl));
    plEl.className = 'sc-v ' + (pl >= 0 ? 'g' : 'r');
    document.getElementById('s-pl-s').textContent = pl >= 0 ? 'Profit' : 'Loss';
}

function renderBreakdown() {
    const el = document.getElementById('cat-bd');
    if (!events.length) { el.innerHTML = '<div style="text-align:center;color:var(--text-muted);font-size:12px;padding:.5rem 0">No data</div>'; return; }
    const t = {}; events.forEach(e => { t[e.cat] = (t[e.cat] || 0) + (e.expense || 0); });
    const max = Math.max(...Object.values(t));
    el.innerHTML = Object.entries(t).sort((a, b) => b[1] - a[1]).map(([cat, amt], i) => `
    <div>
      <div style="display:flex;justify-content:space-between;margin-bottom:2px">
        <span style="font-size:12px;color:var(--text-primary)">${cat}</span>
        <span style="font-size:12px;font-weight:600;font-family:'DM Mono',monospace;color:var(--text-primary)">${fmt(amt)}</span>
      </div>
      <div class="bar-track"><div class="bar-fill" style="width:0%;background:${BARS[i % BARS.length]}" data-t="${max > 0 ? Math.round(amt / max * 100) : 0}"></div></div>
    </div>`).join('');
    setTimeout(() => document.querySelectorAll('.bar-fill').forEach(b => b.style.width = b.dataset.t + '%'), 80);
}

function renderFinSummary() {
    const el = document.getElementById('fin-sum');
    if (!events.length) { el.innerHTML = '<div style="text-align:center;color:var(--text-muted);font-size:12px;padding:.5rem 0">No data</div>'; return; }
    const tE = events.reduce((s, e) => s + (e.expense || 0), 0);
    const tI = events.reduce((s, e) => s + (e.income || 0), 0);
    const tP = events.reduce((s, e) => s + (e.paid || 0), 0);
    const tD = events.reduce((s, e) => s + (e.due || 0), 0);
    const pl = tI - tE;
    const rows = [['Total Expense', fmt(tE), 'r'], ['Total Income', fmt(tI), 'g'], ['Collected', fmt(tP), 'g'], ['Outstanding', fmt(tD), tD > 0 ? 'a' : ''],
    ['Paid events', events.filter(e => e.status === 'Paid').length + ' events', 'g'],
    ['Due events', events.filter(e => e.status === 'Due').length + ' events', events.filter(e => e.status === 'Due').length ? 'r' : ''],
    ['Partial', events.filter(e => e.status === 'Partial').length + ' events', 'a']];
    el.innerHTML = rows.map(([l, v, c]) => `<div class="fin-row"><span class="fin-lbl">${l}</span><span class="fin-val" style="color:${c === 'g' ? 'var(--success)' : c === 'r' ? 'var(--maroon)' : c === 'a' ? 'var(--warn)' : 'var(--text-primary)'}">${v}</span></div>`).join('')
        + `<div class="fin-row"><span style="font-family:'Cormorant Garamond',serif;font-size:14px;font-weight:700;color:var(--text-primary)">Net ${pl >= 0 ? 'Profit' : 'Loss'}</span><span style="font-family:'DM Mono',monospace;font-size:14px;font-weight:700;color:${pl >= 0 ? 'var(--success)' : 'var(--maroon)'}">${fmt(Math.abs(pl))}</span></div>`;
}

/* ══ PDF EXPORT ══ */
function exportInvoice(ev) {
    if (!ev) { notif('Open an event first', false); return; }
    if (typeof window.jspdf === 'undefined') { notif('PDF library loading, try again', false); return; }
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        const W = 210, M = 16, CW = W - M * 2;

        /* ── HEADER BAND ── */
        doc.setFillColor(26, 14, 14); doc.rect(0, 0, W, 48, 'F');
        doc.setFillColor(123, 28, 28); doc.rect(0, 38, W, 10, 'F');

        /* logo gem shape */
        doc.setFillColor(201, 168, 76);
        doc.setDrawColor(232, 201, 122); doc.setLineWidth(.5);
        const cx = M + 8, cy = 18;
        [[cx, cy - 10], [cx + 8, cy - 4], [cx + 8, cy + 4], [cx, cy + 10], [cx - 8, cy + 4], [cx - 8, cy - 4]].forEach((p, i, a) => {
            const n = a[(i + 1) % a.length];
            if (i === 0) doc.lines([[n[0] - p[0], n[1] - p[1]]], p[0], p[1]);
        });
        doc.setFillColor(123, 28, 28); doc.triangle(cx, cy - 5, cx + 5, cy + 2, cx - 5, cy + 2, 'FD');

        doc.setFontSize(22); doc.setFont('helvetica', 'bold'); doc.setTextColor(232, 201, 122);
        doc.text('INVOICE', M + 20, 16);
        doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(160, 140, 120);
        doc.text('Event Expense Record', M + 20, 22);

        /* right side of header */
        doc.setFontSize(8); doc.setTextColor(160, 140, 120); doc.text('Invoice ID', W - M - 50, 10);
        doc.setFontSize(11); doc.setFont('helvetica', 'bold'); doc.setTextColor(232, 201, 122); doc.text(ev.id, W - M - 50, 17);
        doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(160, 140, 120);
        doc.text('Date: ' + ev.date, W - M - 50, 23);
        const sp = ev.status;
        doc.setFillColor(sp === 'Paid' ? [45, 106, 79] : sp === 'Due' ? [123, 28, 28] : [139, 105, 20]);
        doc.roundedRect(W - M - 30, 27, 28, 7, 2, 2, 'F');
        doc.setFontSize(8); doc.setFont('helvetica', 'bold'); doc.setTextColor(255, 255, 255); doc.text(sp, W - M - 16, 32, { align: 'center' });

        /* gold rule in band */
        doc.setDrawColor(201, 168, 76); doc.setLineWidth(.3); doc.line(M, 38, W - M, 38);

        /* ── EVENT INFO BLOCK ── */
        let y = 56;
        doc.setFillColor(250, 247, 242); doc.roundedRect(M, y, CW, 38, 4, 4, 'F');
        doc.setDrawColor(226, 217, 200); doc.setLineWidth(.5); doc.roundedRect(M, y, CW, 38, 4, 4, 'S');
        doc.setFillColor(123, 28, 28); doc.rect(M, y, 3, 38, 'F');

        doc.setFontSize(14); doc.setFont('helvetica', 'bold'); doc.setTextColor(123, 28, 28);
        doc.text(ev.name, M + 8, y + 10);
        doc.setFontSize(8); doc.setFont('helvetica', 'normal'); doc.setTextColor(107, 68, 68);

        const leftInfo = []; const rightInfo = [];
        if (ev.venue) leftInfo.push(['Venue', ev.venue]);
        if (ev.client) leftInfo.push(['Client', ev.client]);
        if (ev.phone) leftInfo.push(['Phone', ev.phone]);
        if (ev.cat) rightInfo.push(['Category', ev.cat]);
        if (ev.memo) rightInfo.push(['Cash Memo', ev.memo]);

        leftInfo.forEach((p, i) => {
            doc.setTextColor(140, 110, 110); doc.text(p[0] + ':', M + 8, y + 18 + (i * 7));
            doc.setTextColor(26, 14, 14); doc.text(p[1], M + 28, y + 18 + (i * 7));
        });
        rightInfo.forEach((p, i) => {
            doc.setTextColor(140, 110, 110); doc.text(p[0] + ':', M + CW / 2 + 4, y + 18 + (i * 7));
            doc.setTextColor(26, 14, 14); doc.text(p[1], M + CW / 2 + 24, y + 18 + (i * 7));
        });

        /* ── ITEMS TABLE ── */
        y += 46;
        doc.setFontSize(10); doc.setFont('helvetica', 'bold'); doc.setTextColor(123, 28, 28);
        doc.text('Expense Items', M, y);
        doc.setDrawColor(201, 168, 76); doc.setLineWidth(.8); doc.line(M, y + 1.5, M + 35, y + 1.5);
        y += 7;

        const items = ev.items || [];
        if (items.length > 0) {
            doc.autoTable({
                startY: y,
                head: [['#', 'Item Description', 'Qty', 'Unit', 'Unit Price (৳)', 'Total (৳)']],
                body: items.map((it, i) => [i + 1, it.name, it.qty, it.unit || 'pcs',
                Number(it.price || 0).toLocaleString('en-US', { minimumFractionDigits: 2 }),
                Number(it.total || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })]),
                headStyles: { fillColor: [26, 14, 14], textColor: [232, 201, 122], fontStyle: 'bold', fontSize: 9, cellPadding: 5 },
                bodyStyles: { fontSize: 9, textColor: [26, 14, 14], cellPadding: 4.5 },
                alternateRowStyles: { fillColor: [250, 247, 242] },
                columnStyles: {
                    0: { cellWidth: 10, halign: 'center' },
                    1: { cellWidth: 72 },
                    2: { cellWidth: 14, halign: 'center' },
                    3: { cellWidth: 18, halign: 'center' },
                    4: { cellWidth: 32, halign: 'right' },
                    5: { cellWidth: 32, halign: 'right', fontStyle: 'bold' }
                },
                margin: { left: M, right: M },
                tableLineColor: [226, 217, 200], tableLineWidth: .3,
                didDrawPage: () => {
                    doc.setFontSize(7); doc.setFont('helvetica', 'normal'); doc.setTextColor(180);
                    doc.text('EventXpense Portal', M, 295);
                    doc.text(ev.id, W - M, 295, { align: 'right' });
                }
            });
            y = doc.lastAutoTable.finalY + 10;
        } else {
            doc.setFontSize(9); doc.setTextColor(160); doc.text('No items recorded.', M, y + 8); y += 18;
        }

        /* ── FINANCIAL SUMMARY ── */
        const sub = items.reduce((s, i) => s + (i.total || 0), 0);
        const TW = 84, TX = W - M - TW;
        const due = Math.max(0, (ev.income || 0) - (ev.paid || 0));
        const pl = (ev.income || 0) - sub;
        const finRows = [
            ['Item Subtotal', sub, false],
            ['Quoted / Budget', ev.income || 0, false],
            ['Amount Paid', ev.paid || 0, false],
            ['Amount Due', due, due > 0]
        ];

        if (y > 230) { doc.addPage(); y = 20; }

        doc.setFillColor(250, 247, 242); doc.roundedRect(TX, y, TW, finRows.length * 9 + 22, 4, 4, 'F');
        doc.setDrawColor(226, 217, 200); doc.setLineWidth(.4); doc.roundedRect(TX, y, TW, finRows.length * 9 + 22, 4, 4, 'S');
        let fy = y + 7;
        finRows.forEach(([l, v, warn]) => {
            doc.setFontSize(8); doc.setFont('helvetica', 'normal');
            doc.setTextColor(107, 68, 68); doc.text(l, TX + 5, fy);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(warn ? [150, 28, 28] : l === 'Amount Paid' ? [45, 106, 79] : [26, 14, 14]);
            doc.text('৳ ' + Number(v).toLocaleString('en-US', { minimumFractionDigits: 2 }), TX + TW - 5, fy, { align: 'right' });
            fy += 9;
        });
        /* NET P/L box */
        doc.setFillColor(pl >= 0 ? [45, 106, 79] : [123, 28, 28]);
        doc.roundedRect(TX, fy - 1, TW, 12, 2, 2, 'F');
        doc.setFontSize(9); doc.setFont('helvetica', 'bold'); doc.setTextColor(255, 255, 255);
        doc.text('Net ' + (pl >= 0 ? 'Profit' : 'Loss'), TX + 5, fy + 7);
        doc.text((pl >= 0 ? '+ ' : '- ') + '৳ ' + Number(Math.abs(pl)).toLocaleString('en-US', { minimumFractionDigits: 2 }), TX + TW - 5, fy + 7, { align: 'right' });

        /* notes */
        if (ev.notes) {
            doc.setFontSize(8); doc.setFont('helvetica', 'bold'); doc.setTextColor(123, 28, 28);
            doc.text('Notes', M, y + 5);
            doc.setFont('helvetica', 'normal'); doc.setTextColor(107, 68, 68);
            const lines = doc.splitTextToSize(ev.notes, TX - M - 8);
            doc.text(lines, M, y + 13);
        }

        /* ── FOOTER ── */
        const pH = 297;
        doc.setFillColor(26, 14, 14); doc.rect(0, pH - 16, W, 16, 'F');
        doc.setDrawColor(201, 168, 76); doc.setLineWidth(.4); doc.line(0, pH - 16, W, pH - 16);
        doc.setFontSize(7); doc.setFont('helvetica', 'normal'); doc.setTextColor(201, 168, 76);
        doc.text('Generated by EventXpense Admin Portal', M, pH - 7);
        doc.text('Generated: ' + new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }), W - M, pH - 7, { align: 'right' });

        doc.save('Invoice-' + ev.id + '.pdf');
        notif('Invoice exported!');
    } catch (err) { notif('PDF error: ' + err.message, false); console.error(err); }
}

document.getElementById('i-date').value = new Date().toISOString().slice(0, 10);
document.getElementById('new-inv-id').textContent = genId();
load(); renderAll();