import { Component, OnInit } from '@angular/core';

import { TwitService } from '../twit.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private term: string;
  private currentSearchMessage: string = '';

  constructor(private twitService: TwitService) { }

  updateTerm(): void {
    this.twitService.updateTerm(this.term);
    this.currentSearchMessage = `Streaming tweets for ${ this.term }`;
  }

  stop(e): void {
    this.twitService.stop();
    e.preventDefault();
  }

  ngOnInit() { }
}
