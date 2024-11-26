import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators as val} from '@angular/forms';
import { ValidationErrorService } from '../../../shared/services/validation.error.service';
import { User } from '../../interface/user.interface';
import { UserUpdate } from '../../interface/user-update.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'users-form-action',
  templateUrl: './form-action.component.html',
  styleUrl: './form-action.component.css'
})
export class FormActionComponent {

  public formAction!:FormGroup; 
  
  @Input()
  public title:string = ''; 

  @Input()
  public user?:User;
  private file!: File;

  constructor(
    private fb: FormBuilder, 
    private validatorService:ValidationErrorService,
    private userService: UserService,
  ){}

  ngOnInit(): void {
    this.formAction = this.fb.group({
      name: [this.user?.name, [val.required]],
      email: [{value: this.user?.email, disabled: this.user?.email}, [val.required,]],
      password: ['',[val.required, val.minLength(5)]],
      confirmPassword: ['', [val.required]],
    }, 
    {
      validators: [
        this.validatorService.isFieldOneEqualFieldTwo('password','confirmPassword')  
      ]
    });
  }

  fieldValidator(field:string):boolean | null{ 
    return this.validatorService.forFieldValidator(field, this.formAction);
  }

  messageError(field:string):string | undefined{
    return this.validatorService.messageError(field,this.formAction); 
  }
  
  onImagePicked(event: Event) {
    const target = event.target as HTMLInputElement 
    const files = target.files;
    const file = files?.item(0);
    if(file) this.file = file;
  }

  save(){
    if(!this.formAction.valid)return this.formAction.markAllAsTouched();
    
    const formValues:UserUpdate = this.formAction.value;
    this.formAction.reset(); 

    if(this.user){
      this.userService.update({...formValues, photo: this.file})
      .subscribe(resp => {
        console.log("editado"); 
        console.log(resp); 
      }); 
    }else{
      this.userService.register({...formValues, photo: this.file})
      .subscribe(resp => {
        if(resp.success){
          alert("Registrado con éxito"); 
        }
      });
    }
  }
}
