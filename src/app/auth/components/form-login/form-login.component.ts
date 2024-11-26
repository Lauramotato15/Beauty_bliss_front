import { AuthService } from '../../services/auth.service';
import { Component, OnDestroy } from '@angular/core';
import { Credencial } from '../../interface/credencial.interface';
import { FormBuilder, FormGroup, Validators as val} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidationErrorService } from '../../../shared/services/validation.error.service';

@Component({
  selector: 'auth-form-login',
  templateUrl: './form-login.component.html',
})
export class FormLoginComponent  implements OnDestroy{

  public subs:Subscription = new Subscription(); 
  public formLogin!:FormGroup; 

  constructor(
    private fb: FormBuilder, 
    private validatorService:ValidationErrorService,
    private serviceLogin: AuthService,
  ){}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [val.required]],
      password: ['',[val.required]],
    });
  }

  fieldValidator(field:string):boolean | null{ 
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
    this.subs = this.serviceLogin.login(credenciales).subscribe();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe(); 
  }
}
