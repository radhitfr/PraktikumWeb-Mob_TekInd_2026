// ==============================================================
// TUGAS PROYEK MINI: Sistem Antrian Job Shop
// ==============================================================

// a. Buat Array of Objects bernama 'antrianMesin' dengan 3 object job awal
let antrianMesin = [
  { idJob: "J01", namaProses: "Drilling", durasi: 30 },
  { idJob: "J02", namaProses: "Milling", durasi: 45 },
  { idJob: "J03", namaProses: "Turning", durasi: 60 }
];

// b. Buat function 'prosesAntrian(antrian)'
function prosesAntrian(antrian) {
  let hasilRender = "";

  antrian.forEach(function(job) {
    // c. Tampilkan pesan di Console sesuai instruksi modul
    let pesan = `Memproses Job ${job.idJob} - ${job.namaProses} selama ${job.durasi} menit`;
    console.log(pesan);

    // Menyimpan teks untuk ditampilkan ke layar HTML nanti
    hasilRender += pesan + "<br>";
  });

  return hasilRender; // Mengembalikan gabungan teks untuk HTML
}


console.log("=== SIMULASI ANTRIAN AWAL (3 JOB) ===");
prosesAntrian(antrianMesin); // Menjalankan fungsi dengan 3 job

// d. Tambahkan 1 job baru ke array dan panggil function lagi
console.log("\n=== SIMULASI PENAMBAHAN JOB BARU (POIN D) ===");
let jobOtomatis = { idJob: "J04", namaProses: "Grinding", durasi: 20 };
antrianMesin.push(jobOtomatis); // Menambahkan job ke-4
prosesAntrian(antrianMesin); // Memanggil fungsi lagi

// Fungsi ini dipanggil saat tombol "Tampilkan Antrian Saat Ini" diklik
function jalankanProses() {
  console.log("\n--- Menampilkan Antrian ke Layar HTML ---");
  let outputLayar = prosesAntrian(antrianMesin);
  document.getElementById("output").innerHTML = outputLayar;
}

// Fungsi ini dipanggil saat tombol "Tambah ke Antrian" diklik
function tambahJob() {
  let inputId = document.getElementById("idJob").value;
  let inputProses = document.getElementById("namaProses").value;
  let inputDurasi = document.getElementById("durasi").value;

  // Cek jika ada isian yang kosong
  if (!inputId || !inputProses || !inputDurasi) {
    alert("Gagal: Harap isi ID Job, Nama Proses, dan Durasi!");
    return;
  }

  // Membuat object dari inputan form
  let jobDariForm = {
    idJob: inputId,
    namaProses: inputProses,
    durasi: Number(inputDurasi)
  };

  // Memasukkan ke array
  antrianMesin.push(jobDariForm);

  // Mengosongkan form input kembali
  document.getElementById("idJob").value = "";
  document.getElementById("namaProses").value = "";
  document.getElementById("durasi").value = "";

  alert("Job " + inputId + " berhasil ditambahkan ke antrian!");
  
  // Langsung perbarui tampilan layar secara otomatis
  jalankanProses(); 
}