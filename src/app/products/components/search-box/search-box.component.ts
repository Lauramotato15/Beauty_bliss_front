import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  public valueSearch!:string;
  @Output() findByNameProduct: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('name') public inputSearch!: ElementRef;

  find(){ 
    this.valueSearch= this.inputSearch.nativeElement.value
    this.findByNameProduct.emit(this.valueSearch);
    this.valueSearch= this.inputSearch.nativeElement.value = ''; 
  }
}
