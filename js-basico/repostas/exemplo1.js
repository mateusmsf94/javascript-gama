/* | Exemplo 01 | Descrição |
| --- | --- |
| `Variaveis` | Vamos criar variaveis usando let, const e var, atribuir valores,
 identificar comportamentos e saídas quando tentarmos recuperar. | */

var acessoGlobal = 'Mateus';

{
    let acessoLocal = 'somente neste escopo';
    console.log(acessoLocal)
}

const fixo = 'nao mudo mais de valor'