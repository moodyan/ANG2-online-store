import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Merch } from '../merch.model';
import { MerchService } from '../merch.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-merch-detail',
  templateUrl: './merch-detail.component.html',
  styleUrls: ['./merch-detail.component.css'],
  providers: [MerchService]
})
export class MerchDetailComponent implements OnInit {
  merchId: string;
  merchToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private merchService: MerchService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.merchId = urlParameters['id'];
   });
   this.merchToDisplay = this.merchService.getMerchById(this.merchId);
  }

}
