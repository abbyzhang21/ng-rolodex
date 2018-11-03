import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    // characters: object[];

    constructor(private http: HttpClient) { }

    getCharacter() {
        const url = "http://localhost:4000" + '/contact';
        return this.http.get(url).toPromise();


    }
    // addCharacter(character) {
    //     this.characters.push(character);
    // }
    register(data) {
        return Promise.resolve({});
    }
    login(data) {
        return Promise.resolve({ username: 'data.username' });
    }
    logout() {
        return Promise.resolve({});
    }

}