- Este projeto não possui interação com banco de dados.

- Este projeto não possui validações de número de conta corrente ou conta poupança pois iria desviar o objetivo do teste.

- As contas geradas e números verificadores são números aleatórios.

- Este projeto não possui hash de senha pois iria desviar o objetivo do teste não sendo esse um dos requisitos, como tela de login por exemplo.

- Este projeto possui validações básicas de login, não possui criptografias e servem apenas para a conclusão do teste.

- A unica função ou linha de código que não foi de minha autoria, foi a função "validCPF" no arquivo openaccount.ts, pois peguei pronta na internet. Pode ser encontrada em: https://github.com/luis-ten/validar-cpf

- As contas e dados são salvos em um localStorage chamado "tbClientes" e a validação de login é feita apenas verificando se existe o registro no mesmo.

-

Obs: utilizei o comando tsc nos arquivos typescript para realizar testes no navegador.