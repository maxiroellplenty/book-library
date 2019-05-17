import { AuthenticationService } from './../../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    constructor(protected authenticationService:AuthenticationService, 
                private router:Router) 
    { 

    }
    protected showNavbar:boolean = true;

    ngOnInit(): void 
    { 
        //this.showNavbar =  !this.authenticationService.currentUser;
    }

    profile()
    {
        this.router.navigate(['/profile']);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
