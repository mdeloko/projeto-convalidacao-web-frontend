const enviarButton = document.querySelector('#enviar');
const clearFiledsButton = document.querySelector('#limpar')

const inputNome = document.querySelector('#nome');
const inputDataNasc = document.querySelector('#data_nasc');
const inputEmail = document.querySelector('#email');
let inputRadioTipoCadastro;
const inputFruta = document.querySelector('#fruta');

function logAllInputs(){
    console.log(inputNome)
    console.log(inputDataNasc)
    console.log(inputEmail)
    console.log(inputRadioTipoCadastro)
    console.log(inputFruta)
}

enviarButton.addEventListener('click',(evt)=>{
    evt.preventDefault();
    inputRadioTipoCadastro = document.querySelector('input[name="tipo_cadastro"]:checked')
    if(!inputNome.value || !inputDataNasc.value || !inputEmail.value || !inputRadioTipoCadastro || !inputFruta.value){
        if(!inputNome.value) {
            inputNome.focus();
            window.alert("Preencha o Nome!")
        }
        else if(!inputDataNasc.value) {
            inputDataNasc.focus();
            window.alert("Preencha a Data de Nascimento!")
        }
        else if(!inputEmail.value) {
            inputEmail.focus();
            window.alert("Preencha o E-mail!")
        }
        else if(!inputFruta.value) {
            inputFruta.focus();
            window.alert("Preencha a Fruta!")
        }
        else if(!inputRadioTipoCadastro) {
            window.alert("Preencha se você é Aluno/Professor!");
        }
        return
    }else{
        const newPerson = {
            nome: inputNome.value,
            data_nasc: inputDataNasc.value,
            email: inputEmail.value,
            tipo: inputRadioTipoCadastro.id,
            fruta: inputFruta.value
        }
        let list = JSON.parse(window.localStorage.getItem(KEYS.KEY_LISTA_PESSOAS)) || [];
        list.push(newPerson);
        window.localStorage.setItem(KEYS.KEY_LISTA_PESSOAS,JSON.stringify(list));
        console.log("Lista:",list)

        window.alert("Cadastrado com Sucesso! Redirecionando...");
    }
})

clearFiledsButton.addEventListener('click',(e)=>{
    e.preventDefault();
    inputRadioTipoCadastro = document.querySelector('input[name="tipo_cadastro"]:checked')
    if(!inputNome || !inputDataNasc || !inputEmail || !inputFruta){
        window.alert("Erro com os inputs!")
        return
    }else{
        window.alert("Os campos serão limpos.");
        inputNome.value = '';
        inputDataNasc.value = '';
        inputEmail.value = '';
        if (inputRadioTipoCadastro) inputRadioTipoCadastro.checked = false;
        inputFruta.value = '';
    }
})
