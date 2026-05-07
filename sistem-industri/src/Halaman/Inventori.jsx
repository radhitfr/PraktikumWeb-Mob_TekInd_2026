import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

function Inventori() {

  // ================= STATE DATA =================
  const [products, setProducts] = useState([])

  // ================= STATE LOADING =================
  const [loading, setLoading] = useState(true)

  // ================= FETCH API =================
  useEffect(() => {

    // Loading dimulai
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/posts')

      .then(res => res.json())

      .then(data => {

        // Simulasi loading 2 detik
        setTimeout(() => {

          // Ambil 5 data pertama
          setProducts(data.slice(0, 5))

          // Loading selesai
          setLoading(false)

        }, 2000)

      })

      .catch(err => {

        console.log(err)

        // Jika error loading tetap dihentikan
        setLoading(false)

      })

  }, [])

  // ================= TAMPILAN LOADING =================
  if (loading) {

    return (

      <div className="container text-center mt-5">

        <div
          className="card shadow border-0 rounded-4 p-5"
        >

          <h3 className="mb-3">
            ⏳ Memuat Data Inventori...
          </h3>

          <p className="text-muted">
            Sistem sedang mengambil data supplier pabrik
          </p>

          {/* Spinner Bootstrap */}
          <div className="mt-3">

            <div
              className="spinner-border text-primary"
              role="status"
            >
              <span className="visually-hidden">
                Loading...
              </span>
            </div>

          </div>

        </div>

      </div>

    )

  }

  return (

    <div className="container">

      {/* ================= HEADER ================= */}
      <div className="mb-4">

        <h1 className="fw-bold">
          Data Inventori Bahan Baku
        </h1>

        <p className="text-muted">
          Monitoring data inventori supplier pabrik
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
                <th>ID Item</th>
                <th>Nama Bahan</th>
                <th>Status Supplier</th>
              </tr>

            </thead>

            <tbody>

              {products.map((item) => (

                <tr key={item.id}>

                  {/* ID */}
                  <td>
                    <strong>
                      #{item.id}
                    </strong>
                  </td>

                  {/* Nama Bahan + Dynamic Route */}
                  <td>

                    <Link
                      to={`/inventori/${item.id}`}
                      className="text-decoration-none fw-semibold text-primary"
                    >
                      {item.title}
                    </Link>

                  </td>

                  {/* Status */}
                  <td>

                    <span className="badge bg-success">
                      Available
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

export default Inventori