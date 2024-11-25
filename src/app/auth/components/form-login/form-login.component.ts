import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationErrorService } from '../../../shared/services/validation.error.service';

@Component({
  selector: 'auth-form-login',
  templateUrl: './form-login.component.html',
})
export class FormLoginComponent {

  constructor(
    private fb: FormBuilder, 
    private validatorService:ValidationErrorService,
  ){}

  public formLogin!:FormGroup; 

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
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
    this.formLogin.reset();
    this.formLogin.markAllAsTouched();  
  }
}
