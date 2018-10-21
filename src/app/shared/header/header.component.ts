import { Component } from '@angular/core';

@Component({
    selector: 'header-page',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

    title: string = 'Header Page';

    constructor() {

    }
}