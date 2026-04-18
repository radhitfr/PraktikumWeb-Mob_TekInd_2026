const container    = document.getElementById('containerLaporan');
const loadingState = document.getElementById('loadingState');
const errorState   = document.getElementById('errorState');
const errorMsg     = document.getElementById('errorMsg');
const emptyState   = document.getElementById('emptyState');
const statsBar     = document.getElementById('statsBar');
const statTotal    = document.getElementById('statTotal');
const statPending  = document.getElementById('statPending');
const statProses   = document.getElementById('statProses');

const API_URL = `https://jsonplaceholder.typicode.com/posts` ;
const JUMLAH_LAPORAN = 10;
const tiketsProses = new Set();

function tampilkanState(state) {
    // reset semua state
    loadingState.classList.add('d-none');
    loadingState.classList.remove('d-flex');
    errorState.classList.add('d-none');
    emptyState.classList.add('d-none');

    if (state === 'loading') {
        loadingState.classList.remove('d-none');
        loadingState.classList.add('d-flex');
    } 
    else if (state === 'error') {
        errorState.classList.remove('d-none');
    } 
    else if (state === 'empty') {
        emptyState.classList.remove('d-none');
    }
    // state 'data' = semua disembunyikan (default)
}

/* =========================
   FETCH DATA
========================= */
async function muatDataLaporan() {
    container.innerHTML = '';
    statsBar.classList.add('d-none');
    tiketsProses.clear();

    tampilkanState('loading');

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Gagal mengambil data (HTTP ${response.status})`);
        }

        const data = await response.json();

        // Ambil 10 data terbaru
        const laporan = data.slice(-JUMLAH_LAPORAN).reverse();

        if (laporan.length === 0) {
            tampilkanState('empty');
            return;
        }

        renderData(laporan);
        tampilkanStatistik(laporan.length);

        statsBar.classList.remove('d-none');

        tampilkanState('data');

    } catch (error) {
        errorMsg.textContent = error.message;
        tampilkanState('error');
    }
}

/* =========================
   RENDER DATA
========================= */
function renderData(data) {
    container.innerHTML = '';

    data.forEach((laporan) => {
        const judul = sanitasi(laporan.title);
        const deskripsi = sanitasi(laporan.body);
        const formatId = `WO-${String(laporan.id).padStart(3, '0')}`;

        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 col-xl-3';

        col.innerHTML = `
            <div class="incident-card" id="card-${laporan.id}">
                
                <div class="card-header-custom">
                    <span class="wo-id">
                        <i class="bi bi-upc-scan me-1"></i> ${formatId}
                    </span>
                    <div id="badgeContainer-${laporan.id}">
                        <span class="badge-ind badge-ind-pending">
                            <i class="bi bi-exclamation-triangle"></i> GANGGUAN
                        </span>
                    </div>
                </div>
                
                <div class="card-body-custom">
                    <h5 class="card-title-custom">${judul}</h5>
                    <p class="card-desc-custom">${deskripsi}</p>
                </div>
                
                <div class="card-footer-custom">
                    <button 
                        class="btn btn-tindak btn-tindak-pending"
                        id="btn-${laporan.id}"
                        onclick="tindakLanjut(${laporan.id})">
                        <i class="bi bi-wrench"></i> Tindak Lanjut
                    </button>
                </div>

            </div>
        `;

        container.appendChild(col);
    });
}

function tindakLanjut(id) {
    alert("Tiket ID sedang diproses oleh Tim Maintenance");

    if (!tiketsProses.has(id)) {
        tiketsProses.add(id);

        const card = document.getElementById(`card-${id}`);
        if (card) card.classList.add('card-diproses');

        const badge = document.getElementById(`badgeContainer-${id}`);
        if (badge) {
            badge.innerHTML = `
                <span class="badge-ind badge-ind-proses">
                    <i class="bi bi-check2-all"></i> SEDANG DIPROSES
                </span>
            `;
        }

        const btn = document.getElementById(`btn-${id}`);
        if (btn) {
            btn.classList.remove('btn-tindak-pending');
            btn.classList.add('btn-tindak-done');
            btn.innerHTML = `<i class="bi bi-lock-fill"></i> Sedang Ditangani`;
        }

        perbaruiStatistik();
    }
}

function tampilkanStatistik(total) {
    statTotal.textContent = total;
    statPending.textContent = total;
    statProses.textContent = 0;
}

function perbaruiStatistik() {
    const proses = tiketsProses.size;
    const total = parseInt(statTotal.textContent);

    statProses.textContent = proses;
    statPending.textContent = total - proses;
}

function sanitasi(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
document.addEventListener("DOMContentLoaded", muatDataLaporan);