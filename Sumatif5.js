window.onload = function() {
    document.getElementById('tampilkanBtn').onclick = function() {
        var nama = document.getElementById('nama').value.trim();
        if (nama === "") { nama = "(tidak diisi)"; }

        var kelas = document.getElementById('kelas').value.trim();
        if (kelas === "") { kelas = "(tidak diisi)"; }

        var gender = "";
        var genderRadios = document.getElementsByName('gender');
        for (var i = 0; i < genderRadios.length; i++) {
            if (genderRadios[i].checked) {
                gender = genderRadios[i].value;
                break;
            }
        }
        if (gender === "") { gender = "(belum dipilih)"; }

        var selectedExtras = [];
        var extraCheckboxes = document.getElementsByName('extra');
        for (var k = 0; k < extraCheckboxes.length; k++) {
            if (extraCheckboxes[k].checked) {
                selectedExtras.push(extraCheckboxes[k].value);
            }
        }
        var extraResult = selectedExtras.length > 0 ? selectedExtras.join(", ") : "(tidak ada)";

        var jadwal = "";
        var jadwalRadios = document.getElementsByName('jadwal');
        for (var j = 0; j < jadwalRadios.length; j++) {
            if (jadwalRadios[j].checked) {
                jadwal = jadwalRadios[j].value;
                break;
            }
        }
        if (jadwal === "") { jadwal = "(belum dipilih)"; }

        var hasilText = "--- HASIL PENDAFTARAN ---\n" +
                        "Nama: " + nama + "\n" +
                        "Kelas: " + kelas + "\n" +
                        "Jenis Kelamin: " + gender + "\n" +
                        "Ekskul: " + extraResult + "\n" +
                        "Jadwal: " + jadwal;
        
        document.getElementById('hasil').innerText = hasilText;
    };

    document.getElementById('resetBtn').onclick = function() {
        document.getElementById('registrationForm').reset();
        document.getElementById('hasil').innerText = "Formulir telah direset. Silakan isi ulang data pendaftaran.";
    };
};