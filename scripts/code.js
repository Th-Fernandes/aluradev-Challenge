const codeDiv = document.querySelector('#editableCode');
const border = document.querySelector('.codeField');
const programingLanguage = document.querySelector('#linguagem');
const previewButton = document.querySelector('#previewButton');

function languageChanger() {
    const codigo = codeDiv.querySelector('code');
    codeDiv.innerHTML = `<code class="preview hljs ${programingLanguage.value}" contenteditable="true" aria-label="editor"></code>`

    codeDiv.firstChild.innerText = codigo.innerText; 
}

programingLanguage.addEventListener('change', () => {
    languageChanger()
})

previewButton.addEventListener('click', () => {
    const codigo = codeDiv.querySelector('code')
    hljs.highlightBlock(codigo)
})


const cor = document.querySelector('#colorSelector');

cor.addEventListener('change', () => {
    const valor = cor.value;
    console.log(valor);
    document.querySelector('.codeField').style.border = "32px solid " + valor;
})