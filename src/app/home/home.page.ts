import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@ac/core/models';
import { IdentityService } from '@ac/core/services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    public currentUser$: Observable<User> = this.identityService.get();

    constructor(
        private identityService: IdentityService,
        private router: Router
    ) {}

    async logout(): Promise<void> {
        this.identityService.remove();
        this.router.navigateByUrl('/logout');
    }
}
