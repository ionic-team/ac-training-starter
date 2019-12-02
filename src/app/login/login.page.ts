import { Component, OnInit } from '@angular/core';
import { AuthService } from '@ac/core/services';

interface LoginFormData {
    username: string;
    password: string;
}

@Component({
    selector: 'ac-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
    errorMessage = '';

    constructor(private authService: AuthService) {}

    async ngOnInit(): Promise<void> {}

    async tryLogin(): Promise<void> {
        await this.authService.login();
    }
}
