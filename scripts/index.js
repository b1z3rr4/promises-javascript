async function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
    
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("Erro ao ler o arquivo"));
    
        reader.readAsText(file);
    })
}

async function processFile(file) {
    try {
        const content = await readFileAsync(file);

        console.debug('Conteúdo do arquivo:', content);
    } catch (error) {
        console.error(error);
    }
}

function main() {
    const file = new Blob(["Olá, mundo!"], { type: "text/plain" });

    processFile(file);
}

main();
