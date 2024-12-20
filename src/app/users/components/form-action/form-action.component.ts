import { Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators as val } from '@angular/forms';
import { ValidationErrorService } from '../../../shared/services/validation-error.service';
import { UserAction } from '../../interface/user-update.interface';
import { UserService } from '../../services/user.service';
import { User } from '../../interface/user.interface';
import { AlertService } from '../../../shared/services/alert.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'users-form-action',
  templateUrl: './form-action.component.html',
  styleUrl: './form-action.component.css'
})
export class FormActionComponent implements OnDestroy{

  @ViewChild("filePicker") private filePicker!: ElementRef<HTMLInputElement>;

  public formAction!: FormGroup;
  private file!: File;
  public passwordVisible: boolean = false;
  public confirmVisible: boolean = false;
  public subUpdate?:Subscription;
  public subRegister?:Subscription;

  @Input() public title: string = '';

  @Input() public user?: User;

  constructor(
    private readonly fb: FormBuilder,
    private readonly validatorService: ValidationErrorService,
    private readonly userService: UserService,
    private readonly serviceAlert: AlertService,
    private readonly serviceAuth: AuthService,
  ) { }

  ngOnInit(): void {
    this.formAction = this.fb.group({
      name: [this.user?.name, [val.required]],
      email:
        [
          { value: this.user?.email, disabled: this.user?.email },
          [val.required, val.pattern(this.validatorService.emailPattern)]
        ],
      password: ['', this.getValidationsPassword()],
      confirmPassword: ['', this.getValidationsPassword()],
      photo: null,
    },
    {
      validators: 
      [
        this.validatorService.isFieldOneEqualFieldTwo('password', 'confirmPassword')
      ]
    });
  }

  fieldValidate(field: string): boolean{
    return this.validatorService.forFieldValidator(field, this.formAction);
  }

  showMessageError(field: string): string{
    return this.validatorService.messageError(field, this.formAction);
  }

  onImagePicked(event: Event) {
    const target = event.target as HTMLInputElement
    const files = target.files;
    const file = files?.item(0);
    if (file) this.file = file;
  }

  save() {
    if (!this.formAction.valid) return this.formAction.markAllAsTouched();

    const formValues: UserAction = this.formAction.value;

    if (this.user) {
      this.subUpdate = this.userService.update({ ...formValues, photo: this.file })
      .subscribe(resp => {
        this.filePicker.nativeElement.value = '';
        if (!resp.success) {
          console.log(resp);
          this.serviceAlert.showError("Ocurrió un error, intentalo nuevamente.");
          return;
        }
        this.serviceAuth.saveLocalStorage('user', resp.data);
        this.serviceAlert.showSuccess("Información guardada con éxito");
      });
    }
    
    if(!this.user){
      this.subRegister = this.userService.register({ ...formValues, photo: this.file })
      .subscribe(resp => {
        this.formAction.reset();
        if (!resp.success) {
          this.serviceAlert.showError("Ocurrió un error, intentalo nuevamente.");
          return;
        }
        this.serviceAlert.showSuccess("Información registrada con exito.");
      });
    }
  }

  getValidationsPassword() {
    if (this.user?.name) {
      return [val.minLength(5),];
    }
    
    return [val.required, val.minLength(5)];
  }

  ngOnDestroy(): void {
    this.subRegister?.unsubscribe(); 
    this.subUpdate?.unsubscribe(); 
  }
}
