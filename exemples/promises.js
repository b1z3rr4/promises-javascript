const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sucesso = true;

        if (sucesso) {
            console.debug('A operação foi bem-sucedida!');
            resolve('A operação foi bem-sucedida!');
        } else {
            console.debug('A operação falhou.');
            reject('A operação falhou.');
        }
    }, 2000);
});

// async/await e o try/catch
async function executarPromise() {
    try {
        const meuValor = await minhaPromise;

        console.debug('minha promesa', meuValor);

        return 'da hora!'
    } catch (erro) {
        console.debug('Deu merda!');
    }
}

const meuResultado = await executarPromise();

console.debug(meuResultado);

console.debug('confia no processo');



// usando then/catch
// minhaPromise
//     .then((resposta) => {
//         console.debug('Entrou no then');
//         console.debug(resposta);
//     })
//     // Tratamento de erros
//     .catch((erro) => {    
//         console.debug('Entrou no catch');
//         console.debug(erro);
//     })
//     .finally(() => {
//         console.debug('Entrou no finally');
//         console.debug('Acabou!')
//     });


// const minhaVariavel = 'Luan nao mandou no chat, nao acertou!'

// console.debug(minhaVariavel);

// throw new Error('Ferrou moçada!');

// console.debug('1');

// cost minhavariavel = 'teste';