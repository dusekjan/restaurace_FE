
export function isEmailValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}

export function isPasswordValid(password) {
    // heslo musí obsahovat číslo, malé písmeno, velké písmeno a být alespon dlouhé 8 zanků
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
}

// export function isAddressValid(Address) {
//     return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(Address)
// }



export function isLoginFormValid(email, password) {
    return isEmailValid(email) && password.length
}

export function isRegistrationFormValid(name, email, password) {
    return name.length > 0 && isEmailValid(email) && isPasswordValid(password)
}