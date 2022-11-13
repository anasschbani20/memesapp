import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MemesService} from "./services/MemesService";
import { ListComponent } from './list/list.component';
import {ListGifsComponent} from "./listGifs/listGifs.component";

@NgModule({
  declarations: [
    AppComponent,
    ListGifsComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MemesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
