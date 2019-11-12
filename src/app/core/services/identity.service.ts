import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '@ac/env';
import { User } from '@ac/core/models';

@Injectable({
    providedIn: 'root'
})
export class IdentityService {
    private tokenKey = 'auth-token';
    private token: string;
    private user: User;

    constructor(private http: HttpClient, private storage: Storage) {}

    async set(user: User, token: string): Promise<void> {
        this.user = user;
        await this.setToken(token);
    }

    async newIdentity(token: string): Promise<void> {
        await this.setToken(token);
    }

    get(): Observable<User> {
        if (!this.user) {
            return this.http
                .get<User>(`${environment.dataService}/user/current`)
                .pipe(
                    catchError(e => of(null)),
                    tap(u => (this.user = u))
                );
        } else {
            return of(this.user);
        }
    }

    async getToken(): Promise<string> {
        if (!this.token) {
            await this.storage.ready();
            this.token = await this.storage.get(this.tokenKey);
        }
        return this.token;
    }

    async remove(): Promise<void> {
        this.user = undefined;
        await this.setToken('');
    }

    private async setToken(token: string): Promise<void> {
        this.token = token;
        await this.storage.ready();
        if (token) {
            this.storage.set(this.tokenKey, token);
        } else {
            this.storage.remove(this.tokenKey);
        }
    }
}
