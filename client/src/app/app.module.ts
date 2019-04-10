import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UpdateComponent } from './components/update/update.component';
import { InfoComponent } from './components/info/info.component';
import { SellSearchComponent } from './components/sell-search/sell-search.component';
import { SellFormComponent } from './components/sell-form/sell-form.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProductsService } from './services/products.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent,
    UpdateComponent,
    InfoComponent,
    SellSearchComponent,
    SellFormComponent,
    ModalComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProductsService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
