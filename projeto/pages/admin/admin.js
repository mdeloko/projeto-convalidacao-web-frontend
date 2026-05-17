const enviarButton = document.querySelector('#enviar');
const clearFiledsButton = document.querySelector('#limpar');

const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputPesquisa = document.querySelector('#inputPesquisa')
const dadosDiv = document.querySelector('#dados');

const KEY_LISTA_PESSOAS = 'KEY_LISTA'
let list;

document.addEventListener('DOMContentLoaded',(e)=>{
    popularListaVisual();
})

function baixaLista(){
    list = JSON.parse(window.localStorage.getItem(KEY_LISTA_PESSOAS)) || [];
}

function atualizaLista(){
    window.localStorage.setItem(KEY_LISTA_PESSOAS,JSON.stringify(list));
}

function popularListaVisual(){
    baixaLista();
    while(dadosDiv.firstChild){
        dadosDiv.removeChild(dadosDiv.firstChild);
    }
    const termo = inputPesquisa.value.trim().toLowerCase();
    const filteredList = list.filter((val)=>{
        const nome = val.nome.toLowerCase();
        const email = val.email.toLowerCase();
        return nome.includes(termo) || email.includes(termo)
    })

    filteredList.map((val)=>{
        const newCard = document.createElement('div');
        newCard.classList.add('card');

        const dataDiv =document.createElement('div');
        dataDiv.classList.add('card-data');

        const name = document.createElement('b');
        name.innerHTML = val.nome;

        const email = document.createElement('span');
        email.innerHTML = "("+val.email+")";

        const date = document.createElement('span');
        date.innerHTML = "Inserido em: "+val.date;

        const button = document.createElement('button');
        const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
        svg.setAttribute('viewBox','0 0 640 640')
        svg.innerHTML = '<!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/>'
        
        button.appendChild(svg);
        button.innerHTML += 'Apagar Usuário';
        button.onclick = (e)=>{
            dadosDiv.removeChild(newCard);
            list = list.filter(filterValue => filterValue.id !== val.id);
            atualizaLista();
        }
        dataDiv.appendChild(name);
        dataDiv.appendChild(email);
        dataDiv.appendChild(date);

        newCard.appendChild(dataDiv);
        newCard.appendChild(button);

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
            id: list.length || 0,
            nome: inputNome.value,
            email: inputEmail.value,
            date: new Date().toLocaleDateString("pt-br",{hour:"2-digit",minute:"2-digit",second:"2-digit"})
        }
        list.push(newPerson);
        atualizaLista();
        inputNome.value = '';
        inputEmail.value = '';
        popularListaVisual();
    }
})
let debouncePesquisa;
inputPesquisa.addEventListener('input',()=>{
    clearTimeout(debouncePesquisa);
    debouncePesquisa = setTimeout(()=>popularListaVisual(),150)
});

document.querySelector('#limparLocalStorage').addEventListener('click',(e)=>{
    e.preventDefault();
    window.localStorage.clear();
    popularListaVisual();
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
