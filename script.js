document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Registrasi berhasil!');
    window.location.href = 'index.html';
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login berhasil!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Username atau password salah!');
    }
});

function logout() {
    alert('Anda telah logout.');
    window.location.href = 'index.html';
}
