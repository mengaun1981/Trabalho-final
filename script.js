const formulario = document.getElementById('cadastroForm');
const tabela = document.getElementById('tabelaCadastros').getElementsByTagName('tbody')[0];

let cadastros = [];

function atualizarTabela() {
    tabela.innerHTML = '';

    cadastros.forEach((cadastro, index) => {
        const linha = tabela.insertRow();

        const celulaNumero = linha.insertCell(0);
        const celulaNome = linha.insertCell(1);
        const celulaEmail = linha.insertCell(2);

        celulaNumero.textContent = index + 1;
        celulaNome.textContent = cadastro.nome;
        celulaEmail.textContent = cadastro.email;
    });
}

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    cadastros.push({ nome, email });

    atualizarTabela();

    formulario.reset();
});
