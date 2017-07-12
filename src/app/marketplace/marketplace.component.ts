import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Merch } from '../merch.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
// import { MerchService } from '../merch.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})

export class MarketplaceComponent implements OnInit {
  albums: FirebaseListObservable<any[]>;
  merch: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private albumService: AlbumService){}

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
    // this.merch = this.merchService.getMerch();
  }

  goToDetailPage(clickedAlbum) {
    this.router.navigate(['albums', clickedAlbum.$key]);
  };

  
}
