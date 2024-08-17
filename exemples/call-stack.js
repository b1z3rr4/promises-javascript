console.log('Tarefa 1'); // sincrono


setTimeout(() => {
    console.log('Tarefa 2'); // assincrono
}, 0);

Promise.resolve().then(() => { // assincrono
    console.log('Tarefa 3');
})

console.log('Tarefa 4'); // sincrono
console.log('Tarefa 5'); // sincronso

/**
 
    Call stack

    -----------------------------


    console.log('Tarefa 1')
    setTimeout(() => {
        console.log('Tarefa 2');
    }, 1000)
    console.log('Tarefa 3')
    -----------------------------

    Call stack

    -----------------------------



    setTimeout(() => {
        console.log('Tarefa 2');
    }, 1000)
    console.log('Tarefa 3')
    -----------------------------

    Call stack

    -----------------------------



    console.log('Tarefa 3')
    -----------------------------


    Callback queue

    -----------------------------




    setTimeout(() => {
        console.log('Tarefa 2');
    }, 1000)
    -----------------------------
    
    Call stack

    -----------------------------


    -----------------------------

    Call stack

    -----------------------------

    console.log('Tarefa 2');
    -----------------------------

    Call stack

    -----------------------------


    -----------------------------

 */