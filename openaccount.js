var message = "";
var response = true;
if (localStorage.getItem('tbClientes')) {
    var tbClientes = JSON.parse(localStorage.getItem('tbClientes'));
}
else {
    var tbClientes = [];
}
var openaccount = document.querySelector('#openaccount');
openaccount.onsubmit = function () {
    var formData = new FormData(openaccount);
    // Variaveis
    var cpf = formData.get('cpf');
    var newpassword = formData.get('newpassword');
    var confirmpassword = formData.get('confirmpassword');
    if (newpassword !== confirmpassword) {
        message = "Senha e confirma senha não conferem.";
        response = false;
    }
    else if (newpassword.length < 6) {
        message = "Sua senha deve conter 6 dígitos.";
        response = false;
    }
    if (!validCPF(cpf)) {
        message = "CPF inválido, tente novamente.";
        response = false;
    }
    if (response === false) {
        localStorage.setItem("error", message);
    }
    else {
        var accountnumber = Math.floor(Math.random() * 999999);
        var dvnumber = Math.floor(Math.random() * 10);
        var cliente = JSON.stringify({
            cpf: cpf,
            password: newpassword,
            accountnumber: accountnumber,
            dvnumber: dvnumber
        });
        tbClientes.push(cliente);
        localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
        message = "Conta aberta com sucesso! O número da sua conta é: " + accountnumber + ", dígito verificador: " + dvnumber;
        localStorage.setItem("success", message);
    }
    return true;
};
function validCPF(cpf) {
    if (cpf == null) {
        return false;
    }
    if (cpf.length != 11) {
        return false;
    }
    if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
        return false;
    }
    var numero = 0;
    var caracter = '';
    var numeros = '0123456789';
    var j = 10;
    var somatorio = 0;
    var resto = 0;
    var digito1 = 0;
    var digito2 = 0;
    var cpfAux = '';
    cpfAux = cpf.substring(0, 9);
    for (var i = 0; i < 9; i++) {
        caracter = cpfAux.charAt(i);
        if (numeros.search(caracter) == -1) {
            return false;
        }
        numero = Number(caracter);
        somatorio = somatorio + (numero * j);
        j--;
    }
    resto = somatorio % 11;
    digito1 = 11 - resto;
    if (digito1 > 9) {
        digito1 = 0;
    }
    j = 11;
    somatorio = 0;
    cpfAux = cpfAux + digito1;
    for (var i = 0; i < 10; i++) {
        caracter = cpfAux.charAt(i);
        numero = Number(caracter);
        somatorio = somatorio + (numero * j);
        j--;
    }
    resto = somatorio % 11;
    digito2 = 11 - resto;
    if (digito2 > 9) {
        digito2 = 0;
    }
    cpfAux = cpfAux + digito2;
    if (cpf != cpfAux) {
        return false;
    }
    else {
        return true;
    }
}
