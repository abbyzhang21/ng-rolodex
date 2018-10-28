import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    baseUrl: string = 'https://swapi.co/api/';

    characters: any[] = [];

    constructor(private http: HttpClient) { }

    getCharacter(id: number) {
        const url = this.baseUrl + 'people/' + id;
        return this.http.get(url).toPromise();
    }
    addCharacter(character) {
        this.characters.push(character);
    }
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