import {   AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors} from '@angular/forms'

export class CustomValidator {
  static showEmails(control: FormControl): {[key:string]: boolean} | null {
    if(['test@test.mail'].includes(control.value)){
      return {failedDefaultPatternEmail: true}
    }
    return null
  }
  static showAsyncEmails(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      if(['test2@test.mail'].includes(control.value)){
        return Promise.resolve({failedDefaultPatternEmail: true}) 
      }
      return Promise.resolve(null)
    };
   
  }
}