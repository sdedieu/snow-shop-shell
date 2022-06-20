import { Component, OnInit } from '@angular/core';
import { EMPTY, fromEvent, Observable } from 'rxjs';
import { SnowShopLibService } from 'snow-shop-lib';
import { map, scan } from 'rxjs/operators';

@Component({
  selector: 'shell-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  cartItemsCount$: Observable<number> = EMPTY;

  increment$: Observable<CustomEvent> = EMPTY;

  constructor(private snowShopLibService: SnowShopLibService) {
    this.increment$ = fromEvent<CustomEvent<{by:number}>>(window, 'increment');
   }

  ngOnInit(): void {
    this.cartItemsCount$ = this.snowShopLibService.getCartItemCount();
  }

}
