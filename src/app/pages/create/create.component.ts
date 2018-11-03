import { Component } from '@angular/core';

@Component({
    selector: 'create-page',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})

export class CreateComponent {

    title: string = 'Create New Contact';
    formData: {
        name: string,
        address: string,
        mobile: string,
        email: string,
        instagram: string,
        github: string,
        class: string
    } = {
            name: '',
            address: '',
            mobile: '',
            email: '',
            instagram: '',
            github: '',
            class: 'test'
        };
    validName: boolean = false;
    validEmail: boolean = false;


    constructor() {

    }

    validateName() {
        if (!this.formData.name) {
            this.validName = false;
        }
        else if (this.formData.name.length < 3) {
            this.validName = false;
        }
        else {
            this.validName = true;
        }
    }

    validateEmail() {
        if (!this.formData.email) {
            this.validEmail = false;
        }
        else if (!this.formData.email.includes('@')) {
            this.validEmail = false;
        }
        else if (this.formData.email.length < 3) {
            this.validEmail = false;
        }
        else {
            this.validEmail = true;
        }
    }

    isDisabled() {
        return !this.validEmail || !this.validName;
    }

    submit() {
        console.log(this.formData);

    }
}