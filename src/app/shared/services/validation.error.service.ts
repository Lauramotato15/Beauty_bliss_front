import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidationErrorService{
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    constructor() { }
    
    forFieldValidator(field:string, formLogin:FormGroup):boolean | null{ 
        return formLogin.controls[field].errors 
        && formLogin.controls[field].touched; 
    }

    messageError(campo:string, formLogin:FormGroup):string | undefined{
        if(!formLogin.controls[campo]) return; 
    
        formLogin.markAllAsTouched(); 
        const errors = formLogin.controls[campo].errors || {}; 
    
        for(const key of Object.keys(errors)){
          switch(key){
            case 'required': 
              return `*El ${campo} es requerido`
            break;
          }
        }
        return; 
    }
}