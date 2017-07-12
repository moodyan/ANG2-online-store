import { Injectable } from '@angular/core';
import { Merch } from './merch.model';
// import { Album } from './album.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CartService {
  private itemsInCartSubject: BehaviorSubject<Merch[]> = new BehaviorSubject([]);
    private itemsInCart: Merch[] = [];

    constructor() {
      this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
    }

    public addToCart(item: Merch) {
      this.itemsInCartSubject.next([...this.itemsInCart, item]);
    }

    public getItems(): Observable<Merch[]> {
      return this.itemsInCartSubject;
    }
  }
