import React, { useState } from 'react';
import './App.css';

// ================= IMPORT KOMPONEN PERTEMUAN 9 =================
import KartuMesin from './Komponen/KartuMesin';
import KartuMesinLat1 from './Komponen/KartuMesinLat1';
import KartuMesinLat2 from './Komponen/KartuMesinLat2';
import KartuKaryawan from './Komponen/KartuKaryawan';

// ================= IMPORT KOMPONEN PERTEMUAN 10 =================
import CounterProduksi from './Komponen/CounterProduksi';
import JamDigital from './Komponen/JamDigital';
import KalkulatorOEE from './Komponen/KalkulatorOEE';

function App() {

  // ================= STATE NAVIGASI =================
  const [halaman, setHalaman] = useState('Praktikum');

  return (
    <div className="container mt-5 mb-5">

      {/* ====================================================== */}
      {/* ======================== HEADER ====================== */}
      {/* ====================================================== */}

      <h2 className="text-center mb-2">
        Monitoring Lini Produksi
      </h2>

      <p className="text-center text-muted mb-5">
        Radhitya Adha Fadhlur Rohman (23051430005)
      </p>

      {/* ====================================================== */}
      {/* ======================= NAVIGASI ===================== */}
      {/* ====================================================== */}

      <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">

        {/* Praktikum */}
        <button
          className={`btn tombol-navigasi ${
            halaman === 'Praktikum'
              ? 'btn-primary'
              : 'btn-outline-primary'
          }`}
          onClick={() => setHalaman('Praktikum')}
        >
          Versi Praktikum
        </button>

        {/* Latihan 1 */}
        <button
          className={`btn tombol-navigasi ${
            halaman === 'latihan1'
              ? 'btn-info text-white'
              : 'btn-outline-info'
          }`}
          onClick={() => setHalaman('latihan1')}
        >
          Latihan 1
        </button>

        {/* Latihan 2 */}
        <button
          className={`btn tombol-navigasi ${
            halaman === 'latihan2'
              ? 'btn-success'
              : 'btn-outline-success'
          }`}
          onClick={() => setHalaman('latihan2')}
        >
          Latihan 2
        </button>

        {/* Tugas Mini */}
        <button
          className={`btn tombol-navigasi ${
            halaman === 'tugas'
              ? 'btn-warning text-dark'
              : 'btn-outline-warning'
          }`}
          onClick={() => setHalaman('tugas')}
        >
          Tugas Proyek Mini
        </button>

        {/* Pertemuan 10 */}
        <button
          className={`btn tombol-navigasi ${
            halaman === 'state'
              ? 'btn-danger'
              : 'btn-outline-danger'
          }`}
          onClick={() => setHalaman('state')}
        >
          Pertemuan 10
        </button>

      </div>

      {/* ====================================================== */}
      {/* ================= 1. PRAKTIKUM ======================= */}
      {/* ====================================================== */}

      {halaman === 'Praktikum' && (
        <div>

          <h4 className="text-center mb-4">
            1. Versi Praktikum (Props)
          </h4>

          <div className="row g-4">

            <div className="col-md-4">
              <KartuMesin
                nama="CNC-Turning-01"
                status="Running"
                produksi={150}
              />
            </div>

            <div className="col-md-4">
              <KartuMesin
                nama="CNC-Milling-02"
                status="Maintenance"
                produksi={0}
              />
            </div>

            <div className="col-md-4">
              <KartuMesin
                nama="Press-Hydraulic-05"
                status="Stop"
                produksi={85}
              />
            </div>

          </div>

        </div>
      )}

      {/* ====================================================== */}
      {/* ================= 2. LATIHAN 1 ======================= */}
      {/* ====================================================== */}

      {halaman === 'latihan1' && (
        <div>

          <h4 className="text-center mb-4 text-info">
            2. Latihan 1 (Destructuring Props)
          </h4>

          <div className="row g-4">

            <div className="col-md-4">
              <KartuMesinLat1
                nama="CNC-Grinding-03"
                status="Maintenance"
                produksi={50}
              />
            </div>

            <div className="col-md-4">
              <KartuMesinLat1
                nama="CNC-Drilling-04"
                status="Running"
                produksi={210}
              />
            </div>

            <div className="col-md-4">
              <KartuMesinLat1
                nama="Lathe-Machine-06"
                status="Stop"
                produksi={0}
              />
            </div>

          </div>

        </div>
      )}

      {/* ====================================================== */}
      {/* ================= 3. LATIHAN 2 ======================= */}
      {/* ====================================================== */}

      {halaman === 'latihan2' && (
        <div>

          <h4 className="text-center mb-4 text-success">
            3. Latihan 2 (Default Props)
          </h4>

          <div className="row g-4">

            <div className="col-md-4">
              <KartuMesinLat2
                nama="Assembly-Line-01"
                status="Stop"
              />
            </div>

            <div className="col-md-4">
              <KartuMesinLat2
                nama="Packaging-Unit-02"
                status="Running"
                produksi={175}
              />
            </div>

            <div className="col-md-4">
              <KartuMesinLat2
                nama="Inspection-Unit-03"
                status="Maintenance"
              />
            </div>

          </div>

        </div>
      )}

      {/* ====================================================== */}
      {/* ================= 4. TUGAS MINI ====================== */}
      {/* ====================================================== */}

      {halaman === 'tugas' && (
        <div>

          <h4 className="text-center mb-4 text-warning">
            4. Tugas Proyek Mini (Data Karyawan)
          </h4>

          <div className="row g-4">

            <div className="col-md-4">
              <KartuKaryawan
                nama="Bambang Subejo"
                jabatan="Manager"
                bagian="Produksi"
              />
            </div>

            <div className="col-md-4">
              <KartuKaryawan
                nama="Fadhil Alamsyah"
                jabatan="Operator"
                bagian="Lini Perakitan 1"
              />
            </div>

            <div className="col-md-4">
              <KartuKaryawan
                nama="Adhe Surakjat"
                jabatan="QC"
                bagian="Quality Assurance"
              />
            </div>

          </div>

        </div>
      )}

      {/* ====================================================== */}
      {/* ================= 5. PERTEMUAN 10 ==================== */}
      {/* ====================================================== */}

      {halaman === 'state' && (
        <div>

          <h4 className="text-center mb-4 text-danger">
            5. Pertemuan 10 (State, Hooks, Conditional Rendering)
          </h4>

          {/* ================= JAM DIGITAL ================= */}
          <div className="mb-5">
            <JamDigital />
          </div>

          {/* ================= COUNTER PRODUKSI ================= */}
          <div className="mb-5">
            <CounterProduksi />
          </div>

          {/* ================= KARTU MESIN DINAMIS ================= */}
          <div className="mb-5">

            <h4 className="text-center mb-4">
              Monitoring Status Mesin
            </h4>

            <div className="row g-4">

              <div className="col-md-4">
                <KartuMesin
                  nama="CNC-Turning-01"
                  status="Running"
                  produksi={150}
                />
              </div>

              <div className="col-md-4">
                <KartuMesin
                  nama="CNC-Milling-02"
                  status="Maintenance"
                  produksi={0}
                />
              </div>

              <div className="col-md-4">
                <KartuMesin
                  nama="Press-Hydraulic-05"
                  status="Stop"
                  produksi={85}
                />
              </div>

            </div>

          </div>

          {/* ================= KALKULATOR OEE ================= */}
          <div className="mt-5">

            <h4 className="text-center mb-4 text-primary">
              Proyek Mini - Kalkulator OEE
            </h4>

            <KalkulatorOEE />

          </div>

        </div>
      )}

    </div>
  );
}

export default App;