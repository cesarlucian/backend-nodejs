// Formulario
const transaction: HTMLFormElement = document.querySelector('#transaction');

var session    = localStorage.getItem('login');
var taxa = 0.30;

var message:string   = "";
var response:boolean = false;

transaction.onsubmit = () => {

    let formData = new FormData(transaction);

    // Variaveis
    let transactiontype:string  = formData.get('transactiontype') as string;
    let accounttype:string      = formData.get('accounttype') as string;
    let amount:string           = formData.get('amount') as string;

    if(transactiontype === '0') // Depósito
    {
        switch(accounttype)
        {
            case '0': 

            var amountr = amount.replace(".", "");
            var amountarr = amount.split(".");

            for (var i = 0; i < amountarr.length; i++) {
                amountr = amountr.replace('.', '');
            }

            amountr = amountr.replace(",", ".");

            if(localStorage.getItem(session+'withdrawvalue'))
            {
                let total = parseFloat(amountr) + parseFloat(localStorage.getItem(session+'withdrawvalue'));
                localStorage.setItem(session+'withdrawvalue', ''+total);
            }
            else
            {
                localStorage.setItem(session+'withdrawvalue', amountr);
            }

            message      = "Depósito efetuado com sucesso!";
            response     = true; 
            break;
            case '1':

            var amountr = amount.replace(".", "");
            var amountarr = amount.split(".");

            for (var i = 0; i < amountarr.length; i++) {
                amountr = amountr.replace('.', '');
            }

            amountr = amountr.replace(",", ".");

            if(localStorage.getItem(session+'withdrawvalue'))
            {
                let total = parseFloat(amountr) + parseFloat(localStorage.getItem(session+'withdrawvalue'));
                localStorage.setItem(session+'withdrawvalue', ''+total);
            }
            else
            {
                localStorage.setItem(session+'withdrawvalue', amountr);
            }

            message      = "Depósito efetuado com sucesso!";
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
            case '0':
                
            var amountr = amount.replace(".", "");
            var amountarr = amount.split(".");

            for (var i = 0; i < amountarr.length; i++) {
                amountr = amountr.replace('.', '');
            }

            amountr = amountr.replace(",", ".");

            if(localStorage.getItem(session+'withdrawlimitvalue'))
            {
                if(parseFloat(amountr) > parseFloat(localStorage.getItem(session+'withdrawlimitvalue')))
                {
                    message  = "Limite de saque de B$ " + parseFloat(localStorage.getItem(session+'withdrawlimitvalue'));
                    response = false;
                }
                else if(parseFloat(amountr) > parseFloat("600.00"))
                {
                    message  = "Limite de saque de B$ 600.";
                    response = false;
                }
                else
                {
                    let total = parseFloat(localStorage.getItem(session+'withdrawlimitvalue')) - parseFloat(amountr);
                    localStorage.setItem(session+'withdrawlimitvalue', ''+total);
                }
            }
            else
            {   
                if(!localStorage.getItem(session+'withdrawvalue'))
                {
                    message = "Limite insuficiente.";
                    response = false;
                }
                else if(parseFloat(amountr) > parseFloat("600.00"))
                {
                    message  = "Limite de saque de B$ 600.";
                    response = false;
                }
                else
                {
                    let total = parseFloat("600.00") - parseFloat(amountr);
                    localStorage.setItem(session+'withdrawlimitvalue', ''+total);
                }
            }
            
            if(localStorage.getItem(session+'withdrawvalue'))
            {
                if(parseFloat(amountr) > parseFloat(localStorage.getItem(session+'withdrawvalue')))
                {
                    message = "Valor excede o limite disponível.";
                    response = false;
                }
                else
                {
                    let total = parseFloat(localStorage.getItem(session+'withdrawvalue')) - parseFloat(amountr) - parseFloat("0.30");
                    localStorage.setItem(session+'withdrawvalue', ''+total);
                }
            }
            else
            {
                message = "Limite insuficiente.";
                response = false;
            }

            if(response !== false)
            {
                message      = "Saque efetuado com sucesso!";
                response     = true;
            }
 
            break;
            case '1':

            var amountr = amount.replace(".", "");
            var amountarr = amount.split(".");

            for (var i = 0; i < amountarr.length; i++) {
                amountr = amountr.replace('.', '');
            }

            amountr = amountr.replace(",", ".");

            if(localStorage.getItem(session+'withdrawlimitvalue'))
            {
                if(parseFloat(amountr) > parseFloat(localStorage.getItem(session+'withdrawlimitvalue')))
                {
                    message  = "Limite de saque de B$ " + parseFloat(localStorage.getItem(session+'withdrawlimitvalue'));
                    response = false;
                }
                else if(parseFloat(amountr) > parseFloat("600.00"))
                {
                    message  = "Limite de saque de B$ 600.";
                    response = false;
                }
                else
                {
                    let total = parseFloat(localStorage.getItem(session+'withdrawlimitvalue')) - parseFloat(amountr);
                    localStorage.setItem(session+'withdrawlimitvalue', ''+total);
                }
            }
            else
            {   
                if(!localStorage.getItem(session+'withdrawvalue'))
                {
                    message = "Limite insuficiente.";
                    response = false;
                }
                else if(parseFloat(amountr) > parseFloat("600.00"))
                {
                    message  = "Limite de saque de B$ 600.";
                    response = false;
                }
                else if(parseFloat(amountr) > parseFloat("600.00"))
                {
                    message  = "Limite de saque de B$ 600.";
                    response = false;
                }
                else
                {
                    let total = parseFloat("600.00") - parseFloat(amountr);
                    localStorage.setItem(session+'withdrawlimitvalue', ''+total);
                }
            }
            
            if(localStorage.getItem(session+'withdrawvalue'))
            {
                if(parseFloat(amountr) > parseFloat(localStorage.getItem(session+'withdrawvalue')))
                {
                    message = "Valor excede o limite disponível.";
                    response = false;
                }
                else if(parseFloat(amountr) > parseFloat("600.00"))
                {
                    message  = "Limite de saque de B$ 600.";
                    response = false;
                }
                else
                {
                    let total = parseFloat(localStorage.getItem(session+'withdrawvalue')) - parseFloat(amountr) - parseFloat("0.30");
                    localStorage.setItem(session+'withdrawvalue', ''+total);
                }
            }
            else
            {
                message = "Limite insuficiente.";
                response = false;
            }

            if(response !== false)
            {
                message      = "Saque efetuado com sucesso!";
                response     = true;
            }
     
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
    else
    {
        localStorage.setItem("success", message);
    }
    
    return true;
    //return false;
};



