// 1. Seleksi Elemen
const formProduksi = document.getElementById('formProduksi');
const tabelBody = document.getElementById('tabelBody');
const btnHapusSemua = document.getElementById('btnHapusSemua');
const inputCari = document.getElementById('inputCari');
const btnSort = document.getElementById('btnSort');

// Kunci LocalStorage
const STORAGE_KEY = 'DATA_PRODUKSI_INDUSTRI';

// Status sorting
let isSorted = false;

// Load data saat halaman dibuka
document.addEventListener('DOMContentLoaded', function () {
    loadDataFromStorage();
});

// Event submit form
formProduksi.addEventListener('submit', function (event) {
    event.preventDefault();

    const tanggal = document.getElementById('tanggal').value;
    const operator = document.getElementById('operator').value;
    const shift = document.getElementById('shift').value;
    const jumlah = document.getElementById('jumlah').value;

    if (jumlah <= 0) {
        alert("Jumlah produksi harus lebih dari 0!");
        return;
    }

    const dataBaru = {
        id: Date.now(),
        tanggal: tanggal,
        operator: operator,
        shift: shift,
        jumlah: parseInt(jumlah)
    };

    saveData(dataBaru);
    formProduksi.reset();

    loadDataFromStorage(inputCari.value);
});

// Event filter
inputCari.addEventListener('input', function () {
    loadDataFromStorage(this.value);
});

// Event sorting
btnSort.addEventListener('click', function () {
    isSorted = true;
    loadDataFromStorage(inputCari.value);
});

// Simpan data
function saveData(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    dataLama.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}

// Load + Filter + Sort + Render
function loadDataFromStorage(keyword = '') {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // Filter
    let dataFilter = data.filter(function (item) {
        return item.operator.toLowerCase().includes(keyword.toLowerCase());
    });

    // Sorting
    if (isSorted) {
        dataFilter.sort((a, b) => b.jumlah - a.jumlah);
    }

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

// Hapus data per item
window.hapusData = function (id) {
    if (confirm('Yakin ingin menghapus data ini?')) {
        let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        let dataBaru = data.filter(item => item.id !== id);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));

        loadDataFromStorage(inputCari.value);
    }
};

// Hapus semua data
btnHapusSemua.addEventListener('click', function () {
    if (confirm('PERINGATAN: Semua data akan dihapus!')) {
        localStorage.removeItem(STORAGE_KEY);
        loadDataFromStorage();
    }
});