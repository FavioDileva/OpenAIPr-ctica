import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesGenerationComponent } from './images-generation/images-generation.component';

import { Textdavinci003Component } from './textdavinci003/textdavinci003.component';
import { Textdavinciedit001Component } from './textdavinciedit001/textdavinciedit001.component';
import { ModerationsComponent } from './moderations/moderations.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ImagesGenerationComponent,
    ModerationsComponent,
    Textdavinci003Component,
    Textdavinciedit001Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
