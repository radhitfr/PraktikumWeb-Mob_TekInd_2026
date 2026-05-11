import React from 'react';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

// ======================================================
// ====================== REGISTER ======================
// ======================================================

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function GrafikCacat() {

  // ======================================================
  // ======================== DATA ========================
  // ======================================================

  const data = {
    labels: [
      'Scratch',
      'Dent',
      'Lainnya',
    ],

    datasets: [
      {
        label: 'Proporsi Cacat',

        data: [
          50,
          30,
          20,
        ],

        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#ffce56',
        ],

        borderColor: [
          '#ffffff',
          '#ffffff',
          '#ffffff',
        ],

        borderWidth: 3,
        hoverOffset: 10,
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
        position: 'bottom',

        labels: {
          padding: 20,

          font: {
            size: 14,
          },
        },
      },

      title: {
        display: true,
        text: 'Proporsi Cacat Produksi',

        font: {
          size: 18,
        },
      },

    },
  };

  // ======================================================
  // ======================== RETURN ======================
  // ======================================================

  return (
    <div style={{ height: '350px' }}>

      <Doughnut
        data={data}
        options={options}
      />

    </div>
  );
}

export default GrafikCacat;