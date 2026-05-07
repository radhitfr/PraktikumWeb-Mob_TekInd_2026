import React from 'react'

import {
  useParams,
  Link
} from 'react-router-dom'

function DetailInventori() {

  // Mengambil parameter id dari URL
  const { id } = useParams()

  return (

    <div className="container text-center">

      <h1 className="mb-4">
        Detail Inventori
      </h1>

      <div className="card shadow p-4 border-0 rounded-4">

        <h3>
          ID Item: {id}
        </h3>

        <p className="text-muted">
          Data detail bahan baku dengan ID {id}
        </p>

        <div className="mt-3">

          <span className="badge bg-success fs-6">
            Status Supplier Available
          </span>

        </div>

        <Link
          to="/inventori"
          className="btn btn-primary mt-4"
        >
          Kembali ke Inventori
        </Link>

      </div>

    </div>

  )
}

export default DetailInventori