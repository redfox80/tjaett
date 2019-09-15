import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import textModel from '../models/text.model';

@Injectable({
  providedIn: 'root'
})
export class IoService {

  constructor(
    private socket: Socket,
  ) { }

  text = this.socket.fromEvent<textModel>('text');

  sendText(text: textModel) {
    this.socket.emit('sendText', text);
  }
}
