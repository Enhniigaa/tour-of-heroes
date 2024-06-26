import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [NgFor, NgIf],
  standalone: true
})
export class MessagesComponent {

  constructor(public messagesService: MessagesService) {
    
  }
}
