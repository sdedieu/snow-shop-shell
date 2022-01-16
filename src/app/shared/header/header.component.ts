import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'shell-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  cartItemsCount$: Observable<number> = EMPTY;

  constructor() { }

  ngOnInit(): void {
  }

}
