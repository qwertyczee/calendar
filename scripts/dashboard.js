document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');

    // Funkce pro odhlášení
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedIn');
        window.location.href = 'index.html';
    });

    // Zpracování formulářů (pouze příklad, bez skutečné logiky backendu)
    const createServerForm = document.getElementById('create-server-form');
    const joinServerForm = document.getElementById('join-server-form');

    if (createServerForm) {
        createServerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const serverName = document.getElementById('server-name').value;
            console.log('Vytvořit server:', serverName);
            // Zde byste provedli logiku pro vytvoření serveru
        });
    }

    if (joinServerForm) {
        joinServerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const serverId = document.getElementById('server-id').value;
            const serverPassword = document.getElementById('server-password').value;
            console.log('Připojit se k serveru:', serverId, serverPassword);
            // Zde byste provedli logiku pro připojení k serveru
        });
    }
});
