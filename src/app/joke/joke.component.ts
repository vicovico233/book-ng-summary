import { Component, OnInit, Input } from '@angular/core';
import { JokeModel } from '../model/joke';


@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})

export class JokeComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('joke') data: JokeModel;

  constructor() { }

  ngOnInit() {
  }

}
