import React, { useState } from "react";

function KalkulatorOEE() {

  // ================= STATE =================

  // Waktu produksi yang direncanakan
  const [planTime, setPlanTime] = useState(0);

  // Waktu mesin berjalan
  const [runTime, setRunTime] = useState(0);

  // Total seluruh produk
  const [totalParts, setTotalParts] = useState(0);

  // Total produk baik
  const [goodParts, setGoodParts] = useState(0);

  // ================= PERHITUNGAN =================

  // Availability
  const availability =
    planTime > 0
      ? runTime / planTime
      : 0;

  // Performance
  const performance =
    planTime > 0
      ? totalParts / planTime
      : 0;

  // Quality
  const quality =
    totalParts > 0
      ? goodParts / totalParts
      : 0;

  // OEE
  const oee =
    availability *
    performance *
    quality *
    100;

  // ================= WARNA OEE =================

  let warnaOEE = "text-warning";

  if (oee < 50) {
    warnaOEE = "text-danger";
  }

  if (oee > 85) {
    warnaOEE = "text-success";
  }

  return (
    <div className="container mt-4">

      <div className="card shadow p-4">

        {/* ================= JUDUL ================= */}
        <h2 className="text-center mb-4">
          Kalkulator OEE Sederhana
        </h2>

        {/* ================= INPUT ================= */}
        <div className="row g-4">

          {/* Plan Time */}
          <div className="col-md-6">
            <label className="form-label">
              Plan Time
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="Masukkan Plan Time"
              value={planTime}
              onChange={(e) =>
                setPlanTime(Number(e.target.value))
              }
            />
          </div>

          {/* Run Time */}
          <div className="col-md-6">
            <label className="form-label">
              Run Time
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="Masukkan Run Time"
              value={runTime}
              onChange={(e) =>
                setRunTime(Number(e.target.value))
              }
            />
          </div>

          {/* Total Parts */}
          <div className="col-md-6">
            <label className="form-label">
              Total Parts
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="Masukkan Total Parts"
              value={totalParts}
              onChange={(e) =>
                setTotalParts(Number(e.target.value))
              }
            />
          </div>

          {/* Good Parts */}
          <div className="col-md-6">
            <label className="form-label">
              Good Parts
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="Masukkan Good Parts"
              value={goodParts}
              onChange={(e) =>
                setGoodParts(Number(e.target.value))
              }
            />
          </div>

        </div>

        {/* ================= HASIL ================= */}
        <div className="mt-5">

          <h4 className="mb-3">
            Hasil Perhitungan
          </h4>

          {/* Availability */}
          <p>
            <strong>Availability :</strong>{" "}
            {(availability * 100).toFixed(2)}%
          </p>

          {/* Performance */}
          <p>
            <strong>Performance :</strong>{" "}
            {(performance * 100).toFixed(2)}%
          </p>

          {/* Quality */}
          <p>
            <strong>Quality :</strong>{" "}
            {(quality * 100).toFixed(2)}%
          </p>

          <hr />

          {/* OEE */}
          <h3>
            Nilai OEE :
          </h3>

          <h1 className={warnaOEE}>
            {oee.toFixed(2)}%
          </h1>

          {/* Conditional Rendering */}
          {oee < 50 ? (

            <div className="alert alert-danger mt-3">
              OEE Rendah! Perlu Evaluasi Mesin Produksi.
            </div>

          ) : oee > 85 ? (

            <div className="alert alert-success mt-3">
              OEE Sangat Baik! Produksi Optimal.
            </div>

          ) : (

            <div className="alert alert-warning mt-3">
              OEE Cukup Baik, Namun Masih Bisa Ditingkatkan.
            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default KalkulatorOEE;