import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
    selector: 'contact-page',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    title: string = 'contact page';
    // name: string = this.formData;
    // // data: {} = {
    // //     name: this.formData.characters,
    // // }

    constructor() { }

    // submit() {
    //     console.log(this.formData);
    // }

}
