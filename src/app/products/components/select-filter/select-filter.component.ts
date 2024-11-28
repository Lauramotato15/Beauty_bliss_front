import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as val} from '@angular/forms';
import { CategoryService } from '../../../categories/services/category.service';

@Component({
  selector: 'products-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrl: './select-filter.component.css'
})
export class SelectFilterComponent implements OnInit{

  public selectFilter!:FormGroup;
 
  constructor(private serviceCategory:CategoryService, private fb:FormBuilder){}

  ngOnInit(): void {
    this.selectFilter = this.fb.group({
      optionValue: ['',],
    });
  }

  SearchByFilter(){
    this.serviceCategory.getAll().subscribe(resp => {
      console.log(resp); 
      console.log("divicion"); 
      console.log(this.selectFilter.value)
    })
  }
}


