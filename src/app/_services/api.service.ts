import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService 
{

    public state:boolean = false;
    private headers:HttpHeaders;
    
    constructor(private http:HttpClient)
    {
        this.headers = new HttpHeaders();
    }
    public get(url):Observable<any>
    {
        this.state = true;
        return this.http.get(
            url,
            {
                headers: this.headers
            }
        )
    }
}