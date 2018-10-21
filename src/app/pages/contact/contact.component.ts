import { Component } from '@angular/core';

@Component({
    selector: 'contact-page',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    title: string = 'contact page';
    formData: {
        name: string,
        email: string,
        cell: number
    } = {
            name: '',
            email: '',
            cell: 0
        }

    constructor() { }

    submit() {
        console.log(this.formData);
    }

}
