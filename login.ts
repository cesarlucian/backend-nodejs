var message:string          = "";
var response:boolean = true;

if(localStorage.getItem('tbClientes'))
{
    var tbClientes = JSON.parse(localStorage.getItem('tbClientes'));
}
else
{
    var tbClientes:any = [];
}

const login: HTMLFormElement = document.querySelector('#login');

login.onsubmit = () => {

    let formData = new FormData(login);

    let cpf:string = formData.get('cpf') as string;
    let password:string      = formData.get('password')  as string;

    if(verifyLogin(cpf, password) === true)
    {
        response = true;
        localStorage.setItem('login', cpf);
        window.location.replace("index.html");
    }
    else
    {
        response = false;
        message  = "CPF ou senha incorretos.";
        localStorage.setItem('error', message);

        return true;
    }

    return false;
};

function verifyLogin(cpf, password)
{
    if(JSON.stringify(tbClientes).includes(cpf) && JSON.stringify(tbClientes).includes(password))
    {
        return true;
    }
    else
    {
        return false;
    }
}
