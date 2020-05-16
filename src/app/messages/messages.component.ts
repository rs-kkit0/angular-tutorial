import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    // html内で使用するためpublicにする必要がある
    public messageService: MessageService
  ) { }

  ngOnInit() {
  }

}
