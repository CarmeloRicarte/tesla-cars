import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  showMessage(message: string) {
    this.messageService.add({
      key: 'outputEvent',
      severity: 'info',
      detail: message,
    });
  }
}
