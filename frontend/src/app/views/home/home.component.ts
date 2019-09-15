import { Component, OnInit } from '@angular/core';
import textModel from '../../models/text.model';
import { IoService } from '../../services/io.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  text: Array<textModel>;

  constructor(
    private ios: IoService,
  ) { }

  ngOnInit() {

    this.ios.text.subscribe(t => this.text.push(t));
  }

}
