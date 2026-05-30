import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          PT. MANUFAKTUR JAYA
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Dashboard
          </Link>

          <Link className="nav-link" to="/input">
            Input Laporan
          </Link>

          <Link className="nav-link" to="/riwayat">
            Riwayat Data
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;