import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ValidationErrorService } from '../../../shared/services/validation-error.service';
import { Product } from '../../interface/product.interface';
import { FormBuilder, FormGroup, Validators as val } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'products-form-register',
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {
  public formAction!: FormGroup;
  public subRegister?:Subscription;
  private file!: File;

  constructor( 
    private readonly fb: FormBuilder,
    private readonly validatorService: ValidationErrorService,
    private serviceProduct:ProductService,
    private readonly serviceAlert:AlertService,
  ){}

  ngOnInit(): void {
    this.formAction = this.fb.group({
      name: ['', [val.required]],
      photo: null,
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

    const formValues: Product = this.formAction.value;
    
    this.subRegister = this.serviceProduct.createProduct({ ...formValues, photo: this.file })
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
