const  logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const emailLogin = document.querySelector('.emailLogin');
const passwordLogin = document.querySelector('.passwordLogin');

const nameRegister = document.querySelector('.nameRegister');
const emailRegister = document.querySelector('.emailRegister');
const passwordRegister = document.querySelector('.passwordRegister');

const botaoLogin = document.querySelector('.btnLogin');
const botaoRegister = document.querySelector('.btnRegister');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
})

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
})

// Capturando valores dos campos quando o formulário for submetido
botaoRegister.addEventListener('click', async (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    try {
        const response = await axios.post('http://localhost:3000/register', {
            name: nameRegister.value,
            email: emailRegister.value,
            password: passwordRegister.value
        });

        console.log('Dados enviados com sucesso:', response.data);
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    }
});














// async function getContent () {
//     try {
//         await fetch('http://localhost:3000/login')

//     } catch (error) {
//         console.log('Faustão: "ERROOOUU"');
//     }
// }

// getContent();



