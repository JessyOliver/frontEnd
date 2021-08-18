function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i) {

        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 75 * i)

    });
}
const titulo = document.querySelector('h1');
typeWrite(titulo);


/*outra função*/
let nome = window.document.getElementById('nome')
let celular = document.querySelector('#celular')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let map = document.querySelector('#map')


//para testar envio
let nomeOk = false
let emailOk = false
let assuntoOk = false

//tornando o horizontal maior
nome.style.width = '50%'
email.style.width = '50%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {

        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'

    } else {

        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true


    }

}


function validaCelular() {
    let txtCelular = document.querySelector('#txtCelular')
    if (celular.value.length < 11) {

        txtCelular.innerHTML = 'Celular inválido'
        txtCelular.style.color = 'red'

    } else {

        txtCelular.innerHTML = 'Celular Válido'
        txtCelular.style.color = 'green'


    }

}


function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {

        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'

    } else {

        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true

    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {

        txtAssunto.innerHTML = 'Texto com mais de 100 caracteres, diminua o caracter'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'


    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }

}

function enviar() {

    if (nomeOk == true && emailOk == true && assuntoOk == true) {

        alert('Formulario enviado com sucesso!')

    } else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }

}

function mapZoom() {

    map.style.width = '700px'
    map.style.height = '600px'
}

function mapNormal() {
    map.style.width = '400px'
    map.style.height = '250px'


}