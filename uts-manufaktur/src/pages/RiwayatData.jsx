import React from "react";

function RiwayatData({
  dataLaporan,
  setDataLaporan
}) {

  const handleDelete = (indexHapus) => {

    const dataBaru =
      dataLaporan.filter(
        (_, index) =>
          index !== indexHapus
      );

    setDataLaporan(dataBaru);

  };

  return (
    <div>

      <h2 className="mb-4">
        Tabel Riwayat Data
      </h2>

      <div className="table-responsive">

        <table className="table table-bordered table-striped">

          <thead className="table-dark">

            <tr>

              <th>No</th>
              <th>Tanggal</th>
              <th>Supervisor</th>
              <th>Shift</th>
              <th>Produksi</th>
              <th>Reject</th>
              <th>Netto</th>
              <th>Yield (%)</th>
              <th>Aksi</th>

            </tr>

          </thead>

          <tbody>

            {dataLaporan.length === 0 ? (

              <tr>
                <td
                  colSpan="9"
                  className="text-center py-4 text-muted"
                >
                  Belum ada data
                </td>
              </tr>

            ) : (

              dataLaporan.map((item, index) => (

                <tr key={index}>

                  <td>{index + 1}</td>

                  <td>{item.tanggal}</td>

                  <td>{item.supervisor}</td>

                  <td>{item.shift}</td>

                  <td>{item.produksi}</td>

                  <td>{item.reject}</td>

                  <td>{item.netto}</td>

                  <td>{item.yield}%</td>

                  <td>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        handleDelete(index)
                      }
                    >
                      Hapus
                    </button>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RiwayatData;