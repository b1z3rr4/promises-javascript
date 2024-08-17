# Documentação: `XMLHttpRequest` e Requisições HTTP

## O que são Requisições HTTP?

Requisições HTTP (HyperText Transfer Protocol) são usadas para enviar e receber dados entre um cliente (como um navegador web) e um servidor. O HTTP é o protocolo fundamental da web e é utilizado para carregar páginas da web, enviar dados de formulários, interagir com APIs, entre outras coisas.

### Métodos HTTP Comuns

1. **GET**: Solicita dados de um servidor. Usado para recuperar informações.
2. **POST**: Envia dados para um servidor. Usado para criar novos recursos ou enviar dados.
3. **PUT**: Atualiza dados em um servidor. Usado para modificar recursos existentes.
4. **DELETE**: Remove dados de um servidor. Usado para excluir recursos.

### Status Codes Comuns

- **200 OK**: Requisição bem-sucedida.
- **201 Created**: Recurso criado com sucesso.
- **204 No Content**: Requisição bem-sucedida, mas sem conteúdo retornado.
- **400 Bad Request**: Requisição malformada.
- **404 Not Found**: Recurso não encontrado.
- **500 Internal Server Error**: Erro no servidor.

## O que é `XMLHttpRequest`?

`XMLHttpRequest` é um objeto JavaScript usado para fazer requisições HTTP de forma assíncrona. Ele permite que páginas web atualizem seu conteúdo sem precisar recarregar a página inteira.

### Criando uma Instância de `XMLHttpRequest`

```javascript
const xhr = new XMLHttpRequest();
```

### Configurando uma Requisição

Para configurar uma requisição HTTP, você deve usar o método `open`. Este método define o tipo de requisição (GET, POST, etc.), a URL e se a requisição é assíncrona.

```javascript
xhr.open('GET', 'https://api.example.com/data', true);
```

- **Método**: Tipo de requisição (GET, POST, etc.).
- **URL**: Endereço do recurso.
- **Assíncrono**: `true` para requisição assíncrona (não bloqueia o código), `false` para sincrona.

### Enviando a Requisição

Após configurar a requisição, você deve enviá-la com o método `send`.

```javascript
xhr.send();
```

### Manipulando a Resposta

Você pode definir funções para tratar a resposta da requisição usando os eventos `onload`, `onerror` e `onreadystatechange`.

```javascript
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Requisição bem-sucedida
        console.log(xhr.responseText);
    } else {
        // Requisição falhou
        console.error('Erro:', xhr.statusText);
    }
};

xhr.onerror = function() {
    // Erro de rede
    console.error('Erro de rede');
};
```

### Exemplo Completo

Aqui está um exemplo completo de uma requisição GET com `XMLHttpRequest`:

```javascript
const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts/1';

xhr.open('GET', url, true);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        console.log('Dados recebidos:', data);
    } else {
        console.error('Erro:', xhr.statusText);
    }
};

xhr.onerror = function() {
    console.error('Erro de rede');
};

xhr.send();
```

### Conclusão

- **`XMLHttpRequest`** é uma ferramenta poderosa para interagir com servidores de forma assíncrona.
- **Métodos HTTP** como GET, POST, PUT e DELETE são usados para diferentes tipos de operações em APIs.
- **Status Codes** ajudam a entender o resultado de uma requisição HTTP.

Para uma solução mais moderna e simplificada, considere usar a API `fetch`, que oferece uma abordagem mais intuitiva e baseada em Promises para fazer requisições HTTP.

---

API: https://viacep.com.br/
