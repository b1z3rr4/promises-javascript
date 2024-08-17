# Documentação: Promises em JavaScript

## O que são Promises?

Promises são um conceito fundamental na programação assíncrona em JavaScript. Elas representam um valor que pode estar disponível agora, no futuro, ou nunca. Uma Promise é um objeto que pode estar em um dos seguintes estados:

- **Pending (Pendente)**: Estado inicial, antes da Promise ser resolvida ou rejeitada.
- **Fulfilled (Cumprida)**: A operação foi concluída com sucesso.
- **Rejected (Rejeitada)**: A operação falhou.

## Criando uma Promise

Você cria uma Promise com o construtor `Promise`, que recebe uma função chamada executor. Essa função executor tem dois parâmetros: `resolve` e `reject`. Você usa `resolve` para indicar que a operação foi bem-sucedida e `reject` para indicar que houve um erro.

### Exemplo de Criação de uma Promise

```javascript
const minhaPromise = new Promise((resolve, reject) => {
    // Simula uma operação assíncrona, como uma requisição HTTP
    setTimeout(() => {
        const sucesso = true; // Altere para false para simular uma falha
        if (sucesso) {
            resolve('A operação foi bem-sucedida!');
        } else {
            reject('A operação falhou.');
        }
    }, 2000);
});
```

## Consumindo Promises

Para lidar com o resultado de uma Promise, você usa os métodos `.then()` e `.catch()`. O método `.then()` é chamado quando a Promise é cumprida, e o método `.catch()` é chamado quando a Promise é rejeitada.

### Exemplo de Consumo de uma Promise

```javascript
minhaPromise
    .then((resultado) => {
        console.log(resultado); // Exibe 'A operação foi bem-sucedida!'
    })
    .catch((erro) => {
        console.error(erro); // Exibe 'A operação falhou.'
    });
```

## Encadeando Promises

Você pode encadear múltiplas Promises usando o método `.then()`. Cada `.then()` retorna uma nova Promise, o que permite criar uma cadeia de operações assíncronas.

### Exemplo de Encadeamento de Promises

```javascript
minhaPromise
    .then((resultado) => {
        console.log(resultado);
        return 'Próxima etapa concluída!';
    })
    .then((mensagem) => {
        console.log(mensagem); // Exibe 'Próxima etapa concluída!'
    })
    .catch((erro) => {
        console.error(erro);
    });
```

## Usando `Promise.all`

Se você precisa esperar por múltiplas Promises e fazer algo quando todas forem cumpridas, você pode usar `Promise.all`.

### Exemplo com `Promise.all`

```javascript
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Resultado 1'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Resultado 2'), 2000));

Promise.all([promise1, promise2])
    .then((resultados) => {
        console.log(resultados); // Exibe ['Resultado 1', 'Resultado 2']
    })
    .catch((erro) => {
        console.error(erro);
    });
```

## Usando `async` e `await`

`async` e `await` são uma forma mais simples de trabalhar com Promises. A palavra-chave `async` é usada para definir uma função assíncrona e `await` é usado dentro dessa função para esperar pela resolução de uma Promise.

### Exemplo com `async` e `await`

```javascript
async function minhaFuncaoAsync() {
    try {
        const resultado = await minhaPromise;
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    }
}

minhaFuncaoAsync();
```

## Conclusão

- **Promises** ajudam a lidar com operações assíncronas de forma mais eficiente e legível.
- **`.then()`** e **`.catch()`** são usados para consumir e tratar o resultado ou erro de uma Promise.
- **Encadeamento** permite a execução sequencial de operações assíncronas.
- **`Promise.all`** é útil para esperar que múltiplas Promises sejam concluídas.
- **`async/await`** fornece uma sintaxe mais clara e concisa para trabalhar com Promises.

--- 
