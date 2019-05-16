import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService 
{
    public loadingState:boolean = false;
    private headers:HttpHeaders;
    private apiUrl:string = 'http://10.62.0.186:8080/api'
    
    constructor(private http:HttpClient)
    {
        this.headers = new HttpHeaders();
    }

    public get(url):Observable<any>
    {
        this.loadingState = true;
        return this.http.get(
            this.apiUrl + url,
            {
                headers: this.headers
            }
        )
    }
    public post(url, body):Observable<any>
    {
        this.loadingState = true;
        return this.http.post(
            this.apiUrl + url,body,
            {
                headers: this.headers
            }
        )
    }
}