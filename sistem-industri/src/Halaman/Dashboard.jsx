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
      className="container-fluid p-0"
      style={{
        backgroundColor: '#f4f7fb',
        minHeight: '100vh',
      }}
    >

      <div className="row g-0">

        {/* ================================================= */}
        {/* ==================== SIDEBAR ==================== */}
        {/* ================================================= */}

        <div
          className={`
            col-lg-2
            sidebar-custom
            bg-dark
            text-white
            ${sidebarOpen ? 'd-block position-fixed' : 'd-none'}
            d-lg-block
          `}
          style={{
            minHeight: '100vh',
            width: '260px',
            zIndex: 1050,
            top: 0,
            left: 0,
          }}
        >

          {/* ===================== LOGO ===================== */}

          <div className="p-4 border-bottom border-secondary">

            <h3 className="fw-bold text-center mb-1">
              🏭 Smart Factory
            </h3>

            <p className="text-center text-secondary small mb-0">
              Monitoring System
            </p>

          </div>

          {/* ===================== MENU ===================== */}

          <div className="p-3">

            <div className="d-grid gap-3">

              <Link
                to="/"
                className="btn btn-light text-start fw-semibold py-3 rounded-3"
                onClick={() => setSidebarOpen(false)}
              >
                📊 Dashboard
              </Link>

              <Link
                to="/inventori"
                className="btn btn-outline-light text-start py-3 rounded-3"
                onClick={() => setSidebarOpen(false)}
              >
                📦 Inventori
              </Link>

              <Link
                to="/laporan-kualitas"
                className="btn btn-outline-light text-start py-3 rounded-3"
                onClick={() => setSidebarOpen(false)}
              >
                📑 Laporan
              </Link>

              <Link
                to="/praktikum"
                className="btn btn-outline-light text-start py-3 rounded-3"
                onClick={() => setSidebarOpen(false)}
              >
                📚 Praktikum
              </Link>

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* ================= OVERLAY MOBILE ================ */}
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
                bg-dark
              "
              style={{
                opacity: 0.5,
                zIndex: 1040,
              }}
              onClick={() => setSidebarOpen(false)}
            />
          )
        }

        {/* ================================================= */}
        {/* ================= MAIN CONTENT ================== */}
        {/* ================================================= */}

        <div className="col">

          <div
            className="p-3 p-md-4"
            style={{
              marginLeft:
                window.innerWidth >= 992
                  ? '260px'
                  : '0',
              transition: '0.3s',
            }}
          >

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

                  {/* ===================== LEFT ===================== */}

                  <div
                    className="
                      d-flex
                      align-items-center
                      gap-3
                    "
                  >

                    {/* TOGGLE BUTTON */}

                    <button
                      className="btn btn-dark d-lg-none rounded-3"
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

                  {/* ===================== RIGHT ==================== */}

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

              {/* ================== CARD 1 ================== */}

              <div className="col-12 col-md-6 col-xl-4">

                <div className="card border-0 shadow-sm rounded-4 bg-primary text-white h-100">

                  <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-center">

                      <div>

                        <h6>Total Output</h6>

                        <h2 className="fw-bold">
                          1,030
                        </h2>

                        <small>Unit Hari Ini</small>

                      </div>

                      <div style={{ fontSize: '45px' }}>
                        📦
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* ================== CARD 2 ================== */}

              <div className="col-12 col-md-6 col-xl-4">

                <div className="card border-0 shadow-sm rounded-4 bg-success text-white h-100">

                  <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-center">

                      <div>

                        <h6>Efficiency</h6>

                        <h2 className="fw-bold">
                          92.4%
                        </h2>

                        <small>Realtime Monitoring</small>

                      </div>

                      <div style={{ fontSize: '45px' }}>
                        ⚙️
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* ================== CARD 3 ================== */}

              <div className="col-12 col-md-6 col-xl-4">

                <div className="card border-0 shadow-sm rounded-4 bg-dark text-white h-100">

                  <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-center">

                      <div>

                        <h6>Mesin Aktif</h6>

                        <h2 className="fw-bold">
                          12
                        </h2>

                        <small>Dari 14 Mesin</small>

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

              {/* ============== GRAFIK PRODUKSI ============== */}

              <div className="col-12 col-xl-8">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                  <div className="card-body p-3 p-md-4">

                    <h5 className="fw-bold mb-3">
                      Grafik Produksi Harian
                    </h5>

                    <div style={{ height: '350px' }}>
                      <GrafikProduksi />
                    </div>

                  </div>

                </div>

              </div>

              {/* ================ GRAFIK CACAT ================ */}

              <div className="col-12 col-xl-4">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                  <div className="card-body p-3 p-md-4">

                    <h5 className="fw-bold mb-3">
                      Proporsi Cacat
                    </h5>

                    <div style={{ height: '320px' }}>
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

              <h4 className="fw-bold mb-3">
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

    </div>

  );
}

export default Dashboard;