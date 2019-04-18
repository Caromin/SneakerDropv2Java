import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-message-handler',
  templateUrl: './message-handler.component.html',
  styleUrls: ['./message-handler.component.css']
})
export class MessageHandlerComponent implements OnInit {

  errorMessage: string[];
  testMessage: string[] = ['This is just a test sentence', 'This is just a second test sentence'];

  constructor(private storageService: StorageService) {
    this.storageService.getErrorMessage().subscribe(results => {
      this.errorMessage = results;
    });

    this.storageService.setErrorMessage(this.testMessage);

  }

  ngOnInit() {}

  closeMessage(message: string) {
    this.storageService.updateErrorMessage(message);
    console.log(this.errorMessage);
  }

}
