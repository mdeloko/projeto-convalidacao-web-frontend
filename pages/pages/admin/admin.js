import { KEYS } from "./keys.js";

const enviarButton = document.querySelector('#enviar');

enviarButton.addEventListener('click',(evt)=>{
    evt.preventDefault();
    const inputNome = document.querySelector('#nome');
    const inputDataNasc = document.querySelector('#data_nasc');
    const inputEmail = document.querySelector('#email');
    const inputRadioTipoCadastro = document.querySelector('input[name="tipo_cadastro"]:checked');
    const inputFruta = document.querySelector('#fruta');

    if(!inputNome || !inputDataNasc || !inputEmail || !inputRadioTipoCadastro || !inputFruta){
        window.alert("Erro com os inputs!")
        return
    }else{
        window.localStorage.setItem(KEYS.KEY_NOME,inputNome.value);
        window.localStorage.setItem(KEYS.KEY_DATA,inputDataNasc.value);
        window.localStorage.setItem(KEYS.KEY_EMAIL,inputEmail.value);
        window.localStorage.setItem(KEYS.KEY_TIPO,inputRadioTipoCadastro.id);
        window.localStorage.setItem(KEYS.KEY_FRUTA,inputFruta.value);
        window.alert("Cadastrado com Sucesso!\nOs campos serão limpos.");
        inputNome.value = '';
        inputDataNasc.value = '';
        inputEmail.value = '';
        inputRadioTipoCadastro.checked = false;
        inputFruta.value = '';
    }
})
