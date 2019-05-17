import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient
        ,private apiService:ApiService) { }


    register(user: any) {
        return this.apiService.post('/user/register',user );

        //return this.http.post(`${config.apiUrl}/users/register`, user);
    }

}