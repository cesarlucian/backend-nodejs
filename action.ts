// Formulario
const index: HTMLFormElement = document.querySelector('#index');

var message          = "";
var response:boolean = false;

index.onsubmit = () => {

    let formData = new FormData(index);

    // Variaveis
    let transactiontype  = formData.get('transactiontype');
    let accounttype      = formData.get('accounttype');
    let accountnumber    = formData.get('accountnumber');
    let dvnumber         = formData.get('dvnumber');
    let amount           = formData.get('amount');

    
    
    if(transactiontype === '0') // Depósito
    {
        switch(accounttype)
        {
            case '0': // Conta Corrente
            //
            response     = true; 
            break;

            case '1': // Conta Poupança
            //
            response     = true;  
            break;

            default:
            message      = "Não foi possível efetuar a transação tente novamente";
            response     = false;
            break;
        } 
    }
    else if(transactiontype === '1') // Saque
    {
        switch(accounttype)
        {
            case '0': // Conta Corrente
            //
            response     = true; 
            break;

            case '1': // Conta Poupança
            //
            response     = true; 
            break;

            default:
            message      = "Não foi possível efetuar a transação tente novamente";
            response     = false;
            break;
        }  
    }
    else
    {
        message      = "Não foi possível efetuar a transação tente novamente";
        response     = false;
    }
    
    if(response === false)
    {
        localStorage.setItem("error", message);
    }
    
    return true;
};


