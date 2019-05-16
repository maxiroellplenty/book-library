import { ErrorInterceptor } from './../_helpers/error.interceptor';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '@/_models/book';

@Injectable({ providedIn: 'root' })
export class BookService {
    constructor(private apiService:ApiService) { }

    getBooks() {
        return this.apiService.get('/books');
    }

    getBook(id)
    {
        return this.apiService.get('/book?id='+ id);
    }

    search(text: string) {
        return this.apiService.get('/bookstitle?title=' + text );
    }
}