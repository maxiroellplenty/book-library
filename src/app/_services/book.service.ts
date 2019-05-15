import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '@/_models/book';

@Injectable({ providedIn: 'root' })
export class BookService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Book[]>(`${config.apiUrl}/books`);
    }


    getSearch(text: string) {
        return this.http.post<Book[]>(`${config.apiUrl}/books/search`, text);
    }


}