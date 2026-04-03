// Seleksi Elemen
const formAudit = document.getElementById('formAudit');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');

const STORAGE_KEY = 'DATA_AUDIT_5S';

// Load data saat halaman dibuka
document.addEventListener('DOMContentLoaded', function () {
    loadData();
});

// Event submit
formAudit.addEventListener('submit', function (e) {
    e.preventDefault();

    const auditor = document.getElementById('auditor').value;

    const checklist = [
        document.getElementById('seiri').checked,
        document.getElementById('seiton').checked,
        document.getElementById('seiso').checked,
        document.getElementById('seiketsu').checked,
        document.getElementById('shitsuke').checked
    ];

    // Hitung jumlah checklist yang dicentang
    const jumlahCeklis = checklist.filter(item => item).length;

    // Hitung skor (%)
    const skor = (jumlahCeklis / 5) * 100;

    const dataBaru = {
        tanggal: new Date().toLocaleDateString(),
        auditor: auditor,
        skor: skor
    };

    saveData(dataBaru);

    formAudit.reset();

    loadData();
});

// Simpan ke LocalStorage
function saveData(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    dataLama.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}

// Load & tampilkan data
function loadData() {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    tabelBody.innerHTML = '';

    data.forEach(function (item) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.tanggal}</td>
            <td>${item.auditor}</td>
            <td>${item.skor}%</td>
        `;

        tabelBody.appendChild(row);
    });
}

// Hapus semua data
btnHapusSemua.addEventListener('click', function () {
    if (confirm('Semua data audit akan dihapus!')) {
        localStorage.removeItem(STORAGE_KEY);
        loadData();
    }
});