<?php
// Mengambil data dari form konfirmasi
$nama = $_POST['nama'];
$nim = $_POST['nim'];
$buku = $_POST['buku'];
$tanggal_pinjam = $_POST['tanggal_pinjam'];

// Menyimpan data peminjaman ke dalam file log (bisa diganti dengan penyimpanan ke database)
$file = fopen("peminjaman_log.txt", "a");
$data = "Nama: $nama | NIM: $nim | Buku: $buku | Tanggal Pinjam: $tanggal_pinjam\n";
fwrite($file, $data);
fclose($file);

// Menampilkan pesan sukses
echo "<h1>Peminjaman Buku Berhasil!</h1>";
echo "<p>Terima kasih, peminjaman buku Anda telah berhasil tercatat.</p>";
echo "<a href='index.html'>Kembali ke Halaman Utama</a>";
?>
