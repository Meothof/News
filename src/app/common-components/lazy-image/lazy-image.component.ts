import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss'],
})
export class LazyImageComponent implements OnInit {

  @Input() public source: string;

  public loaded: boolean;

  constructor() {
    this.loaded = false;
  }

  ngOnInit() { }

}
