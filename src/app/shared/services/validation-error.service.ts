import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidationErrorService{
  
  public emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";

  forFieldValidator(field:string, formLogin:FormGroup):boolean { 
    if(formLogin.controls[field].errors && formLogin.controls[field].touched){
      return true; 
    }
    return false; 
  }

  messageError(field:string, formLogin:FormGroup):string{
    if(!formLogin.controls[field]) return ''; 
  
    const errors = formLogin.controls[field].errors || {}; 

    for(const key of Object.keys(errors)){
      switch(key.toLocaleLowerCase()){
        case 'required': 
          return `*El ${field} es requerido`

        case 'minlength': 
          return `*El ${field} debe tener mínimo 5 caracteres`

        case 'pattern': 
          return ` El ${field} debe ser un correo válido`

      }
    }
    return ''; 
  }

  public isFieldOneEqualFieldTwo(fieldOne: string, fieldTwo: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValueOne = formGroup.get(fieldOne)?.value;
      const fieldValueTwo = formGroup.get(fieldTwo)?.value;

      if (fieldValueOne !== fieldValueTwo) {
        return { notEqual: true }; 
      }
  
      return null;
    };
  }
}