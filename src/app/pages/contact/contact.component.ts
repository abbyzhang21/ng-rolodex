import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
    selector: 'contact-page',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    characters: any;

    constructor(private backend: BackendService) {

    }
    ngOnInit() {
        // this.characters = this.backend.characters;

        // this.backend.addCharacter({ name: 'abby' });



        this.backend.getCharacter()
            .then((data) => {
                console.log(data);
                this.characters = data;
                this.characters.push({ name: 'ola' });
            });
    }
}
