// 1. Seleksi Elemen DOM
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');

const statusIndicator = document.getElementById('statusIndicator');
const suhuMesin = document.getElementById('suhuMesin');

// Mengambil elemen <strong> di dalam alert
const teksStatus = statusIndicator.querySelector('strong');

// Variabel State
let suhu = 25;
let intervalId = null; // Untuk menyimpan ID timer

// Event Listener Tombol START
btnStart.addEventListener('click', function () {
    // Ubah UI Status
    statusIndicator.className = 'alert alert-success';
    teksStatus.innerText = 'RUNNING';

    // Logika simulasi kenaikan suhu
    intervalId = setInterval(function () {
        suhu += 1;
        suhuMesin.innerText = suhu + ' °C';

        // Peringatan jika suhu overheat
        if (suhu > 80) {
            statusIndicator.className = 'alert alert-danger';
            teksStatus.innerText = 'OVERHEAT WARNING';
            suhuMesin.style.color = 'red';
        }
    }, 1000);

    // Matikan tombol Start agar tidak double click
    btnStart.disabled = true;
    btnStop.disabled = false;
});

// Event Listener Tombol STOP
btnStop.addEventListener('click', function () {
    clearInterval(intervalId);

    statusIndicator.className = 'alert alert-secondary';
    teksStatus.innerText = 'STOPPED';

    btnStart.disabled = false;
    btnStop.disabled = true;
});

// Event Listener Tombol RESET
btnReset.addEventListener('click', function () {
    clearInterval(intervalId);

    suhu = 25;
    suhuMesin.innerText = suhu + ' °C';
    suhuMesin.style.color = 'black';

    statusIndicator.className = 'alert alert-secondary';
    teksStatus.innerText = 'UNKNOWN';

    btnStart.disabled = false;
    btnStop.disabled = true;
});

// Validasi Input RPM
const inputRPM = document.getElementById('inputRPM');
const pesanError = document.getElementById('pesanError');

inputRPM.addEventListener('input', function () {
    let val = parseInt(this.value);

    if (val > 2000) {
        pesanError.classList.remove('d-none');
        this.classList.add('is-invalid');
    } else {
        pesanError.classList.add('d-none');
        this.classList.remove('is-invalid');
    }
});

// Maintenance Mode
const btnMaintenance = document.getElementById('btnMaintenance');
const panelMesin = document.getElementById('panelMesin');

btnMaintenance.addEventListener('click', function () {
    // Hentikan simulasi jika sedang berjalan
    clearInterval(intervalId);

    // Ubah background card menjadi abu-abu
    panelMesin.classList.add('bg-light');

    // Ubah status
    statusIndicator.className = 'alert alert-warning';
    teksStatus.innerText = 'MAINTENANCE';

    // Atur tombol
    btnStart.disabled = false;
    btnStop.disabled = true;
});
// Saat mouse diarahkan ke suhu
suhuMesin.addEventListener('mouseover', function () {
    suhuMesin.style.color = 'blue';
    suhuMesin.style.fontWeight = 'bold';
});

// Saat mouse keluar dari suhu
suhuMesin.addEventListener('mouseout', function () {
    suhuMesin.style.color = 'black';
    suhuMesin.style.fontWeight = 'normal';
});