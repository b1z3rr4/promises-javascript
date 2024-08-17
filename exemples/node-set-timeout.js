// function esperarPorLog() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('log');
//         }, 2000);
//     });
// }

// async function executar() {
//     const valor = await esperarPorLog();
//     console.log(valor);
// }

function esperarPorLog() {
    let meulog;

    setTimeout(() => {
        meulog = 'log'
        console.log(meulog)
    }, 2000);

    return meulog;
}

function executar() {
    const valor = esperarPorLog();
    console.log(valor);
}

executar();