// 1. Fungsi dasar buatanmu
function hitungLingkaran(jariJari) {
  const luas = Math.PI * jariJari * jariJari;
  const keliling = 2 * Math.PI * jariJari;

  return {
    luasLingkaran: luas,
    kelilingLingkaran: keliling
  };
}

// 2. FUNGSI PENGHUBUNG JS KE HTML
// Fungsi ini dipanggil saat tombol HTML diklik
function hitung() {
  // Ambil nilai angka yang diketik user di layar HTML
  const inputJariJari = document.getElementById("jariJari").value;
  
  // Mencegah error jika user menekan tombol tapi kotaknya masih kosong
  if (!inputJariJari) {
    alert("Harap masukkan panjang jari-jari terlebih dahulu!");
    return;
  }

  // Mengubah teks dari input HTML menjadi tipe data Angka (Number)
  const r = Number(inputJariJari);
  
  // Jalankan fungsi hitung
  const hasil = hitungLingkaran(r);

  // === MENAMPILKAN HASIL KE LAYAR HTML ===
  // Mengisi ID "luas" dan "keliling" dengan hasil perhitungan
  document.getElementById("luas").innerText = hasil.luasLingkaran.toFixed(2);
  document.getElementById("keliling").innerText = hasil.kelilingLingkaran.toFixed(2);
  
  // === MENAMPILKAN HASIL KE CONSOLE 
  console.log("--- Perhitungan Kalkulator Berjalan ---");
  console.log("Jari-jari: " + r);
  console.log("Luas Lingkaran: " + hasil.luasLingkaran.toFixed(2)); 
  console.log("Keliling Lingkaran: " + hasil.kelilingLingkaran.toFixed(2));
}