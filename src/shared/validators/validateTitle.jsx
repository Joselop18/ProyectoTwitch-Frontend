export const validateTitle = (title) => {
    return title.lenght >= 3 && title.lenght <= 30;
}

export const validateTitleMessage = 'El titulo debe tener de 3 a 30 caracteres como minimo'