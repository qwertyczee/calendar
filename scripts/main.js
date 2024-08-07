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
    const toggleRegPassword = document.getElementById('toggle-reg-password');
    const toggleLoginPassword = document.getElementById('toggle-login-password');
    const regPassword = document.getElementById('reg-password');
    const loginPassword = document.getElementById('login-password');

    function showAuthPanel() {
        console.log('Zobrazení autentizačního panelu');
        overlay.classList.remove('hidden');
        authPanel.classList.remove('hidden');
    }

    function hideAuthPanel() {
        console.log('Skrytí autentizačního panelu');
        overlay.classList.add('hidden');
        authPanel.classList.add('hidden');
    }

    function showRegisterForm() {
        console.log('Zobrazení registračního formuláře');
        registerFormContainer.classList.remove('hidden');
        loginFormContainer.classList.add('hidden');
    }

    function showLoginForm() {
        console.log('Zobrazení přihlašovacího formuláře');
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
        hideAuthPanel();
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
            const email = document.getElementById('reg-username').value;
            const password = document.getElementById('reg-password').value;
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    console.log('Registrován:', userCredential.user);
                    hideAuthPanel();
                })
                .catch((error) => {
                    console.error('Chyba při registraci:', error);
                    alert(error.message);
                });
        });
    }

    // Zpracování přihlášení
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    console.log('Přihlášen:', userCredential.user);
                    window.location.href = 'dashboard.html';
                })
                .catch((error) => {
                    console.error('Chyba při přihlášení:', error);
                    alert('Špatné uživatelské jméno nebo heslo');
                });
        });
    }

    // Zobrazení/skrytí hesla
    function togglePasswordVisibility(input, button) {
        button.addEventListener('click', () => {
            if (input.type === 'password') {
                input.type = 'text';
                button.textContent = 'Skrýt';
            } else {
                input.type = 'password';
                button.textContent = 'Zobrazit';
            }
        });
    }

    if (toggleRegPassword && regPassword) {
        togglePasswordVisibility(regPassword, toggleRegPassword);
    }

    if (toggleLoginPassword && loginPassword) {
        togglePasswordVisibility(loginPassword, toggleLoginPassword);
    }
});
