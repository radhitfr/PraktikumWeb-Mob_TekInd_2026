import React, {
  useEffect,
  useState,
} from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Chart } from 'react-chartjs-2';

// ======================================================
// ================= REGISTER CHART =====================
// ======================================================

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function GrafikProduksi() {

  // ======================================================
  // ======================= STATE ========================
  // ======================================================

  const [dataProduksi, setDataProduksi] = useState([]);
  const [loading, setLoading] = useState(true);

  // ======================================================
  // ==================== FETCH DATA ======================
  // ======================================================

  useEffect(() => {

    const ambilDataProduksi = async () => {

      try {

        // ================= FETCH MOCK API =================

        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );

        const hasil = await response.json();

        // ================= GENERATE DATA =================

        const dataRandom = hasil
          .slice(0, 6)
          .map(() => {
            return Math.floor(
              Math.random() * 120 + 100
            );
          });

        // ================= SIMPAN STATE =================

        setDataProduksi(dataRandom);

      } catch (error) {

        console.log(
          'Gagal mengambil data:',
          error
        );

      } finally {

        setLoading(false);

      }

    };

    ambilDataProduksi();

  }, []);

  // ======================================================
  // ==================== DATA GRAFIK =====================
  // ======================================================

  const data = {
    labels: [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
    ],

    datasets: [

      // ================= BAR PRODUKSI =================

      {
        type: 'bar',
        label: 'Produksi Aktual',

        data: dataProduksi,

        backgroundColor:
          'rgba(54, 162, 235, 0.5)',

        borderColor:
          'rgba(54, 162, 235, 1)',

        borderWidth: 1,
        borderRadius: 10,
      },

      // ================= TARGET =================

      {
        type: 'line',
        label: 'Target Produksi',

        data: [
          150,
          150,
          150,
          150,
          150,
          150,
        ],

        borderColor:
          'rgb(255, 99, 132)',

        borderWidth: 3,
        tension: 0.3,
      },

    ],
  };

  // ======================================================
  // ======================= OPTIONS ======================
  // ======================================================

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {

      legend: {
        position: 'top',
      },

      title: {
        display: true,
        text: 'Grafik Produksi Harian - Lini 1',
      },

    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // ======================================================
  // ======================= LOADING ======================
  // ======================================================

  if (loading) {

    return (
      <div
        className="
          d-flex
          justify-content-center
          align-items-center
        "
        style={{ height: '350px' }}
      >

        <div
          className="spinner-border text-primary"
          role="status"
        ></div>

      </div>
    );

  }

  // ======================================================
  // ======================== RETURN ======================
  // ======================================================

  return (
    <div style={{ height: '350px' }}>

      <Chart
        type="bar"
        data={data}
        options={options}
      />

    </div>
  );
}

export default GrafikProduksi;