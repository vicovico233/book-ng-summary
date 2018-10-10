import { Component, OnInit } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import { JokeModel } from '../model/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<JokeModel>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new JokeModel(setup, punchline));
    }

  /* constructor() { } */

  ngOnInit() {
  }

}
