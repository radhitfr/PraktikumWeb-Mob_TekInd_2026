// Latihan 2 - Menghitung jumlah kemunculan cacat C-001

let dataCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"];

// 1. FUNGSI MENAMPILKAN ARRAY KE HTML (Otomatis jalan saat web dibuka)
function renderDataLayar() {
    let wadah = document.getElementById("dataList");
    let htmlBadges = "";

    dataCacat.forEach(function(kode) {
        let kelasCSS = (kode === "C-001") ? "badge alert" : "badge normal";
        htmlBadges += `<span class="${kelasCSS}">${kode}</span>`;
    });

    wadah.innerHTML = htmlBadges;
}

// Panggil fungsi render agar data langsung muncul
renderDataLayar();

// 2. FUNGSI ANALISIS DATA (Jalan saat tombol diklik)
function analisisData() {
    console.log("Total data cacat: " + dataCacat.length);
    console.log("=== Detail Data Cacat ===");

    dataCacat.forEach(function(kode, index){
        console.log("Data ke-" + (index + 1) + " : " + kode);
    });

    let hitung = 0;
    // Logika pencarian C-001 menggunakan if dan counter
    for(let i = 0; i < dataCacat.length; i++){
        if(dataCacat[i] === "C-001"){
            hitung++;
        }
    }

    console.log("Jumlah kemunculan cacat C-001 adalah: " + hitung + " kali");
    // ==============================================

    document.getElementById("hasilHitung").innerText = hitung + " Kali";
}