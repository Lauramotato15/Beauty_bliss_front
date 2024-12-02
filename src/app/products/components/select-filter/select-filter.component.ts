import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators as val} from '@angular/forms';
import { CategoryService } from '../../../categories/services/category.service';
import { Category } from '../../../categories/interface/category.interface';

@Component({
  selector: 'products-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrl: './select-filter.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectFilterComponent),
      multi: true
    }
  ]
})
export class SelectFilterComponent implements ControlValueAccessor ,OnInit{
  public categories!:Category[];
 
  @Input() public formControl!:FormControl;

  value!: number;
  onChange: any = () => {};
  onTouched: any = () => {};


  constructor(private serviceCategory:CategoryService, private fb:FormBuilder){}
  writeValue(obj: number): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    this.searchByFilter();
  }

  onSelectChange(value: Event): void {
    console.log(value)
    // this.value = value;
    this.onChange(value); // Notificar el cambio
    this.onTouched(); // Marcar el control como tocado
  }

  searchByFilter(){
    this.serviceCategory.getAll().subscribe(resp => {
      if(resp.success){
        console.log("soy repuesta", resp)
        this.categories = resp.data; 
        console.log(this.categories);
        return; 
      }
    })
  }
}


