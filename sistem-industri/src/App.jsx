import React from 'react';

import {
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import DetailInventori from './Halaman/DetailInventori';
import LaporanKualitas from './Halaman/LaporanKualitas';
import Praktikum from './Halaman/Praktikum';
import NotFound from './Halaman/NotFound';

// ======================================================
// ===================== NAVBAR =========================
// ======================================================

function Navbar() {

  const location = useLocation();

  // ================= ACTIVE MENU =================
  const aktif = (path) => {
    return location.pathname === path
      ? 'nav-link active fw-semibold text-info'
      : 'nav-link text-light';
  };

  return (
    <nav
      className="
        navbar
        navbar-expand-lg
        navbar-dark
        bg-dark
        shadow-sm
        sticky-top
      "
    >

      <div className="container-fluid px-3 px-md-4">

        {/* ================= LOGO ================= */}

        <Link
          className="
            navbar-brand
            fw-bold
            d-flex
            align-items-center
            gap-2
          "
          to="/"
        >

          <span style={{ fontSize: '28px' }}>
            🏭
          </span>

          <div>

            <div
              style={{
                fontSize: '18px',
                lineHeight: '1.1',
              }}
            >
              Sistem Monitoring
            </div>

            <small
              className="text-light opacity-75"
              style={{ fontSize: '11px' }}
            >
              Industrial Smart Dashboard
            </small>

          </div>

        </Link>

        {/* ================= TOGGLER ================= */}

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ================= MENU ================= */}

        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >

          <div
            className="
              navbar-nav
              ms-auto
              align-items-lg-center
              gap-lg-2
              mt-3
              mt-lg-0
            "
          >

            {/* DASHBOARD */}
            <Link
              className={aktif('/')}
              to="/"
            >
              Dashboard
            </Link>

            {/* INVENTORI */}
            <Link
              className={aktif('/inventori')}
              to="/inventori"
            >
              Inventori
            </Link>

            {/* LAPORAN */}
            <Link
              className={aktif('/laporan-kualitas')}
              to="/laporan-kualitas"
            >
              Laporan
            </Link>

            {/* PRAKTIKUM */}
            <Link
              className={aktif('/praktikum')}
              to="/praktikum"
            >
              Praktikum
            </Link>

            {/* TEST ERROR */}
            <Link
              className="nav-link text-danger fw-semibold"
              to="/halaman-error"
            >
              Test 404
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}

// ======================================================
// ======================= APP ==========================
// ======================================================

function App() {

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #f5f7fa, #dfe9f3)',
      }}
    >

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= MAIN CONTENT ================= */}

      <main className="py-3 py-md-4">

        <div className="container-fluid px-3 px-md-4">

          <div
            className="
              card
              border-0
              shadow-lg
              rounded-4
              overflow-hidden
            "
          >

            <div className="p-2 p-md-3 p-lg-4">

              {/* ================= ROUTES ================= */}

              <Routes>

                {/* DASHBOARD */}
                <Route
                  path="/"
                  element={<Dashboard />}
                />

                {/* INVENTORI */}
                <Route
                  path="/inventori"
                  element={<Inventori />}
                />

                {/* DETAIL INVENTORI */}
                <Route
                  path="/inventori/:id"
                  element={<DetailInventori />}
                />

                {/* LAPORAN */}
                <Route
                  path="/laporan-kualitas"
                  element={<LaporanKualitas />}
                />

                {/* PRAKTIKUM */}
                <Route
                  path="/praktikum"
                  element={<Praktikum />}
                />

                {/* 404 */}
                <Route
                  path="*"
                  element={<NotFound />}
                />

              </Routes>

            </div>

          </div>

        </div>

      </main>

      {/* ====================================================== */}
      {/* ======================= FOOTER ======================= */}
      {/* ====================================================== */}

      <footer className="text-center py-4 text-muted">

        <small>
          © 2026 Sistem Monitoring Industri —
          Teknik Industri
        </small>

      </footer>

    </div>
  );
}

export default App;