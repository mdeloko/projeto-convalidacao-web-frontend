
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
        let errStr = "Preencha o(s) campo(s) obrigatório(s):\n";
        if(!inputNome.value) {
            errStr += "- Nome;\n"
        }
        if(!inputDataNasc.value) {
            errStr += "- Data de Nascimento;\n"
        }
        if(!inputEmail.value) {
            errStr += "- E-mail;\n"
        }
        if(!inputFruta.value) {
            errStr += "- Fruta;\n"
        }
        if(!inputRadioTipoCadastro) {
            errStr+= "- Preencha se você é Aluno ou Professor;"
        }
        window.alert(errStr)
        return
    }else{
        window.alert("Cadastrado com Sucesso! Redirecionando...");
        window.location.href = '../login/login.html'
    }
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
