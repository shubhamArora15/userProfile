import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';

import { apiBaseUrl } from '../common/config'


@Injectable()

export class Users {

 
    constructor(private _http : Http){}
    
    createAndUpdateUser(body) {
        return new Promise((resolve, reject) => {
            console.log("inside promise....."); 
            console.log(apiBaseUrl, "apiBaeUrl");
            
            let method = body.users.id?
                        this._http.put(apiBaseUrl + 'users/' + body.users.id, body)
                        :this._http.post(apiBaseUrl + 'users', body);

            method
            .subscribe(res => {
                console.log("inside", res);
                resolve(res.json());
            })
        });
    }

    deleteUser(id) {
      return new Promise((resolve, reject) =>{
        this._http.delete(apiBaseUrl + 'users/' + id)
            .subscribe(res => {
                console.log("inside", res);
                resolve(res.json());
            })
        })
    }

    getUsers() {
        return new Promise((resolve, reject) => {
            console.log("inside promise....."); 
            console.log(apiBaseUrl, "apiBaeUrl");
            this._http.get(apiBaseUrl + 'users')
            .subscribe(res => {
                console.log("inside", res);
                resolve(res.json());
            })
        });
    }

    getUser(id) {
        return new Promise((resolve, reject) => {
            console.log("inside promise....."); 
            console.log(apiBaseUrl, "apiBaeUrl");
            this._http.get(apiBaseUrl + 'users/' + id)
            .subscribe(res => {
                console.log("inside", res);
                resolve(res.json());
            })
        });
    }

}
