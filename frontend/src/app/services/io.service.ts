import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import textModel from '../models/text.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IoService {

  constructor(
    private socket: Socket,
  ) {

    this.socket.on('message', (message: textModel) => {
      let temp = this.messages_s.value;
      temp.push(message);
      this.messages_s.next(temp);
    });
  }

  private messages_s: BehaviorSubject<Array<textModel>> = new BehaviorSubject<Array<textModel>>([{id: 1, text: 'test'}]);
  messages: Observable<Array<textModel>> = this.messages_s.asObservable();

  text = this.socket.fromEvent<textModel>('text');

  sendText(text: textModel) {
    this.socket.emit('sentMessage', text);
  }
}
