import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GhubComponent } from './ghub/ghub.component';
import { HttpClientModule } from '@angular/common/http';
import { GhubService } from './services/ghub.service';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GhubComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GhubService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
