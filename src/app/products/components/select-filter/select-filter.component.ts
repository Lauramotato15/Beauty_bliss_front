import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators as val} from '@angular/forms';
import { CategoryService } from '../../../categories/services/category.service';
import { Category } from '../../../categories/interface/category.interface';

@Component({
  selector: 'products-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrl: './select-filter.component.css'
})
export class SelectFilterComponent implements OnInit{
  public categories!:Category[];
 
  @Input() public formControl!:FormControl;

  constructor(private serviceCategory:CategoryService, private fb:FormBuilder){}

  ngOnInit(): void {
  }

  SearchByFilter(){
    this.serviceCategory.getAll().subscribe(resp => {
      if(resp.success){
        this.categories = resp.data; 
        return; 
      }
    })
  }
}


