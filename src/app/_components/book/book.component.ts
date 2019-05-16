import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '@/_services';


@Component({templateUrl: 'book.component.html',styleUrls:['book.component.css'] })
export class BookComponent implements OnInit
{
    constructor(private bookService:BookService)
    {

    }

    protected book:any;

    ngOnInit()
    {
        this.bookService.getBook(1).subscribe(res =>
            {
                this.book = res;
            });
    }
}