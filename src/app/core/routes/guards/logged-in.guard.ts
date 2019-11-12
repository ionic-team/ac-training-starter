import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { IdentityService } from '@ac/core/services';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(
        private identityService: IdentityService,
        private router: Router
    ) {}

    public canActivate(): Observable<boolean> {
        return this.identityService.get().pipe(
            map(u => !!u),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigateByUrl('/login');
                }
            })
        );
    }
}
