import React, { useState } from "react";

function InputLaporan({ dataLaporan, setDataLaporan }) {
  const [supervisor, setSupervisor] = useState("");
  const [shift, setShift] = useState("");
  const [produksi, setProduksi] = useState("");
  const [reject, setReject] = useState("");
  const [kendala, setKendala] = useState("");

  const netto =
    Number(produksi) - Number(reject);

  const yieldPersen =
    Number(produksi) > 0
      ? (
          (netto / Number(produksi)) *
          100
        ).toFixed(2)
      : 0;

  const isFormValid =
    supervisor.trim() !== "" &&
    shift !== "" &&
    Number(produksi) > 0 &&
    Number(reject) >= 0 &&
    Number(reject) <= Number(produksi);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    const laporanBaru = {
      id: Date.now(),
      tanggal: new Date().toLocaleDateString(),
      supervisor,
      shift,
      produksi: Number(produksi),
      reject: Number(reject),
      netto,
      yield: Number(yieldPersen),
      kendala,
    };

    const dataBaru = [
      ...dataLaporan,
      laporanBaru,
    ];

    setDataLaporan(dataBaru);

    setSupervisor("");
    setShift("");
    setProduksi("");
    setReject("");
    setKendala("");
  };

  return (
    <div>
      <h2 className="mb-4">
        Input Laporan Harian
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-3">
          <label className="form-label">
            Nama Supervisor
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Masukkan nama supervisor"
            value={supervisor}
            onChange={(e) =>
              setSupervisor(e.target.value)
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Shift
          </label>

          <select
            className="form-select"
            value={shift}
            onChange={(e) =>
              setShift(e.target.value)
            }
          >
            <option value="">
              Pilih Shift
            </option>

            <option value="Pagi">
              Pagi
            </option>

            <option value="Siang">
              Siang
            </option>

            <option value="Malam">
              Malam
            </option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Produksi
          </label>

          <input
            type="number"
            className="form-control"
            value={produksi}
            onChange={(e) =>
              setProduksi(e.target.value)
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Reject
          </label>

          <input
            type="number"
            className={`form-control ${
              Number(reject) >
              Number(produksi)
                ? "is-invalid"
                : ""
            }`}
            value={reject}
            onChange={(e) =>
              setReject(e.target.value)
            }
          />

          <div className="invalid-feedback">
            Reject tidak boleh lebih besar
            dari Produksi
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Catatan Kendala
          </label>

          <textarea
            rows="3"
            className="form-control"
            value={kendala}
            onChange={(e) =>
              setKendala(e.target.value)
            }
          ></textarea>
        </div>

        <div className="mb-3">
          <div className="alert alert-info">
            <h6>Netto: {netto}</h6>
            <h6>
              Yield: {yieldPersen}%
            </h6>
          </div>
        </div>

        {!isFormValid && (
          <div className="alert alert-warning">
            Lengkapi data wajib terlebih dahulu.
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid}
        >
          Simpan Laporan
        </button>
      </form>
    </div>
  );
}

export default InputLaporan;