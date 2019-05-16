import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '@/_services';
import { ActivatedRoute, Router } from '@angular/router';


@Component({templateUrl: 'book.component.html',styleUrls:['book.component.css'] })
export class BookComponent implements OnInit
{
    constructor(private bookService:BookService, public activatedRoute: ActivatedRoute)
    {

    }
    protected book:any;

    ngOnInit()
    {
        this.bookService.getBook(this.activatedRoute.snapshot.url[1].path).subscribe(res =>
        {
            this.book = res;
        });
    }
}