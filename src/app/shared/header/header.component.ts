import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { SnowShopLibService } from 'snow-shop-lib';

@Component({
  selector: 'shell-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  cartItemsCount$: Observable<number> = EMPTY;

  constructor(private snowShopLibService: SnowShopLibService) { }

  ngOnInit(): void {
    this.cartItemsCount$ = this.snowShopLibService.getCartItemCount();
  }

}
