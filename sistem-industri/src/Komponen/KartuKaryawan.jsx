// 1. Import React
import React from 'react';

// 2. Komponen dengan destructuring props
function KartuKaryawan({ nama, jabatan, bagian }) {
  // Logika penentuan warna badge berdasarkan jabatan
  let badgeColor = 'bg-primary';
  if (jabatan === 'Manager') badgeColor = 'bg-danger';
  if (jabatan === 'QC') badgeColor = 'bg-success';
  if (jabatan === 'Operator') badgeColor = 'bg-info text-dark';

  return (
    <div className="card shadow-sm p-3 mb-3 kartu-kustom">
      <div className="card-body">

        {/* Nama */}
        <h5 className="card-title fw-bold mb-3">{nama}</h5>

        {/* Jabatan (label + badge, tidak double) */}
        <p className="mb-2 text-muted">
          Jabatan:{' '}
          <span className={`badge ${badgeColor}`}>
            {jabatan}
          </span>
        </p>

        {/* Bagian */}
        <p className="mb-0 text-muted">
          Bagian: <strong className="text-dark">{bagian}</strong>
        </p>

      </div>
    </div>
  );
}

// 3. Export
export default KartuKaryawan;