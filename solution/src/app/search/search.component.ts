import { Component, OnInit } from '@angular/core';

import { TwitService } from '../twit.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  term: string;

  constructor(private twitService: TwitService) { }

  updateTerm() {
    this.twitService.updateTerm(this.term);
  }

  ngOnInit() {}

}
