import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import GrafikProduksi from '../Komponen/GrafikProduksi';
import GrafikCacat from '../Komponen/GrafikCacat';
import KartuMesin from '../Komponen/KartuMesin';

function Dashboard() {

  // ======================================================
  // ================= SIDEBAR STATE ======================
  // ======================================================

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <div
      style={{
        backgroundColor: '#f4f7fb',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >

      {/* ================================================= */}
      {/* ================= MOBILE OVERLAY ================ */}
      {/* ================================================= */}

      {
        sidebarOpen && (
          <div
            className="
              d-lg-none
              position-fixed
              top-0
              start-0
              w-100
              h-100
            "
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1040,
            }}
            onClick={() => setSidebarOpen(false)}
          />
        )
      }

      {/* ================================================= */}
      {/* ==================== SIDEBAR ==================== */}
      {/* ================================================= */}

      <div
        className={`
          bg-dark
          text-white
          position-fixed
          top-0
          start-0
          h-100
          shadow-lg
          ${sidebarOpen ? 'd-block' : 'd-none'}
          d-lg-block
        `}
        style={{
          width: '260px',
          zIndex: 1050,
          overflowY: 'auto',
        }}
      >

        {/* ==================== LOGO ==================== */}

        <div className="p-4 border-bottom border-secondary">

          <h2 className="fw-bold mb-1">
            🏭 Smart Factory
          </h2>

          <small className="text-secondary">
            Monitoring System
          </small>

        </div>

        {/* ==================== MENU ==================== */}

        <div className="p-3">

          <div className="d-grid gap-3">

            <Link
              to="/"
              className="
                btn
                btn-light
                text-start
                fw-semibold
                py-3
                rounded-3
              "
              onClick={() => setSidebarOpen(false)}
            >
              📊 Dashboard
            </Link>

            <Link
              to="/inventori"
              className="
                btn
                btn-outline-light
                text-start
                py-3
                rounded-3
              "
              onClick={() => setSidebarOpen(false)}
            >
              📦 Inventori
            </Link>

            <Link
              to="/laporan-kualitas"
              className="
                btn
                btn-outline-light
                text-start
                py-3
                rounded-3
              "
              onClick={() => setSidebarOpen(false)}
            >
              📑 Laporan
            </Link>

            <Link
              to="/praktikum"
              className="
                btn
                btn-outline-light
                text-start
                py-3
                rounded-3
              "
              onClick={() => setSidebarOpen(false)}
            >
              📚 Praktikum
            </Link>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* ================= MAIN CONTENT ================== */}
      {/* ================================================= */}

      <div
        style={{
          marginLeft:
            window.innerWidth >= 992
              ? '260px'
              : '0',
          transition: '0.3s',
        }}
      >

        <div className="container-fluid py-4 px-3 px-lg-4">

          {/* ================================================= */}
          {/* ===================== HEADER ==================== */}
          {/* ================================================= */}

          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-3 p-md-4">

              <div
                className="
                  d-flex
                  justify-content-between
                  align-items-center
                  flex-wrap
                  gap-3
                "
              >

                {/* ================= LEFT ================= */}

                <div
                  className="
                    d-flex
                    align-items-center
                    gap-3
                  "
                >

                  {/* TOGGLE BUTTON */}

                  <button
                    className="btn btn-dark d-lg-none"
                    onClick={() =>
                      setSidebarOpen(!sidebarOpen)
                    }
                  >
                    ☰
                  </button>

                  <div>

                    <h3 className="fw-bold mb-1">
                      Dashboard Industri 4.0
                    </h3>

                    <small className="text-muted">
                      Smart Manufacturing Monitoring System
                    </small>

                  </div>

                </div>

                {/* ================= RIGHT ================= */}

                <div
                  className="
                    d-flex
                    align-items-center
                    gap-3
                  "
                >

                  <div className="text-end">

                    <h6 className="fw-bold mb-0">
                      Radhitya Adha
                    </h6>

                    <small className="text-muted">
                      Administrator
                    </small>

                  </div>

                  <img
                    src="https://i.pravatar.cc/100"
                    alt="profile"
                    className="rounded-circle shadow-sm"
                    width="50"
                    height="50"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* ======================= KPI ===================== */}
          {/* ================================================= */}

          <div className="row g-4 mb-4">

            {/* ================= TOTAL OUTPUT ================= */}

            <div className="col-12 col-md-6 col-xl-4">

              <div
                className="
                  card
                  bg-primary
                  text-white
                  border-0
                  shadow-sm
                  rounded-4
                  h-100
                "
              >

                <div className="card-body p-4">

                  <div
                    className="
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >

                    <div>

                      <h6>Total Output</h6>

                      <h2 className="fw-bold">
                        1,030
                      </h2>

                      <small>
                        Unit Hari Ini
                      </small>

                    </div>

                    <div style={{ fontSize: '45px' }}>
                      📦
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= EFFICIENCY ================= */}

            <div className="col-12 col-md-6 col-xl-4">

              <div
                className="
                  card
                  bg-success
                  text-white
                  border-0
                  shadow-sm
                  rounded-4
                  h-100
                "
              >

                <div className="card-body p-4">

                  <div
                    className="
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >

                    <div>

                      <h6>Efficiency</h6>

                      <h2 className="fw-bold">
                        92.4%
                      </h2>

                      <small>
                        Realtime Monitoring
                      </small>

                    </div>

                    <div style={{ fontSize: '45px' }}>
                      ⚙️
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= MESIN AKTIF ================= */}

            <div className="col-12 col-md-6 col-xl-4">

              <div
                className="
                  card
                  bg-dark
                  text-white
                  border-0
                  shadow-sm
                  rounded-4
                  h-100
                "
              >

                <div className="card-body p-4">

                  <div
                    className="
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >

                    <div>

                      <h6>Mesin Aktif</h6>

                      <h2 className="fw-bold">
                        12
                      </h2>

                      <small>
                        Dari 14 Mesin
                      </small>

                    </div>

                    <div style={{ fontSize: '45px' }}>
                      🏭
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* ===================== GRAFIK ==================== */}
          {/* ================================================= */}

          <div className="row g-4 mb-4">

            {/* ================= GRAFIK PRODUKSI ================= */}

            <div className="col-12 col-xl-8">

              <div className="card border-0 shadow-sm rounded-4 h-100">

                <div className="card-body p-3 p-md-4">

                  <h5 className="fw-bold mb-4">
                    Grafik Produksi Harian
                  </h5>

                  <div
                    style={{
                      height: '400px',
                      width: '100%',
                    }}
                  >
                    <GrafikProduksi />
                  </div>

                </div>

              </div>

            </div>

            {/* ================= GRAFIK CACAT ================= */}

            <div className="col-12 col-xl-4">

              <div className="card border-0 shadow-sm rounded-4 h-100">

                <div className="card-body p-3 p-md-4">

                  <h5 className="fw-bold mb-4">
                    Proporsi Cacat
                  </h5>

                  <div
                    className="
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                    style={{
                      height: '400px',
                    }}
                  >
                    <GrafikCacat />
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* ================= STATUS MESIN ================== */}
          {/* ================================================= */}

          <div className="mb-4">

            <h4 className="fw-bold mb-4">
              Status Mesin
            </h4>

            <div className="row g-4">

              <div className="col-12 col-sm-6 col-xl-3">

                <KartuMesin
                  nama="CNC-01"
                  status="Running"
                  produksi={320}
                />

              </div>

              <div className="col-12 col-sm-6 col-xl-3">

                <KartuMesin
                  nama="CNC-02"
                  status="Running"
                  produksi={310}
                />

              </div>

              <div className="col-12 col-sm-6 col-xl-3">

                <KartuMesin
                  nama="Press-01"
                  status="Stop"
                  produksi={150}
                />

              </div>

              <div className="col-12 col-sm-6 col-xl-3">

                <KartuMesin
                  nama="Weld-04"
                  status="Maintenance"
                  produksi={0}
                />

              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* ====================== TABEL ==================== */}
          {/* ================================================= */}

          <div className="card border-0 shadow-sm rounded-4 mb-4">

            <div className="card-body p-3 p-md-4">

              <div
                className="
                  d-flex
                  justify-content-between
                  align-items-center
                  flex-wrap
                  gap-3
                  mb-4
                "
              >

                <div>

                  <h4 className="fw-bold mb-1">
                    Data Produksi
                  </h4>

                  <small className="text-muted">
                    Aktivitas produksi terbaru
                  </small>

                </div>

                <button className="btn btn-primary rounded-3">
                  Export Data
                </button>

              </div>

              {/* ================= TABLE ================= */}

              <div className="table-responsive">

                <table className="table table-hover align-middle">

                  <thead className="table-dark">

                    <tr>

                      <th>Mesin</th>
                      <th>Status</th>
                      <th>Output</th>
                      <th>Operator</th>
                      <th>Shift</th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr>

                      <td>CNC-01</td>

                      <td>
                        <span className="badge bg-success">
                          Running
                        </span>
                      </td>

                      <td>320 Unit</td>
                      <td>Bambang</td>
                      <td>Pagi</td>

                    </tr>

                    <tr>

                      <td>Press-01</td>

                      <td>
                        <span className="badge bg-danger">
                          Stop
                        </span>
                      </td>

                      <td>150 Unit</td>
                      <td>Fadhil</td>
                      <td>Siang</td>

                    </tr>

                    <tr>

                      <td>Weld-04</td>

                      <td>
                        <span className="badge bg-warning text-dark">
                          Maintenance
                        </span>
                      </td>

                      <td>0 Unit</td>
                      <td>Rizky</td>
                      <td>Malam</td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;