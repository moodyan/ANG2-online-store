import {Component, OnInit} from '@angular/core';
import { CartService } from '../cart.service';
import { Merch } from '../merch.model';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'spa-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public shoppingCartItems$: Observable<Merch[]> = of([]);
  public shoppingCartItems: Merch[] = [];

  constructor(private cartService: CartService) {
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

}
