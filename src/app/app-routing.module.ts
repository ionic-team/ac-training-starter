import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from '@ac/core/routes/guards';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then(m => m.HomePageModule),
        canActivate: [LoggedInGuard]
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'logout',
        loadChildren: () =>
            import('./logout/logout.module').then(m => m.LogoutPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
