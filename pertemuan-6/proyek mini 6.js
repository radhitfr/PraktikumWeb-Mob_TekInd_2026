
const inputDaya = document.getElementById("inputDaya");
const inputJam = document.getElementById("inputJam");
const tampilHasil = document.getElementById("hasil");

// Fungsi perhitungan
function prosesPerhitungan() {
    // (default 0 kalau kosong)
    const nilaiDaya = Number(inputDaya.value) || 0;
    const nilaiJam = Number(inputJam.value) || 0;

    // Hitung energi (kWh)
    const totalEnergi = (nilaiDaya * nilaiJam) / 1000;

    // Hitung biaya
    const totalBiaya = totalEnergi * 1500;

    // Tampilkan ke UI
    tampilHasil.innerHTML = `
        Total Energi: ${totalEnergi.toFixed(2)} kWh <br>
        Estimasi Biaya: Rp ${totalBiaya.toLocaleString("id-ID")}
    `;
}

// Event real-time (tanpa tombol)
inputDaya.addEventListener("input", prosesPerhitungan);
inputJam.addEventListener("input", prosesPerhitungan);