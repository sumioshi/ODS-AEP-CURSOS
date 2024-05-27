document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://127.0.0.1:3002/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome: email, senha: password })
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
            redirectToIndex();
        } else {
            console.log("Login falhou!");
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
    }
});

function redirectToIndex() {
    window.location.href = "index.html";
}
