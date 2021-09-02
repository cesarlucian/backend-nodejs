var message = "";
var response = true;
if (localStorage.getItem('tbClientes')) {
    var tbClientes = JSON.parse(localStorage.getItem('tbClientes'));
}
else {
    var tbClientes = [];
}
var login = document.querySelector('#login');
login.onsubmit = function () {
    var formData = new FormData(login);
    var cpf = formData.get('cpf');
    var password = formData.get('password');
    if (verifyLogin(cpf, password) === true) {
        response = true;
        localStorage.setItem('login', cpf);
        window.location.replace("index.html");
    }
    else {
        response = false;
        message = "CPF ou senha incorretos.";
        localStorage.setItem('error', message);
        return true;
    }
    return false;
};
function verifyLogin(cpf, password) {
    if (JSON.stringify(tbClientes).includes(cpf) && JSON.stringify(tbClientes).includes(password)) {
        return true;
    }
    else {
        return false;
    }
}
