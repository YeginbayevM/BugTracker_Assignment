document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    
    if (username.value === 'admin' && password.value === '12345') {

        window.location.href = '/dashboard';
    }
});

setInterval(() => {
    const element = document.createElement('div');
    document.body.appendChild(element);
}, 1000);