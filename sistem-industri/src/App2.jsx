import React from 'react'

import {
  Routes,
  Route,
  Link
} from 'react-router-dom'

import Dashboard from './Halaman/Dashboard'
import Inventori from './Halaman/Inventori'
import DetailInventori from './Halaman/DetailInventori'
import LaporanKualitas from './Halaman/LaporanKualitas'
import NotFound from './Halaman/NotFound'

// ================= NAVBAR =================
function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">

      <div className="container">

        {/* Logo */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          🏭 Sistem Monitoring
        </Link>

        {/* Tombol Hamburger Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Navbar */}
        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >

          <div className="navbar-nav ms-auto">

            <Link
              className="nav-link"
              to="/"
            >
              Dashboard
            </Link>

            <Link
              className="nav-link"
              to="/inventori"
            >
              Inventori
            </Link>

            <Link
              className="nav-link"
              to="/laporan-kualitas"
            >
              Laporan Kualitas
            </Link>

            <Link
              className="nav-link text-danger"
              to="/halaman-error"
            >
              Test 404
            </Link>

          </div>

        </div>

      </div>

    </nav>

  )
}

// ================= APP =================
function App() {

  return (

    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(to right, #f5f7fa, #e4ecf5)'
      }}
    >

      {/* Navbar */}
      <Navbar />

      {/* Isi Halaman */}
      <div className="container py-4 py-md-5">

        <div
          className="
            card
            border-0
            shadow-lg
            rounded-4
            p-3
            p-md-5
          "
        >

          <Routes>

            {/* Dashboard */}
            <Route
              path="/"
              element={<Dashboard />}
            />

            {/* Inventori */}
            <Route
              path="/inventori"
              element={<Inventori />}
            />

            {/* Detail Inventori */}
            <Route
              path="/inventori/:id"
              element={<DetailInventori />}
            />

            {/* Laporan Kualitas */}
            <Route
              path="/laporan-kualitas"
              element={<LaporanKualitas />}
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

  )
}

export default App