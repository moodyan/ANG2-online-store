import { Injectable } from '@angular/core';
import { Merch } from './merch.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MerchService {
  merch: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.merch = database.list('merch');
  }

  getMerch(){
    return this.merch;
  }

  addMerch(newMerch: Merch) {
    this.merch.push(newMerch);
  }

  getMerchById(merchId: string){
    return this.database.object('/merch/' + merchId);
  }

  updateMerch(localUpdatedMerch){
    var merchEntryInFirebase = this.getMerchById(localUpdatedMerch.$key);
    merchEntryInFirebase.update({item: localUpdatedMerch.item,
                                description: localUpdatedMerch.description,
                                price: localUpdatedMerch.price});
  }

  deleteMerch(localMerchToDelete){
    var merchEntryInFirebase = this.getMerchById(localMerchToDelete.$key);
    merchEntryInFirebase.remove();
  }

}
