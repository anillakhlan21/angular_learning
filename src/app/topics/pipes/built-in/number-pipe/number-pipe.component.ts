import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-pipe',
  templateUrl: './number-pipe.component.html',
  styleUrls: ['./number-pipe.component.css']
})
export class NumberPipeComponent implements OnInit {
  num: number= 9542.14554;
  constructor() { }

  ngOnInit(): void {
  }

}
