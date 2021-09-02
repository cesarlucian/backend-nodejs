var message:string   = "";
var response:boolean = true;

if(localStorage.getItem('tbClientes'))
{
    var tbClientes = JSON.parse(localStorage.getItem('tbClientes'));
}
else
{
    var tbClientes:any = [];
}


const openaccount: HTMLFormElement = document.querySelector('#openaccount');

openaccount.onsubmit = () => {
    let formData = new FormData(openaccount);

    // Variaveis
    let cpf:String             = formData.get('cpf') as String;
    let newpassword:String     = formData.get('newpassword')  as String;
    let confirmpassword:String = formData.get('confirmpassword')  as String;

    if(newpassword !== confirmpassword)
    {
        message  = "Senha e confirma senha não conferem."
        response = false;
    }
    else if(newpassword.length < 6)
    {
        message = "Sua senha deve conter 6 dígitos."
        response = false;
    }

    if(!validCPF(cpf))
    {
        message   = "CPF inválido, tente novamente.";
        response  = false;
    }

    if(response === false)
    {
        localStorage.setItem("error", message);
    }
    else
    {
        var accountnumber = Math.floor(Math.random() * 999999);
        var dvnumber      = Math.floor(Math.random() * 10);


        var cliente  = JSON.stringify(
            {
                cpf: cpf,
                password:newpassword,
                accountnumber: accountnumber,
                dvnumber:dvnumber
            }
        );

        tbClientes.push(cliente);
        localStorage.setItem("tbClientes", JSON.stringify(tbClientes));

        message = "Conta aberta com sucesso! O número da sua conta é: " + accountnumber + ", dígito verificador: " + dvnumber;
        localStorage.setItem("success", message);  
    }
    
    return true;
};

function validCPF(cpf)
{
    if (cpf == null) {
        return false;
    }
    if (cpf.length != 11) {
        return false;
    }
    if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
        return false;
    }
    let numero: number = 0;
    let caracter: string = '';
    let numeros: string = '0123456789';
    let j: number = 10;
    let somatorio: number = 0;
    let resto: number = 0;
    let digito1: number = 0;
    let digito2: number = 0;
    let cpfAux: string = '';
    cpfAux = cpf.substring(0, 9);
    for (let i: number = 0; i < 9; i++) {
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
    for (let i: number = 0; i < 10; i++) {
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
