import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
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

  @Output() onSelectedCategory: EventEmitter<number> = new EventEmitter<number>();

  value!: number;
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private serviceCategory:CategoryService, private fb:FormBuilder){}


  searchByFilter(){
    this.serviceCategory.getAll().subscribe(resp => {
      if(resp.success){
        this.categories = resp.data; 
        return; 
      }
    })
  }  

  //Cuando se cambia el valor del select, angular lo ejecuta. 
  writeValue(obj: number): void {
    this.value = obj;
  }

  //Registrar el cambio
  registerOnChange(fn: number): void {
    this.onChange = fn;
  }

  //Cuando el select es tocado
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    this.searchByFilter();
  }

  //Cada que se selecciona una opcion
  onSelectChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.onChange(selectedValue); 
    this.onTouched(selectedValue);
    this.value = +selectedValue; 
    this.onSelectedCategory.emit(this.value);
  }
}


