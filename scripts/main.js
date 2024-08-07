document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');
    const overlay = document.getElementById('overlay');
    const authPanel = document.getElementById('auth-panel');
    const closeBtn = document.getElementById('close-btn');
    const registerFormContainer = document.getElementById('register-form-container');
    const loginFormContainer = document.getElementById('login-form-container');
    const switchToLogin = document.getElementById('switch-to-login');
    const switchToRegister = document.getElementById('switch-to-register');

    function showAuthPanel() {
        overlay.style.display = 'flex';
        authPanel.classList.remove('hidden');
    }

    function showRegisterForm() {
        registerFormContainer.classList.remove('hidden');
        loginFormContainer.classList.add('hidden');
    }

    function showLoginForm() {
        registerFormContainer.classList.add('hidden');
        loginFormContainer.classList.remove('hidden');
    }

    registerBtn.addEventListener('click', () => {
        showAuthPanel();
        showRegisterForm();
    });

    loginBtn.addEventListener('click', () => {
        showAuthPanel();
        showLoginForm();
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginForm();
    });

    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        showRegisterForm();
    });

    // Zpracování registrace
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('reg-username').value;
            const password = document.getElementById('reg-password').value;
            // Uložení uživatelských údajů do localStorage (pouze příklad)
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            console.log('Registrovat:', username, password);
            // Zavření panelu po registraci
            overlay.style.display = 'none';
        });
    }

    // Zpracování přihlášení
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');
            if (username === storedUsername && password === storedPassword) {
                // Uložení přihlašovacího stavu
                localStorage.setItem('loggedIn', 'true');
                console.log('Přihlášení úspěšné:', username);
                window.location.href = 'dashboard.html';
            } else {
                alert('Špatné uživatelské jméno nebo heslo');
            }
        });
    }
});
