import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ListOfAccountsComponent } from './list-of-accounts/list-of-accounts.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [
{
    path:'',
    redirectTo:"login",
    pathMatch:"full"
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'signup',
  component:SignupComponent
},
{
  path:'list-of-accounts/:customerId',
  component:ListOfAccountsComponent
},
{
  path:'account-details/:customerId/:accountType',
  component:AccountDetailsComponent
},
{
  path:'send-money',
  component:SendMoneyComponent
},
{
  path:'header',
  component:HeaderComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
