function Validation(values) {
     let Errors = {};
 
     (values.first_name !== undefined && values.first_name === '') ? Errors.message = 'First Name is required' :
     (values.last_name !== undefined && values.last_name === '') ? Errors.message = 'Last Name is required' :
     (values.email !== undefined && values.email === '') ? Errors.message = 'Email is required' :
     (!isValidEmail(values.email)) ? Errors.message = 'Invalid email format' :
     (values.password !== undefined && values.password === '') ? Errors.message = 'Password is required' :
     (values.confirm_password !== undefined && values.confirm_password === '') ? Errors.message = 'Confirm Password is required' :
     (values.confirm_password !== undefined && (values.confirm_password !== values.password)) ? Errors.message = 'Passwords do not match' : null;
 
     (values.first_name !== undefined && values.first_name === '') ? Errors.name = (values.first_name !== undefined && values.first_name === '') ? true : false : null;
     (values.last_name !== undefined && values.last_name === '') ? Errors.last_name = (values.last_name !== undefined && values.last_name === '') ? true : false : null;
     (values.email !== undefined && values.email === '') ? Errors.email = (values.email !== undefined && values.email === '') ? true : false : null;
     (!isValidEmail(values.email)) ? Errors.email = (!isValidEmail(values.email)) ? true : false : null;
     (values.password !== undefined && values.password === '') ? Errors.password = (values.password !== undefined && values.password === '') ? true : false : null;
     (values.confirm_password !== undefined && values.confirm_password === '') ? Errors.confirm_password = (values.confirm_password  !== undefined && values.confirm_password === '') ? true : false : null;
     (values.confirm_password !== undefined && (values.confirm_password !== values.password)) ? Errors.confirm_password = (values.confirm_password !== values.password) ? true : false : null;
 
     console.log(Errors); 
     return Errors;
} 

function isValidEmail(email) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
}
export default Validation;
