import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.less']
})
export class MoodsComponent implements OnInit {

  public moodArray: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
