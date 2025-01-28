function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    var mensagemValidacao = document.getElementById('mensagem-validacao');
    
    if (nome === '' || email === '' || mensagem === '') {
        mensagemValidacao.textContent = 'Por favor, preencha todos os campos.';
        mensagemValidacao.style.color = 'red';
        return false;
    }
    
    if (!validarEmail(email)) {
        mensagemValidacao.textContent = 'Por favor, insira um e-mail válido.';
        mensagemValidacao.style.color = 'red';
        return false;
    }

    mensagemValidacao.textContent = 'Mensagem enviada com sucesso!';
    mensagemValidacao.style.color = 'green';
    return true;
}

function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
