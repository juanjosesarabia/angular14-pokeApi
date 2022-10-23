import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesPokeService } from './Core/services/services-poke.service';
import { NavComponentComponent } from './Core/components/nav-component/nav-component.component';
import { FooterComponentComponent } from './Core/components/footer-component/footer-component.component';
import { SearchComponentComponent } from './share/components/search-component/search-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    FooterComponentComponent,
    SearchComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [ServicesPokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
