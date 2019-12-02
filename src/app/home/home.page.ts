import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@ac/core/models';
import { IdentityService, AuthService } from '@ac/core/services';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    public currentUser$: Observable<User> = this.identityService.get();

    constructor(
        private identityService: IdentityService,
        private authService: AuthService
    ) {}

    async logout(): Promise<void> {
        this.authService.logout();
    }
}
