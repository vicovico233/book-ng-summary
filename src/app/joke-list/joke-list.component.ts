import { Component, OnInit } from '@angular/core';
import { JokeModel } from '../model/joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes: JokeModel[];

  constructor() {
    this.jokes = [
      new JokeModel('What did the cheese say when it looked in the mirror?', 'Hello-me(Halloumi)'),
      new JokeModel('What kind of cheese do you use to disguise a small horse?', 'Mask-apony(Mascarpone)'),
      new JokeModel('A kid threw a lump of cheddar at me', 'I thought ‘That’s not verymature’')
      ];

  }
   addJoke(joke) {
    this.jokes.unshift(joke);
  }

  ngOnInit() {
  }

}
