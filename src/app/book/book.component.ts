import { UserService } from './../_services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService, AuthenticationService } from '@/_services';
import { ActivatedRoute, Router } from '@angular/router';


@Component({templateUrl: 'book.component.html',styleUrls:['book.component.css'] })
export class BookComponent implements OnInit
{
    constructor(private bookService:BookService, 
                public activatedRoute: ActivatedRoute, 
                private user:UserService,
                private authenticationService:AuthenticationService)
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

    rentBook()
    {
        if(this.user)
        {
            let rentBookData
            {
                userId: this.authenticationService.currentUserValue.id
            }
            this.bookService.rentBook(rentBookData).subscribe((res)=>
            {
                
            });
        }
    }
}