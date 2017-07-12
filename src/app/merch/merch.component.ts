import { Component, OnInit } from '@angular/core';
import { Merch } from '../merch.model';
import { Router } from '@angular/router';
import { MerchService } from '../merch.service';
// import { PriceFilterPipe } from '../price-filter.pipe';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css'],
  providers: [MerchService]
})

export class MerchComponent implements OnInit {
  merch: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByPrice: string = "all";

  constructor(private router: Router, private merchService: MerchService){}

  ngOnInit(){
    this.merch = this.merchService.getMerch();
  }

  goToDetailPage(clickedMerch) {
    this.router.navigate(['merch', clickedMerch.$key]);
  };

  onPriceFilterChange(optionFromMenu) {
    this.filterByPrice = optionFromMenu;
  }
}
