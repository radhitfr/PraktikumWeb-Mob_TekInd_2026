
// Ambil elemen DOM
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');
const btnMaintenance = document.getElementById('btnMaintenance');

const statusIndicator = document.getElementById('statusIndicator');
const suhuMesin = document.getElementById('suhuMesin');
const teksStatus = statusIndicator.querySelector('strong');

const inputRPM = document.getElementById('inputRPM');
const pesanError = document.getElementById('pesanError');
const card = document.querySelector('.card');

// ===============================
// STATE
// ===============================
let suhu = 25;
let intervalId = null;

// ===============================
// START
// ===============================
btnStart.addEventListener('click', function () {
    statusIndicator.className = 'alert alert-success';
    teksStatus.innerText = 'RUNNING';

    intervalId = setInterval(function () {
        suhu += 1;
        suhuMesin.innerText = suhu + " °C";

        // OVERHEAT
        if (suhu > 80) {
            statusIndicator.className = 'alert alert-danger';
            teksStatus.innerText = 'OVERHEAT WARNING';
            suhuMesin.style.color = 'red';

            clearInterval(intervalId); // hentikan otomatis
        }
    }, 1000);

    btnStart.disabled = true;
    btnStop.disabled = false;
});

// ===============================
// STOP
// ===============================
btnStop.addEventListener('click', function () {
    clearInterval(intervalId);

    statusIndicator.className = 'alert alert-secondary';
    teksStatus.innerText = 'STOPPED';

    btnStart.disabled = false;
    btnStop.disabled = true;
});

// ===============================
// RESET
// ===============================
btnReset.addEventListener('click', function () {
    clearInterval(intervalId);

    suhu = 25;
    suhuMesin.innerText = suhu + " °C";
    suhuMesin.style.color = "";

    statusIndicator.className = 'alert alert-secondary';
    teksStatus.innerText = 'UNKNOWN';

    btnStart.disabled = false;
    btnStop.disabled = true;

    // reset tampilan card
    card.classList.remove('bg-light');
});

// ===============================
// MAINTENANCE
// ===============================
btnMaintenance.addEventListener('click', function () {
    clearInterval(intervalId);

    card.classList.add('bg-light');
    statusIndicator.className = 'alert alert-warning';
    teksStatus.innerText = 'MAINTENANCE';

    btnStart.disabled = false;
    btnStop.disabled = true;
});

// ===============================
// VALIDASI RPM (REAL-TIME)
// ===============================
inputRPM.addEventListener('input', function () {
    const val = parseInt(this.value);

    if (!this.value) {
        pesanError.classList.add('d-none');
        this.classList.remove('is-invalid');
    } 
    else if (val > 2000) {
        pesanError.classList.remove('d-none');
        this.classList.add('is-invalid');
    } 
    else {
        pesanError.classList.add('d-none');
        this.classList.remove('is-invalid');
    }
});

// ===============================
// HOVER SUHU
// ===============================
suhuMesin.addEventListener("mouseenter", () => {
    suhuMesin.style.color = "#0d6efd";
    suhuMesin.style.fontWeight = "600";
});

suhuMesin.addEventListener("mouseleave", () => {
    suhuMesin.style.color = "";
    suhuMesin.style.fontWeight = "";
});