export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

export const emailValidateMessage = 'Porfavor ingresa una direccion de correo valido';