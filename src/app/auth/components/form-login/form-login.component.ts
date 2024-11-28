import { AuthService } from '../../services/auth.service';
import { Component, OnDestroy } from '@angular/core';
import { Credencial } from '../../interface/credencial.interface';
import { FormBuilder, FormGroup, Validators as val} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidationErrorService } from '../../../shared/services/validation-error.service';

@Component({
  selector: 'auth-form-login',
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css',
})
export class FormLoginComponent  implements OnDestroy{

  public subs:Subscription = new Subscription(); 
  public formLogin!:FormGroup; 
  public passwordVisible: boolean = false;

  constructor(
    private readonly fb: FormBuilder, 
    private readonly validatorService:ValidationErrorService,
    private readonly serviceLogin: AuthService,
  ){}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [val.required, val.pattern(this.validatorService.emailPattern)]],
      password: ['',[val.required]],
    });
  }

  fieldValidate(field:string):boolean | null{ 
    return this.validatorService.forFieldValidator(field, this.formLogin);
  }

  showMessageError(field:string):string | undefined{
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
