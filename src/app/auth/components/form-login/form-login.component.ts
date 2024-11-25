import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationErrorService } from '../../../shared/services/validation.error.service';
import { AuthService } from '../../services/auth.service';
import { Credencial } from '../../interface/credencial.interface';
import { map, pipe } from 'rxjs';

@Component({
  selector: 'auth-form-login',
  templateUrl: './form-login.component.html',
})
export class FormLoginComponent {

  constructor(
    private fb: FormBuilder, 
    private validatorService:ValidationErrorService,
    private serviceLogin: AuthService,
  ){}

  public formLogin!:FormGroup; 

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required]],
      password: ['',[Validators.required, Validators.minLength(5)]],
    });
  }

  FieldValidator(field:string):boolean | null{ 
    return this.validatorService.forFieldValidator(field, this.formLogin);
  }

  messageError(field:string):string | undefined{
    return this.validatorService.messageError(field,this.formLogin); 
  }

  save(){
    if(!this.formLogin.valid)return this.formLogin.markAllAsTouched();
    
    const formValues:Credencial = this.formLogin.value;
    this.formLogin.reset(); 
    this.validatedAutenticacion(formValues); 
  }

  public validatedAutenticacion(credenciales:Credencial){
    const result = this.serviceLogin.login(credenciales).subscribe(resp => console.log(resp));
  }
}
