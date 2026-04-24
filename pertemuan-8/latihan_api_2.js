document.addEventListener("DOMContentLoaded", function () {

    console.log("JS TERBACA");

    const btnLoad = document.getElementById('btnLoad');
    const btnFilter = document.getElementById('btnFilter');
    const btnSubmitTambah = document.getElementById('btnSubmitTambah');
    const container = document.getElementById('containerKaryawan');
    const loading = document.getElementById('loading');

    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    let dataLocal = [];
    btnLoad.addEventListener('click', function () {

        console.log("TOMBOL LOAD DIKLIK");

        loading.classList.remove('d-none');
        container.innerHTML = '';

        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Gagal mengambil data');
                }
                return response.json();
            })
            .then(data => {

                console.log("DATA GET:", data);
                console.table(data); 

                dataLocal = data;

                renderData(dataLocal); 

            })
            .catch(error => {
                console.error("ERROR GET:", error);
                container.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
            })
            .finally(() => {
                loading.classList.add('d-none');
            });
    });

    // =========================
    // FILTER DATA (KOTA "s")
    // =========================
    btnFilter.addEventListener('click', function () {

        console.log("TOMBOL FILTER DIKLIK");

        if (dataLocal.length === 0) {
            alert("Load data dulu!");
            return;
        }

        loading.classList.remove('d-none');
        container.innerHTML = '';

        try {
            const filtered = dataLocal.filter(k =>
                k.address?.city?.toLowerCase().includes('s')
            );

            console.log("HASIL FILTER:", filtered);
            console.table(filtered); 

            // INFO JUMLAH DATA
            const info = document.createElement('div');
            info.className = 'col-12 mb-3';
            info.innerHTML = `
                <div class="alert alert-info">
                    Menampilkan <strong>${filtered.length}</strong> dari ${dataLocal.length}
                </div>
            `;
            container.appendChild(info);

            renderData(filtered);

        } catch (error) {
            console.error("ERROR FILTER:", error);
        } finally {
            loading.classList.add('d-none');
        }
    });

    // =========================
    // POST DATA
    // =========================
    btnSubmitTambah.addEventListener('click', async function () {

        console.log("TOMBOL SIMPAN DIKLIK");

        const nama = document.getElementById('inputNama').value;
        const email = document.getElementById('inputEmail').value;
        const perusahaan = document.getElementById('inputPerusahaan').value;
        const kota = document.getElementById('inputKota').value;

        if (!nama || !email) {
            alert('Nama dan Email wajib diisi!');
            return;
        }

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nama,
                    email: email,
                    company: {
                        name: perusahaan || 'Tidak diisi'
                    },
                    address: {
                        city: kota || 'Tidak diisi'
                    }
                })
            });

            if (!response.ok) {
                throw new Error('Gagal POST data');
            }

            const result = await response.json();

            console.log("=== HASIL POST ===");
            console.log("Data berhasil ditambahkan:", result);
            console.table(result); // 

            // Tambah ke data lokal
            dataLocal.push(result);

            renderData(dataLocal);

            alert(`Berhasil! Data "${result.name}" dikirim`);

            // Tutup modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalTambah'));
            if (modal) modal.hide();

            // Reset input
            document.getElementById('inputNama').value = '';
            document.getElementById('inputEmail').value = '';
            document.getElementById('inputPerusahaan').value = '';
            document.getElementById('inputKota').value = '';

        } catch (error) {
            console.error("ERROR POST:", error);
            alert(error.message);
        }
    });
    function renderData(data) {

        data.forEach(karyawan => {

            const col = document.createElement('div');
            col.className = 'col-md-4 mb-3';

            col.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h5>${karyawan.name || '-'}</h5>
                        <p>${karyawan.email || '-'}</p>
                        <p>${karyawan.company?.name || '-'}</p>
                        <small>${karyawan.address?.city || '-'}</small>
                    </div>
                </div>
            `;

            container.appendChild(col);
        });
    }

});