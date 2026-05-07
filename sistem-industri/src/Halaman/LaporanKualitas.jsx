import React from 'react'

import { Link } from 'react-router-dom'

function LaporanKualitas() {

  // ================= MOCK DATA =================
  const dataCacat = [

    {
      id: 1,
      namaProduk: 'Gear Box Type A',
      jumlahCacat: 5,
      status: 'Perlu Inspeksi'
    },

    {
      id: 2,
      namaProduk: 'Bearing Unit B',
      jumlahCacat: 2,
      status: 'Aman'
    },

    {
      id: 3,
      namaProduk: 'Poros Baja C',
      jumlahCacat: 7,
      status: 'Critical'
    },

    {
      id: 4,
      namaProduk: 'Hydraulic Pump D',
      jumlahCacat: 1,
      status: 'Aman'
    }

  ]

  return (

    <div className="container">

      {/* ================= HEADER ================= */}
      <div className="mb-4">

        <h1 className="fw-bold">
          Laporan Kualitas Produksi
        </h1>

        <p className="text-muted">
          Monitoring data cacat produksi harian
        </p>

      </div>

      {/* ================= BUTTON ================= */}
      <Link
        to="/"
        className="btn btn-secondary mb-4"
      >
        ← Kembali ke Dashboard
      </Link>

      {/* ================= TABLE ================= */}
      <div className="card shadow border-0 rounded-4">

        <div className="card-body">

          <table className="table table-hover align-middle">

            <thead className="table-dark">

              <tr>

                <th>ID</th>
                <th>Nama Produk</th>
                <th>Jumlah Cacat</th>
                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {dataCacat.map((item) => (

                <tr key={item.id}>

                  <td>
                    <strong>
                      #{item.id}
                    </strong>
                  </td>

                  <td>
                    {item.namaProduk}
                  </td>

                  <td>
                    {item.jumlahCacat} Unit
                  </td>

                  <td>

                    <span
                      className={
                        item.status === 'Critical'
                          ? 'badge bg-danger'
                          : item.status === 'Perlu Inspeksi'
                          ? 'badge bg-warning text-dark'
                          : 'badge bg-success'
                      }
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )
}

export default LaporanKualitas