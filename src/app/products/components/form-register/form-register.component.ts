import { Component, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ValidationErrorService } from '../../../shared/services/validation-error.service';
import { Product } from '../../interface/product.interface';
import { FormBuilder, FormControl, FormGroup, Validators as val } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../shared/services/alert.service';
import { CategoryService } from '../../../categories/services/category.service';
import { Category } from '../../../categories/interface/category.interface';

@Component({
  selector: 'products-form-register',
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent implements OnDestroy{

  public subGetCategories?:Subscription; 
  public subRegister?:Subscription;
  public categories:Category[] = []; 
  public formRegister!: FormGroup;
  private file!: File;

  constructor( 
    private readonly fb: FormBuilder,
    private readonly validatorService: ValidationErrorService,
    private serviceProduct:ProductService,
    private readonly serviceAlert:AlertService,
    private readonly serviceCategory: CategoryService,
  ){}

  ngOnInit(): void {
    this.getAllCategories(); 
    this.formRegister = this.fb.group({
      name: ['', [val.required]],
      price: ['', [val.required, val.min(1)]], 
      quantity: ['', [val.required, val.min(1)]], 
      brand: ['', [val.required]], 
      description: ['', [val.required]],
      photo: ['', [val.required]],
      category: ['', [val.required]],
    });
  }

  fieldValidate(field: string): boolean{
    return this.validatorService.forFieldValidator(field, this.formRegister);
  }

  showMessageError(field: string): string{
    return this.validatorService.messageError(field, this.formRegister);
  }

  onImagePicked(event: Event) {
    const target = event.target as HTMLInputElement
    const files = target.files;
    const file = files?.item(0);
    if (file) this.file = file;
  }

  save() {
    if (!this.formRegister.valid) return this.formRegister.markAllAsTouched();

    const formValues: Product<number> = this.formRegister.value;
    
    this.subRegister = this.serviceProduct.createProduct({ ...formValues, photo: this.file })
    .subscribe(resp => {
      this.formRegister.reset();
      if (!resp.success) {
        this.serviceAlert.showError("Ocurrió un error, intentalo nuevamente.");
        return;
      }
      this.serviceAlert.showSuccess("Información registrada con exito.");
    });
  }

  getAllCategories(){
    this.subGetCategories = this.serviceCategory.getAll()
    .subscribe(resp => resp ? this.categories = resp.data : console.log("sin categories"))
  }

  ngOnDestroy(): void {
    this.subGetCategories?.unsubscribe(); 
  }

  get categoryFormControl(){
    return this.formRegister.controls['category'] as FormControl;
  }
}
