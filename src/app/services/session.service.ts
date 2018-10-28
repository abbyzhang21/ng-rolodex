import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    user = {
        loggedIn: false,
        username: ''
    };

    constructor() {
        //check if user is in local Storage(Insepect-app)
        let userString = window.localStorage.getItem('user');
        try {
            if (userString) {
                this.user = JSON.parse(userString);
            } else {
                console.log('user was not found');
            }

        } catch (err) {
            console.log(err);
        }
    }

    getSession() {
        return this.user;
    }

    setSession(username) {
        console.log('is this session working@@@@')
        //save to memory
        this.user.loggedIn = true;
        this.user.username = username;
        //save to localStorage
        let userString = JSON.stringify(this.user);
        window.localStorage.setItem('user', userString);
    }

    clearSession() {
        this.user.loggedIn = false;
        this.user.username = '';
        window.localStorage.removeItem('user');
    }

    isLoggedIn() {
        return this.user.loggedIn;
    }
}