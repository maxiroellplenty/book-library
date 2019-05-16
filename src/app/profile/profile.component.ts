
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { User } from '@/_models';
import { UserService, BookService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'profile.component.html',styleUrls:['profile.component.css'] })
export class ProfileComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];


    protected results:Array<any> = [];
    /* results: any[] = [{buchtitel: "Moby Dick", img:"https://books.google.de/books/content?id=jz4yDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71OT9edJENqTKUKAUIHI34VZxn2hIRA3_oM261jrwcsfPCwcf8cXe9hF7hGd_mSgzak0tXqTC7Coc6ZL5TPUTxX1wUO5X8dr-BcB-nP3_eBSEB52kA7Sh9Hi1Nu2qz4zSDwP3SK",author:"ich",ISBN: "12457801010",available: "1" },
    {buchtitel: "Harry Potter",author:"du", ISBN: "124572201010",available: "0"},
    {buchtitel: "Handgeschriebene Notiz",author:"er", ISBN: "-",available: "5"},
    {buchtitel: "Englisch Freeway Buch",author:"sie", ISBN: "0190/123456",available: "10"}]; */

    constructor(private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private bookService :BookService,
        public router:Router
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });


    }

    ngOnInit() {
        if(this.currentUser == undefined){
            this.currentUser = {id:0, username:"testi",lastName:"",firstName:"",token:"",password:""};
        }
        this.loadAllBooks();
    }
  

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    public openBook(id)
    {
        this.router.navigate(['/book',id])
    }


    private loadAllBooks() {
        this.bookService.getBooksFromUserID(this.currentUser.id).subscribe(res => {
            this.results = res;
            console.log(this.results);
        });
    }
}