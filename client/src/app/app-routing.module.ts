import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { InfoComponent } from './components/info/info.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { SellFormComponent } from './components/sell-form/sell-form.component';
import { SellSearchComponent } from './components/sell-search/sell-search.component';
import { UpdateComponent } from './components/update/update.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'info', component: InfoComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'search', component: SearchComponent},
  {path: 'sell-form', component: SellFormComponent},
  {path: 'sell-search', component: SellSearchComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'user', component: UserComponent, canActivate: [AuthGuardService]},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
