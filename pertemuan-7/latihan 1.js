// 1. Seleksi Elemen
const formProduksi = document.getElementById('formProduksi');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');
const inputCari = document.getElementById('inputCari');

// Kunci untuk LocalStorage
const STORAGE_KEY = 'DATA_PRODUKSI_INDUSTRI';

// Fungsi Load Data saat halaman dibuka
document.addEventListener('DOMContentLoaded', function () {
    loadDataFromStorage();
});

// 2. Event Listener: Submit Form
formProduksi.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah refresh halaman

    // Ambil Value dari Form
    const tanggal = document.getElementById('tanggal').value;
    const operator = document.getElementById('operator').value;
    const shift = document.getElementById('shift').value;
    const jumlah = document.getElementById('jumlah').value;

    // Validasi Sederhana (JavaScript)
    if (jumlah <= 0) {
        alert("Jumlah produksi harus lebih dari 0!");
        return;
    }

    // Buat Object Data
    const dataBaru = {
        id: Date.now(), // ID unik berdasarkan waktu
        tanggal: tanggal,
        operator: operator,
        shift: shift,
        jumlah: parseInt(jumlah)
    };

    // Simpan ke LocalStorage
    saveData(dataBaru);

    // Reset Form
    formProduksi.reset();

    // Refresh Tampilan Tabel
    loadDataFromStorage(inputCari.value);
});

// 3. Event Listener: Filter/Pencarian
inputCari.addEventListener('input', function () {
    loadDataFromStorage(this.value);
});

// 4. Fungsi Simpan ke LocalStorage
function saveData(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    dataLama.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}

// 5. Fungsi Baca, Filter & Render Tabel
function loadDataFromStorage(keyword = '') {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // Filter berdasarkan nama operator
    let dataFilter = data.filter(function (item) {
        return item.operator.toLowerCase().includes(keyword.toLowerCase());
    });

    tabelBody.innerHTML = '';

    dataFilter.forEach(function (item) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.tanggal}</td>
            <td>${item.operator}</td>
            <td>${item.shift}</td>
            <td>${item.jumlah}</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="hapusData(${item.id})">
                    Hapus
                </button>
            </td>
        `;

        tabelBody.appendChild(row);
    });
}

// 6. Fungsi Hapus Data Spesifik
window.hapusData = function (id) {
    if (confirm('Yakin ingin menghapus log ini?')) {
        let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        let dataBaru = data.filter(item => item.id !== id);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));

        loadDataFromStorage(inputCari.value);
    }
};

// 7. Event Hapus Semua
btnHapusSemua.addEventListener('click', function () {
    if (confirm('PERINGATAN: Semua data akan dihapus permanen!')) {
        localStorage.removeItem(STORAGE_KEY);
        loadDataFromStorage();
    }
});