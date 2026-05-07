import React, { useState } from "react";

function CounterProduksi() {

  // State jumlah produksi
  const [jumlah, setJumlah] = useState(0);

  // State target produksi
  const [target, setTarget] = useState(100);

  // State status sistem
  const [status, setStatus] = useState("NORMAL");

  // Fungsi menambah produksi
  const tambahProduksi = () => {
    setJumlah(jumlah + 1);
  };

  // Fungsi reset
  const reset = () => {
    setJumlah(0);
    setStatus("NORMAL");
  };

  // Fungsi Emergency Stop
  const emergencyStop = () => {
    setStatus("EMERGENCY");
  };

  return (
    <div className="text-center p-4 border rounded bg-light">

      <h3>Simulasi Hitung Produk</h3>

      {/* Jumlah produksi */}
      <h1 className="display-4">
        {jumlah}
      </h1>

      {/* Target */}
      <p>
        Target: {target} Unit
      </p>

      {/* Status Sistem */}
      <h5 className="mb-3">
        Status Sistem :
        {" "}
        <span
          className={
            status === "EMERGENCY"
              ? "text-danger"
              : "text-success"
          }
        >
          {status}
        </span>
      </h5>

      {/* Conditional Rendering */}
      {status === "EMERGENCY" ? (

        <div className="alert alert-danger d-inline-block">
          SISTEM DARURAT AKTIF!
        </div>

      ) : jumlah >= target ? (

        <div className="alert alert-success d-inline-block">
          Target Tercapai!
        </div>

      ) : (

        <div className="alert alert-secondary d-inline-block">
          Produksi Berjalan...
        </div>

      )}

      {/* Tombol */}
      <div className="mt-4">

        {/* Tombol tambah produksi */}
        <button
          className="btn btn-primary me-2"
          onClick={tambahProduksi}
          disabled={status === "EMERGENCY"}
        >
          +1 Unit (Sensor OK)
        </button>

        {/* Tombol reset */}
        <button
          className="btn btn-danger me-2"
          onClick={reset}
        >
          Reset Shift
        </button>

        {/* Tombol emergency */}
        <button
          className="btn btn-dark"
          onClick={emergencyStop}
        >
          Emergency Stop
        </button>

      </div>

    </div>
  );
}

export default CounterProduksi;