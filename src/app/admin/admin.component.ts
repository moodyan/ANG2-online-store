import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { MerchService } from '../merch.service';
import { Album } from '../album.model';
import { Merch } from '../merch.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService, MerchService]
})
export class AdminComponent implements OnInit {

  newAlbumForm: boolean = false;
  newMerchForm: boolean = false;
  newAlbumButton: boolean = true;
  newMerchButton: boolean = true;

  constructor(private albumService: AlbumService, private merchService: MerchService) { }

  ngOnInit() {
  }

  submitAlbumForm(title: string, artist: string, description: string, price: number) {
    var newAlbum: Album = new Album(title, artist, description, price);
    this.albumService.addAlbum(newAlbum);
  }

  submitMerchForm(item: string, description: string, price: number) {
    var newMerch: Merch = new Merch(item, description, price);
    this.merchService.addMerch(newMerch);
  }

  showNewMerchForm() {
    this.newMerchForm = true;
    this.newMerchButton = false;
  }

  hideNewMerchForm() {
    this.newMerchForm = false;
    this.newMerchButton = true;
  }

  showNewAlbumForm() {
    this.newAlbumForm = true;
    this.newAlbumButton = false;
  }

  hideNewAlbumForm() {
    this.newAlbumButton = true;
    this.newAlbumForm = false;
  }
}
