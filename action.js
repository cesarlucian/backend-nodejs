// Formulario
var index = document.querySelector('#index');
var message = "";
var response = false;
index.onsubmit = function () {
    var formData = new FormData(index);
    // Variaveis
    var transactiontype = formData.get('transactiontype');
    var accounttype = formData.get('accounttype');
    var accountnumber = formData.get('accountnumber');
    var dvnumber = formData.get('dvnumber');
    var amount = formData.get('amount');
    if (transactiontype === '0') // Depósito
     {
        switch (accounttype) {
            case '0': // Conta Corrente
                //
                response = true;
                break;
            case '1': // Conta Poupança
                //
                response = true;
                break;
            default:
                message = "Não foi possível efetuar a transação tente novamente";
                response = false;
                break;
        }
    }
    else if (transactiontype === '1') // Saque
     {
        switch (accounttype) {
            case '0': // Conta Corrente
                //
                response = true;
                break;
            case '1': // Conta Poupança
                //
                response = true;
                break;
            default:
                message = "Não foi possível efetuar a transação tente novamente";
                response = false;
                break;
        }
    }
    else {
        message = "Não foi possível efetuar a transação tente novamente";
        response = false;
    }
    if (response === false) {
        localStorage.setItem("error", message);
    }
    return true;
};
