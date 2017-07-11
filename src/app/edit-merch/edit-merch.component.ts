import { Component, Input, OnInit } from '@angular/core';
import { MerchService } from '../merch.service';

@Component({
  selector: 'app-edit-merch',
  templateUrl: './edit-merch.component.html',
  styleUrls: ['./edit-merch.component.css'],
  providers: [MerchService]
})


export class EditMerchComponent implements OnInit {
  @Input() selectedMerch;

  editMerchForm: boolean = false;
  editMerchButton: boolean = true;

  constructor(private merchService: MerchService) { }

  ngOnInit() {
  }

  beginUpdatingMerch(merchToUpdate){
    this.merchService.updateMerch(merchToUpdate);
  }

  beginDeletingMerch(merchToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.merchService.deleteMerch(merchToDelete);
    }
  }

  showEditMerchForm() {
    this.editMerchForm = true;
    this.editMerchButton = false;
  }

  hideEditMerchForm() {
    this.editMerchForm = false;
    this.editMerchButton = true;
  }

}
