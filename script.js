document.getElementById('userButton').addEventListener('click', function() {
    document.getElementById('userRegisterContainer').style.display = 'block';
    document.getElementById('productRegisterContainer').style.display = 'none';
    document.getElementById('clientRegisterContainer').style.display = 'none';
});

document.getElementById('productButton').addEventListener('click', function() {
    document.getElementById('productRegisterContainer').style.display = 'block';
    document.getElementById('userRegisterContainer').style.display = 'none';
    document.getElementById('clientRegisterContainer').style.display = 'none';
});

document.getElementById('clientButton').addEventListener('click', function() {
    document.getElementById('clientRegisterContainer').style.display = 'block';
    document.getElementById('userRegisterContainer').style.display = 'none';
    document.getElementById('productRegisterContainer').style.display = 'none';    
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    // Verificação de complexidade de senha
    let hasUpperCase = /[A-Z]/.test(password);
    let hasLowerCase = /[a-z]/.test(password);
    let hasNumbers = /\d/.test(password);
    let hasNonalphas = /\W/.test(password);
    if (password.length < 8 || !hasUpperCase || !hasLowerCase || !hasNumbers || !hasNonalphas) {
        alert('A senha deve ter pelo menos 8 caracteres, incluir pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
        return;
    }

    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: password,
        address: document.getElementById('address').value
    };

    console.log(user);
});


document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let product = {
        name: document.getElementById('productName').value,
        description: document.getElementById('productDescription').value,
        price: document.getElementById('productPrice').value
    };

    console.log(product);
});

        
// Função para validar um número de telefone
function validatePhoneNumber(phoneNumber) {
    // Utilize uma expressão regular para verificar se o número de telefone é válido
    const phonePattern = /^[0-9]{10}$/; // Esta regex verifica se o número tem exatamente 10 dígitos (ajuste conforme necessário)

    return phonePattern.test(phoneNumber);
}

// Adicione o evento de envio do formulário
document.getElementById('ClientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let client = {
        name: document.getElementById('clientname').value,
        email: document.getElementById('emailclient').value,
        address: document.getElementById('addressclient').value,
        cpf: document.getElementById('cpf').value,
        rg: document.getElementById('rg').value,
        maritalStatus: document.getElementById('maritalStatus').value,
        gender: document.getElementById('gender').value,
        phone: document.getElementById('phone').value,
        credito: document.getElementById('limitcredito').value,
    };

    // Verificar se o número de telefone é válido
    if (!validatePhoneNumber(client.phone)) {
        // Número de telefone não é válido, exiba um alerta e impeça o envio do formulário
        alert("Por favor, insira um número de telefone válido.");
        return;
    }

    // Se o número de telefone for válido, continue com o processamento
    console.log(client);
});



