import { Component, OnInit } from '@angular/core';
import textModel from '../../models/text.model';
import { IoService } from '../../services/io.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  messages: Array<textModel>;

  constructor(
    private ios: IoService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.ios.messages.subscribe(t => this.messages = t);
  }

  messageForm = this.fb.group({
    message: [''],
  });

  send() {
    const text: textModel = {
      id: 1,
      text: this.messageForm.controls['message'].value,
    };

    this.messageForm.reset();

    this.ios.sendText(text);
  }

}
