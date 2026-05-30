import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import InputLaporan from "./pages/InputLaporan";
import RiwayatData from "./pages/RiwayatData";

const STORAGE_KEY = "DATA_LAPORAN_PRODUKSI";

function App() {

  const [dataLaporan, setDataLaporan] = useState([]);

  useEffect(() => {

    const dataStorage =
      localStorage.getItem(STORAGE_KEY);

    if (dataStorage) {
      setDataLaporan(
        JSON.parse(dataStorage)
      );
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(dataLaporan)
    );

  }, [dataLaporan]);

  return (
    <div>

      <Navbar />

      <div className="container mt-4">

        <Routes>

          <Route
            path="/"
            element={
              <Dashboard
                dataLaporan={dataLaporan}
              />
            }
          />

          <Route
            path="/input"
            element={
              <InputLaporan
                dataLaporan={dataLaporan}
                setDataLaporan={setDataLaporan}
              />
            }
          />

          <Route
            path="/riwayat"
            element={
              <RiwayatData
                dataLaporan={dataLaporan}
                setDataLaporan={setDataLaporan}
              />
            }
          />

        </Routes>

      </div>

    </div>
  );
}

export default App;