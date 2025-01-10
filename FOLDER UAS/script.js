function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = 'user'; // Username yang valid
    const validPassword = 'password'; // Password yang valid

    if (username === validUsername && password === validPassword) {
        window.location.href = 'dashboard.html'; // Redirect ke dashboard jika login berhasil
    } else {
        document.getElementById('error-message').textContent = 'Username atau password salah!';
    }
}
