import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

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

  characters: any[];

  constructor(private backend: BackendService) {
    const subtitle: string = 'It is a SUBTITLE';
    this.subtitle = subtitle;

  }
  ngOnInit() {
    this.characters = this.backend.characters;
    this.backend.addCharacter({ name: 'abby' });
    this.characters.push({ name: 'Qian' });
    this.backend.getCharacter(2)
      .then((data) => {
        console.log(data);
      })
  }

}
