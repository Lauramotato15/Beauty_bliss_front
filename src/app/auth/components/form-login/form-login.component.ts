import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-form-login',
  templateUrl: './form-login.component.html',
})
export class FormLoginComponent {

  constructor(private fb: FormBuilder){}

  public formLogin!:FormGroup; 

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  forFieldValidator(field:string):boolean | null{ 
    return this.formLogin.controls[field].errors 
    && this.formLogin.controls[field].touched; 
  }

  messageError(campo:string):string | undefined{
    if(!this.formLogin.controls[campo]) return; 

    this.formLogin.markAllAsTouched(); 
    const errors = this.formLogin.controls[campo].errors || {}; 

    for(const key of Object.keys(errors)){
      switch(key){
        case 'required': 
          return `*El ${campo} es requerido`
        break;
      }
    }
    return; 
  }

  save(){
    this.formLogin.reset();
    this.formLogin.markAllAsTouched();  
  }

}
