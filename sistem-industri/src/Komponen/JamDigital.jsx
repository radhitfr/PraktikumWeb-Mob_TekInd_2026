import React, { useState, useEffect } from "react";

function JamDigital() {

  // State waktu
  const [waktu, setWaktu] = useState(new Date());

  // State kota
  const [kota, setKota] = useState("Yogyakarta");

  // useEffect untuk jam digital
  useEffect(() => {

    // Membuat interval timer
    const timerID = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timerID);
    };

  }, []);

  // useEffect untuk mengubah title browser
  useEffect(() => {
    document.title = `Jam ${kota}`;
  }, [kota]);

  return (
    <div className="alert alert-info text-center p-4">

      <h3 className="mb-3">
        Jam Digital Dunia Industri
      </h3>

      {/* Input Nama Kota */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Masukkan Nama Kota"
          value={kota}
          onChange={(e) => setKota(e.target.value)}
        />
      </div>

      {/* Tampilan Kota */}
      <h5 className="mb-3">
        Kota: <strong>{kota}</strong>
      </h5>

      {/* Tampilan Jam */}
      <h2>
        {waktu.toLocaleTimeString()}
      </h2>

    </div>
  );
}

export default JamDigital;