import mongoose from 'mongoose';

//ESQUEMA CRIADO PARA LOGIN E PARA REGISTRO DE USUARIO

const loginSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const registerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});


// GUARDEI OS ESQUEMAS EM DUAS CONSTANTES
const loginModel = mongoose.model('loginModel', loginSchema);
const registerModel = mongoose.model('registerModel', registerSchema);

//EXPORTEI AS CONSTANTES
export { loginModel, registerModel }






// const login = mongoose.model('login', {
//     email: String,
//     password: String,
// })

// const register = mongoose.model('register', {
//     name: String,
//     email: String,
//     password: String,
// })

// export { login, register }
