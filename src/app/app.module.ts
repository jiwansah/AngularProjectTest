import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/users/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistrationService } from './service/registration.service';
import { SessionService } from './service/session.service';
import { LayoutComponent } from './component/layout/layout.component';
import { CustomerAddComponent } from './component/customer/customerAdd.component';
import { CustomerService } from './service/customer.service';
import { CustomerListComponent } from './component/customer/customerList.component';
import { AuthGuard } from './authGuard/authGuard';
import { LoginService } from './service/login.service';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { ErrorDialogService } from './service/errordialog.service';
import { ErrorDialogComponent } from './component/error-dialog/errordialog.component';


//Routes Class meant for Creating route in Angular

const routes : Routes = [
  {path:'login',component:LoginComponent},
  {path:'registratin',component:RegistrationComponent},
  {path:'home',component:HomeComponent},
 // {path:'home',component:LayoutComponent},
  {path:'usersList',component:UserComponent, canActivate:[AuthGuard]},
  {path:'addCustomer',component:CustomerAddComponent, canActivate:[AuthGuard]},
  {path:'customerList',component:CustomerListComponent, canActivate:[AuthGuard]},
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
    HomeComponent,
    LayoutComponent,
    CustomerAddComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RegistrationService, SessionService, CustomerService, LoginService, AuthGuard,
                { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
