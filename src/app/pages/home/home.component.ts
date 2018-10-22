import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  subtitle: string;
  data: {} = {
    header: 'this is a header',
    footer: 'this is a footer'
  };

  constructor() {
    const subtitle: string = 'It is a SUBTITLE';
    this.subtitle = subtitle;

  }
  ngOnInit() {
  }

}
