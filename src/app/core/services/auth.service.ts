import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { environment } from '@ac/env';
import { IdentityService } from './identity.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private identityService: IdentityService
    ) {}

    login(username: string, password: string): Observable<boolean> {
        // prettier-ignore
        return this.http.post(`${environment.dataService}/auth/login`, {
            username,
            password
        }, {
            responseType: 'text'
        }).pipe(
            map(token => this.identityService.newIdentity(token)),
            mapTo(true)
        );
    }
}
