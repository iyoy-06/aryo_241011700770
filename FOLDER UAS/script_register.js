// Menyimpan data pengguna di Local Storage
function saveUserData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const membership = document.getElementById('membership').value;

    // Menyimpan data ke Local Storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('membership', membership);

    // Tampilkan konfirmasi
    alert('Data telah disimpan di Local Storage!');
}

// Mengambil dan menampilkan data yang disimpan
function displayUserData() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const membership = localStorage.getItem('membership');

    document.getElementById('name-display').textContent = name;
    document.getElementById('email-display').textContent = email;
    document.getElementById('membership-display').textContent = membership;
}
