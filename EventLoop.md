### Conceitos Fundamentais: Call Stack, Callback Queue, Microtask Queue e Event Loop

Para entender como o JavaScript gerencia a execução de código, especialmente em operações assíncronas, é crucial compreender alguns conceitos fundamentais: **Call Stack**, **Callback Queue**, **Microtask Queue** e **Event Loop**.

#### 1. **Call Stack (Pilha de Chamadas)**

A **Call Stack** é uma estrutura de dados usada pelo JavaScript para manter o controle da execução das funções. Quando uma função é chamada, ela é adicionada ao topo da Call Stack. Quando a função termina, ela é removida do topo. JavaScript é uma linguagem **single-threaded**, o que significa que a Call Stack só pode processar uma função de cada vez.

#### 2. **Callback Queue (Fila de Callbacks)**

A **Callback Queue** é uma fila onde as funções **callback** (funções que são executadas após a conclusão de operações assíncronas, como `setTimeout` ou requisições HTTP) esperam para serem executadas. Quando a Call Stack está vazia, o **Event Loop** verifica a Callback Queue para ver se há algo a ser processado. Se houver, ele move a próxima função da fila para a Call Stack.

#### 3. **Microtask Queue (Fila de Microtarefas)**

A **Microtask Queue** é semelhante à Callback Queue, mas é usada para funções específicas, como aquelas criadas com `Promise`. As microtarefas têm prioridade mais alta do que as tarefas normais (callbacks). Quando a Call Stack está vazia, o Event Loop verifica primeiro a Microtask Queue antes de verificar a Callback Queue.

#### 4. **Event Loop**

O **Event Loop** é o mecanismo que permite ao JavaScript parecer assíncrono. Ele monitora continuamente a Call Stack e as filas (Callback Queue e Microtask Queue). Quando a Call Stack está vazia, o Event Loop pega o próximo item da Microtask Queue (se houver) ou da Callback Queue e o coloca na Call Stack para execução. Isso garante que as operações assíncronas sejam processadas assim que possível, sem interromper a execução do código síncrono.

### Exemplo Visual com o GIF

![Event Loop GIF](https://res.cloudinary.com/practicaldev/image/fetch/s--hPFPTZp2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/p54casaaz9oq0g8ztpi5.gif)

No GIF acima, você pode ver a interação entre a **Call Stack**, a **Callback Queue**, a **Microtask Queue**, e o **Event Loop**. 

- Quando uma função é chamada, ela entra na Call Stack.
- As funções assíncronas, como `setTimeout`, adicionam suas callbacks na Callback Queue após o tempo especificado.
- Promises resolvidas adicionam callbacks na Microtask Queue, que será processada antes da Callback Queue.
- O Event Loop monitora e garante que as tarefas sejam processadas em ordem e sem interrupção da execução síncrona do código.

### Resumo

- **Call Stack** processa funções síncronas.
- **Callback Queue** processa callbacks de operações assíncronas, como `setTimeout`.
- **Microtask Queue** processa callbacks de Promises, com prioridade mais alta.
- **Event Loop** gerencia a execução, garantindo que tudo seja processado na ordem correta.
