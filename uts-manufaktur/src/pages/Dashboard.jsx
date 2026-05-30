import React from "react";

function Dashboard({ dataLaporan }) {

  const totalProduksi = dataLaporan.reduce(
    (total, item) => total + item.produksi,
    0
  );

  const totalReject = dataLaporan.reduce(
    (total, item) => total + item.reject,
    0
  );

  const rataYield =
    dataLaporan.length > 0
      ? (
          dataLaporan.reduce(
            (total, item) => total + item.yield,
            0
          ) / dataLaporan.length
        ).toFixed(2)
      : 0;

  return (
    <div className="container py-4">

      <h2 className="mb-4 text-center text-md-start">
        Dashboard Produksi
      </h2>

      <div className="row g-4">

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card bg-primary text-white shadow h-100">
            <div className="card-body text-center">
              <h5 className="card-title">
                Total Produksi
              </h5>

              <h2 className="fw-bold">
                {totalProduksi}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card bg-success text-white shadow h-100">
            <div className="card-body text-center">
              <h5 className="card-title">
                Rata-rata Yield
              </h5>

              <h2 className="fw-bold">
                {rataYield}%
              </h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card bg-danger text-white shadow h-100">
            <div className="card-body text-center">
              <h5 className="card-title">
                Total Reject
              </h5>

              <h2 className="fw-bold">
                {totalReject}
              </h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;