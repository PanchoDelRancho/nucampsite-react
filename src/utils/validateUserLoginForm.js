

export const validateUserLoginForm = (values) =>{
    const errors = {};
    
    const {username,password} = values
    
    if(!username){errors.username = "username required"} 
    if(username.length < 6 ){errors.username = "username must be at least 6 characters"}
    if( username.length > 15){errors.username='username must be under 15 characters'}

    if(!password){errors.password = "password required"} 
    if(password.length < 8 ){errors.password = "password must be at least 8 characters"}
    

    

    return errors

}