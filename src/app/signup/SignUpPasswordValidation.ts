import { AbstractControl } from "@angular/forms";

export function SignUpPasswordValidation(control:AbstractControl){
    const password=control.get('password');
    const confirmPassword=control.get('confirmPassword');
    // console.log(password,confirmPassword);
    if(!password?.pristine && confirmPassword?.pristine){
        return null;
    }
    return password && confirmPassword && password.value!==confirmPassword.value ? {doNotMatch:true} : null
}