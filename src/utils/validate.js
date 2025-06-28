export const checkValidData=(email, password )=>{
    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(email);
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%^\&*]).{8,}/.test(password);
    return [isEmailValid,isPasswordValid];
}