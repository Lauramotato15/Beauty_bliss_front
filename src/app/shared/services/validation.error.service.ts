import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidationErrorService{
  
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }
    
  forFieldValidator(field:string, formLogin:FormGroup):boolean | null{ 
    return formLogin.controls[field].errors 
    && formLogin.controls[field].touched; 
  }

  messageError(field:string, formLogin:FormGroup):string | undefined{
    if(!formLogin.controls[field]) return; 
  
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
    return; 
  }

  public isFieldOneEqualFieldTwo(pass1: string, pass2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(pass1)?.value;
      const fieldValue2 = formGroup.get(pass2)?.value;

      if (fieldValue1 !== fieldValue2) {
        return { notEqual: true }; 
      }
  
      return null;
    };
  }
  
}