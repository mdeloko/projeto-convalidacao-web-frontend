const enviarButton = document.querySelector('#enviar');
const clearFiledsButton = document.querySelector('#limpar');

const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const dadosDiv = document.querySelector('#dados');

const KEY_LISTA_PESSOAS = 'KEY_LISTA'
let list;

document.addEventListener('DOMContentLoaded',(e)=>{
    popularListaVisual();
})

function atualizaLista(){
    list = JSON.parse(window.localStorage.getItem(KEY_LISTA_PESSOAS)) || [];
}

function popularListaVisual(){
    atualizaLista();
    while(dadosDiv.firstChild){
        dadosDiv.removeChild(dadosDiv.firstChild);
    }

    list.map((val,idx)=>{
        const newCard = document.createElement('div');
        newCard.classList.add('card')
        const name = document.createElement('b');
        name.innerHTML = val.nome;
        const email = document.createElement('span');
        email.innerHTML = val.email;
        newCard.id = idx;
        newCard.appendChild(name);
        newCard.appendChild(email);
        dadosDiv.appendChild(newCard);
    })
}

function logAllInputs(){
    console.log(inputNome);
    console.log(inputEmail);
}

enviarButton.addEventListener('click',(evt)=>{
    evt.preventDefault();
    if(!inputNome.value || !inputEmail.value){
        let errStr = "Preencha o(s) campo(s) obrigatório(s):\n";
        if(!inputNome.value) {
            errStr += "- Nome;\n"
        }
        if(!inputEmail.value) {
            errStr += "- E-mail;\n"
        }
        window.alert(errStr)
        return
    }else{
        const newPerson = {
            nome: inputNome.value,
            email: inputEmail.value,
        }
        list.push(newPerson);
        window.localStorage.setItem(KEY_LISTA_PESSOAS,JSON.stringify(list));
        inputNome.value = '';
        inputEmail.value = '';
        popularListaVisual();
    }
})

document.querySelector('#limparLocalStorage').addEventListener('click',(e)=>{
    e.preventDefault()
    window.localStorage.clear()
    popularListaVisual()
})
// clearFiledsButton.addEventListener('click',(e)=>{
//     e.preventDefault();
//     inputRadioTipoCadastro = document.querySelector('input[name="tipo_cadastro"]:checked')
//     if(!inputNome || !inputDataNasc || !inputEmail || !inputFruta){
//         window.alert("Erro com os inputs!")
//         return
//     }else{
//         window.alert("Os campos serão limpos.");
//         inputNome.value = '';
//         inputDataNasc.value = '';
//         inputEmail.value = '';
//         if (inputRadioTipoCadastro) inputRadioTipoCadastro.checked = false;
//         inputFruta.value = '';
//     }
// })
