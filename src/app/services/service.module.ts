import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, LoginGuard } from './service.index';
// import { HttpClient } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        // HttpClient
    ],
    providers: [
        UserService,
        LoginGuard
    ],
    declarations: []
})

export class ServiceModule {}